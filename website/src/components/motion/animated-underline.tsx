
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

type AnimatedUnderlineProps = ComponentProps<typeof Link>;

export function AnimatedUnderline({
  children,
  className = "",
  ...props
}: AnimatedUnderlineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Link
      {...props}
      className={`group relative inline-flex flex-col ${className}`.trim()}
    >
      <span>{children}</span>
      <motion.span
        aria-hidden="true"
        className="h-px w-full origin-left bg-current"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        whileFocus={{ scaleX: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.2,
          ease: "easeOut",
        }}
        style={{
          scaleX: reduceMotion ? 1 : undefined,
        }}
      />
    </Link>
  );
}
