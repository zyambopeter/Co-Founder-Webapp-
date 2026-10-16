
"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransition({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 5 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={
          reduceMotion
            ? undefined
            : { opacity: 0 }
        }
        transition={{
          duration: reduceMotion ? 0 : 0.18,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
