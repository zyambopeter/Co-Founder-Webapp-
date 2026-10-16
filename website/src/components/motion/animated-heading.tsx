
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function AnimatedHeading({
  children,
  className,
  as = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 14 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
