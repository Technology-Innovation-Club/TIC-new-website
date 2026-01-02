"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type RenderCard<T> = (item: T, index: number) => ReactNode;

export function StackedCards<T>({
  items,
  renderCard,
  className,
  topOffset = 96,
  peek = 18,
}: {
  items: T[];
  renderCard: RenderCard<T>;
  className?: string;
  topOffset?: number;
  peek?: number;
}) {
  return (
    <div className={cn("relative isolate", className)}>
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
    mass: 1
  });

  // Use smoothProgress instead of scrollYProgress
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const y = useTransform(smoothProgress, [0, 1], [150, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="w-full sticky will-change-transform"
      style={{
        y,
        scale,
        opacity,
        top: topOffset + (index * peek), 
        zIndex: index,
        marginBottom: "30vh", // Increased margin for a more relaxed scroll feel
      }}
    >
      {children}
    </motion.div>
  );
}
