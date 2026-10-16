
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

export function Parallax({
  children,
  className,
  distance = 18,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [distance, -distance],
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: reduceMotion ? 0 : y,
      }}
    >
      {children}
    </motion.div>
  );
}
