"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type RenderCard<T> = (item: T, index: number) => ReactNode;

export function StackedCards<T>({
  items,
  renderCard,
  className,
  stageClassName,
  topOffset = 220,
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

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
      style={{ minHeight: `${items.length * vhPerCard}vh` }}
    >
      <div
        className={cn("sticky flex flex-col items-center", stageClassName)}
        style={{ top: topOffset }}
      >
        {items.map((item, index) => (
          <StackedCardLayer
            key={index}
            index={index}
            totalItems={items.length}
            peek={peek}
            topOffset={topOffset}
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
}: {
  children: ReactNode;
  index: number;
  totalItems: number;
  peek: number;
  topOffset: number;
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
        marginBottom: "5vh", // Reduced margin for tighter layout
      }}
    >
      {children}
    </motion.div>
  );
}
