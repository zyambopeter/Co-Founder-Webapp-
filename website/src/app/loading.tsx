
export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="grid min-h-[45vh] place-items-center px-6"
    >
      <div className="text-center">
        <div
          aria-hidden="true"
          className="mx-auto size-8 animate-spin rounded-full border-2 border-white/15 border-t-[var(--accent)] motion-reduce:animate-none"
        />
        <p className="mt-4 text-sm text-[var(--muted)]">
          Preparing your workspace…
        </p>
      </div>
    </div>
  );
}
