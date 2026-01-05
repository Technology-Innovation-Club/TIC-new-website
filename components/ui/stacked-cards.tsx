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
       * We add +1 to the items.length so that after the last card
       * reaches its "sticky" spot, the user can still scroll a bit
       * before the section ends. This prevents the "overlap" bug.
       */
      style={{ height: `${(items.length + 1) * vhPerCard}vh` }}
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
    // We extend the start of the "watch zone" by 20% so it picks up the
    // card movement earlier, making it feel more gradual.
    offset: ["start 120%", `start ${stickyPoint}px`],
  });

  /**
   * FIX: Added useSpring to the local progress.
   * stiffness: 50 (Lower = slower/softer)
   * damping: 20 (Higher = less bounce)
   * mass: 1 (Heavier feel)
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  // Use smoothProgress instead of scrollYProgress
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const yPosition = useTransform(smoothProgress, [0, 1], [150, 0]);

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
        marginBottom: "30vh", // Increased margin for a more relaxed scroll feel
      }}
    >
      {children}
    </motion.div>
  );
}
