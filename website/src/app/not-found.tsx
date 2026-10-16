
import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          This page doesn't exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
          The address may be incorrect, or the page may not have been created
          yet.
        </p>
        <Link href="/" className="button button-primary mt-8">
          Return home
        </Link>
      </div>
    </Container>
  );
}
