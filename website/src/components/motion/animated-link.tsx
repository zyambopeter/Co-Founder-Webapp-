
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps } from "react";

type AnimatedLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function AnimatedLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: AnimatedLinkProps) {
  const reduceMotion = useReducedMotion();

  const variantClass =
    variant === "primary"
      ? "button-primary"
      : "button-secondary";

  return (
    <motion.div
      className="inline-flex"
      whileHover={reduceMotion ? undefined : { y: -1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.15,
      }}
    >
      <Link
        {...props}
        className={`button ${variantClass} ${className}`.trim()}
      >
        {children}
      </Link>
    </motion.div>
  );
}
