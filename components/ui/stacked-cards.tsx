"use client";

import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RenderCard<T> = (item: T, index: number) => ReactNode;

export function StackedCards<T>({
  items,
  renderCard,
  className,
  stageClassName,
  topOffset = 96,
  peek = 18,
  vhPerCard = 100,
}: {
  items: T[];
  renderCard: RenderCard<T>;
  className?: string;
  stageClassName?: string;
  topOffset?: number;
  peek?: number;
  vhPerCard?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [stageHeight, setStageHeight] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.6,
  });

  const totalSegments = Math.max(items.length + 1, 2);

  const scrollHeight = useMemo(() => {
    const vh = (items.length + 1) * vhPerCard;
    return `${vh}vh`;
  }, [items.length, vhPerCard]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("ResizeObserver" in window)) return;

    const update = () => {
      const heights = cardRefs.current
        .map((el) => el?.getBoundingClientRect().height ?? 0)
        .filter((h) => h > 0);
      const max = heights.length ? Math.max(...heights) : 0;
      if (!max) return;
      setStageHeight(Math.ceil(max + peek * Math.max(items.length - 1, 0)));
    };

    update();

    const ro = new ResizeObserver(() => update());
    cardRefs.current.forEach((el) => {
      if (el) ro.observe(el);
    });

    return () => ro.disconnect();
  }, [items.length, peek]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: scrollHeight }}
    >
      <div className="sticky" style={{ top: topOffset }}>
        <div
          className={cn("relative", stageClassName)}
          style={stageHeight ? { height: stageHeight } : undefined}
        >
          {items.map((item, index) => (
            <StackedCardLayer
              key={index}
              index={index}
              totalItems={items.length}
              totalSegments={totalSegments}
              progress={progress}
              peek={peek}
              setRef={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              {renderCard(item, index)}
            </StackedCardLayer>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackedCardLayer({
  children,
  index,
  totalItems,
  totalSegments,
  progress,
  peek,
  setRef,
}: {
  children: ReactNode;
  index: number;
  totalItems: number;
  totalSegments: number;
  progress: MotionValue<number>;
  peek: number;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const start = index / totalSegments;
  const end = (index + 1) / totalSegments;

  const finalY = -peek * Math.max(totalItems - 1 - index, 0);
  const enterY = 64 + Math.max(totalItems - 1 - index, 0) * 10;
  const fadeInAt = Math.min(start + 0.04, end);

  const y = useTransform(
    progress,
    [0, start, end, 1],
    [enterY, enterY, 0, finalY],
  );
  const scale = useTransform(
    progress,
    [0, start, end, 1],
    [0.985, 0.985, 1, 0.985],
  );
  const opacity = useTransform(
    progress,
    [0, start, fadeInAt, end, 1],
    [0, 0, 1, 1, 1],
  );

  return (
    <motion.div
      ref={setRef}
      style={{ y, scale, opacity, zIndex: index }}
      className="absolute inset-0 will-change-transform"
    >
      {children}
    </motion.div>
  );
}
