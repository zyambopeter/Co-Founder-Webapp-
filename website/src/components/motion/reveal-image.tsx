
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type RevealImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function RevealImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: RevealImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`overflow-hidden ${className ?? ""}`.trim()}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 12 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-auto w-full"
      />
    </motion.div>
  );
}
