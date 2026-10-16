
"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/10 py-4">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 py-2 text-left font-medium"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          <span>{title}</span>
          <span aria-hidden="true" className="text-xl text-[var(--muted)]">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="accordion-panel"
            initial={
              reduceMotion
                ? false
                : { height: 0, opacity: 0 }
            }
            animate={{ height: "auto", opacity: 1 }}
            exit={
              reduceMotion
                ? undefined
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.22,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="pb-3 pr-6 text-sm leading-7 text-[var(--muted)]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
