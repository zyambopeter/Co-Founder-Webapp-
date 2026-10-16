
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function AnimatedButton({
  children,
  className = "",
  variant = "primary",
  disabled,
  type = "button",
  ...props
}: AnimatedButtonProps) {
  const reduceMotion = useReducedMotion();

  const variantClass =
    variant === "primary"
      ? "button-primary"
      : "button-secondary";

  return (
    <motion.button
      {...props}
      type={type}
      disabled={disabled}
      className={`button ${variantClass} ${className}`.trim()}
      whileHover={
        reduceMotion || disabled
          ? undefined
          : { y: -1 }
      }
      whileTap={
        reduceMotion || disabled
          ? undefined
          : { scale: 0.98 }
      }
      transition={{
        duration: reduceMotion ? 0 : 0.15,
      }}
    >
      {children}
    </motion.button>
  );
}
