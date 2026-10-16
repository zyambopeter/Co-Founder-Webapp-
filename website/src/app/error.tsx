
"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Connect a privacy-conscious error monitoring service later.
    console.error("Website route error:", error.message);
  }, [error]);

  return (
    <Container className="grid min-h-[55vh] place-items-center py-16 text-center">
      <div>
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 text-3xl font-semibold">
          Let's try that again.
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          The page could not finish loading. Please retry.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="button button-primary mt-7"
        >
          Try again
        </button>
      </div>
    </Container>
  );
}
