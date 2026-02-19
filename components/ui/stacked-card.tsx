"use client";

import type { ReactNode } from "react";

interface StackedCardProps {
  index: number;
  baseOffset?: number;
  stackGap?: number;
  className?: string;
  children: ReactNode;
}

export function StackedCard({
  index,
  baseOffset = 64,
  stackGap = 20,
  className,
  children,
}: StackedCardProps) {
  return (
    <article
      key={`stacked-card-${index}`}
      className={className}
      style={{
        position: "sticky",
        top: `${baseOffset + index * stackGap}px`,
        marginBottom: `${stackGap}px`,
      }}
    >
      {children}
    </article>
  );
}
