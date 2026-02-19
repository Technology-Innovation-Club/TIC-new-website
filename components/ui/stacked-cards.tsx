"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

type RenderCard<T> = (item: T, index: number) => ReactNode;

export function StackedCards<T>({
  items,
  renderCard,
  className,
  stageClassName,
  topOffset = 220,
  peek = 18,
  vhPerCard = 100,
  cardMinHeight = 450,
}: {
  items: T[];
  renderCard: RenderCard<T>;
  className?: string;
  stageClassName?: string;
  topOffset?: number;
  peek?: number;
  vhPerCard?: number;
  cardMinHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [sharedCardHeight, setSharedCardHeight] = useState<number>();

  const measureSharedCardHeight = useCallback(() => {
    const layers = contentRefs.current.filter(
      (node): node is HTMLDivElement => node !== null,
    );

    if (!layers.length) return;

    const previousInlineHeights = layers.map((layer) => layer.style.height);

    layers.forEach((layer) => {
      layer.style.height = "auto";
    });

    const measuredHeights = layers.map((layer) => {
      const cardRoot = layer.firstElementChild as HTMLElement | null;
      if (!cardRoot) return layer.offsetHeight;

      // offsetHeight/scrollHeight are layout metrics and not affected by Framer transforms.
      return Math.ceil(Math.max(cardRoot.offsetHeight, cardRoot.scrollHeight));
    });

    layers.forEach((layer, index) => {
      layer.style.height = previousInlineHeights[index] ?? "";
    });

    const nextHeight = Math.max(cardMinHeight, ...measuredHeights);
    setSharedCardHeight((prev) => (prev === nextHeight ? prev : nextHeight));
  }, [cardMinHeight]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frameId = 0;

    const scheduleMeasure = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(measureSharedCardHeight);
    };

    scheduleMeasure();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(scheduleMeasure)
        : null;

    resizeObserver?.observe(container);

    const images = Array.from(
      container.querySelectorAll("img"),
    ) as HTMLImageElement[];

    for (const image of images) {
      if (image.complete) continue;
      image.addEventListener("load", scheduleMeasure, { once: true });
      image.addEventListener("error", scheduleMeasure, { once: true });
    }

    window.addEventListener("resize", scheduleMeasure);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      for (const image of images) {
        image.removeEventListener("load", scheduleMeasure);
        image.removeEventListener("error", scheduleMeasure);
      }
    };
  }, [items.length, measureSharedCardHeight]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
      style={{ minHeight: `${(items.length + 0.5) * vhPerCard}vh` }}
    >
      <div
        className={cn("sticky flex flex-col items-center", stageClassName)}
        style={{ top: topOffset }}
      >
        {items.map((item, index) => (
          <StackedCardLayer
            key={index}
            index={index}
            peek={peek}
            topOffset={topOffset}
            cardMinHeight={cardMinHeight}
            sharedCardHeight={sharedCardHeight}
            contentRef={(node) => {
              contentRefs.current[index] = node;
            }}
          >
            {renderCard(item, index)}
          </StackedCardLayer>
        ))}
      </div>
    </div>
  );
}

function StackedCardLayer({
  children,
  index,
  peek,
  topOffset,
  cardMinHeight,
  sharedCardHeight,
  contentRef,
}: {
  children: ReactNode;
  index: number;
  peek: number;
  topOffset: number;
  cardMinHeight?: number;
  sharedCardHeight?: number;
  contentRef?: (node: HTMLDivElement | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const stickyPoint = topOffset + index * peek;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    // Tighter scroll range - cards animate in faster
    offset: ["start 105%", `start ${stickyPoint}px`],
  });

  // Very snappy spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    mass: 0.5,
  });

  // Quick animations - minimal travel distance
  const scale = useTransform(smoothProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const yPosition = useTransform(smoothProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="w-full sticky will-change-transform"
      style={{
        y: yPosition,
        scale,
        opacity,
        top: index * peek + topOffset,
        zIndex: index,
      }}
    >
      <div
        ref={contentRef}
        className="flex flex-col min-h-0 [&>*]:flex-1"
        style={{ minHeight: cardMinHeight, height: sharedCardHeight }}
      >
        {children}
      </div>
    </motion.div>
  );
}
