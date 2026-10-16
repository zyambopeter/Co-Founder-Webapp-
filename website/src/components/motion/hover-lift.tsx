
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function HoverLift({
  children,
  className,
  ...props
}: HoverLiftProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -3 }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.2,
        ease: "easeOut",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
