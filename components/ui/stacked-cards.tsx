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
      /**
       * We add +1.25 to the items.length so that after the last card
       * reaches its "sticky" spot, the user can still scroll a bit
       * before the section ends. This prevents the "overlap" bug.
       */
      style={{ height: `${(items.length + 1.25) * vhPerCard}vh` }}
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
    // Start tracking earlier (150%) for smoother, faster transition
    offset: ["start 150%", `start ${stickyPoint}px`],
  });

  // Snappier spring for faster card transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  // Use smoothProgress - faster opacity ramp for quicker visibility
  const scale = useTransform(smoothProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const yPosition = useTransform(smoothProgress, [0, 1], [100, 0]);

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
