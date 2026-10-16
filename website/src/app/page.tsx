
import Link from "next/link";
import { Container } from "@/components/layout/container";

const capabilities = [
  {
    number: "01",
    title: "Think strategically",
    description:
      "Organize ideas, explore opportunities, and turn business goals into practical plans.",
  },
  {
    number: "02",
    title: "Build with structure",
    description:
      "Manage projects, plan products, and move from a concept toward a working solution.",
  },
  {
    number: "03",
    title: "Work with AI agents",
    description:
      "Explore specialist AI workflows for business, product, engineering, marketing, and more.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <Container className="grid min-h-[650px] items-center gap-14 py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow">Your AI-powered founder workspace</p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Build your next big idea with{" "}
              <span className="text-[var(--accent)]">clarity.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Co-Founder Elite AI brings business planning, project
              organization, research, and specialist AI workflows into one
              founder-focused workspace.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/signup" className="button button-primary">
                Start building <span aria-hidden="true">→</span>
              </Link>
              <Link href="/features" className="button button-secondary">
                Explore the platform
              </Link>
            </div>

            <p className="mt-5 text-xs text-[var(--muted)]">
              Product capabilities will be released and verified progressively.
            </p>
          </div>

          <div className="surface relative overflow-hidden p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-[var(--muted)]">FOUNDER WORKSPACE</p>
                <h2 className="mt-1 text-xl font-semibold">Your next move</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--accent)]">
                AI-assisted
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Strategy", "Clarify the business opportunity"],
                ["Product", "Define the first useful version"],
                ["Execution", "Turn priorities into tasks"],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/5 text-sm font-semibold">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-[var(--muted)]">
              Illustrative workflow preview — not a live dashboard.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">One founder workspace</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From ambitious idea to organized execution.
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Build with a clearer process instead of juggling disconnected
              tools and scattered plans.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.number} className="surface p-6">
                <p className="text-sm font-semibold text-[var(--accent)]">
                  {item.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Your next step starts here.
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Explore the planned capabilities of your founder workspace.
            </p>
          </div>
          <Link href="/features" className="button button-primary">
            Explore features
          </Link>
        </Container>
      </section>
    </>
  );
}
