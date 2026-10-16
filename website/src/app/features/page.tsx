
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the planned AI-powered tools and workflows in Co-Founder Elite AI.",
};

const features = [
  {
    title: "AI Co-Founder",
    description:
      "Get structured help thinking through business decisions, plans, and priorities.",
  },
  {
    title: "Project Management",
    description:
      "Organize projects, break down goals, and keep execution work connected.",
  },
  {
    title: "Business Planning",
    description:
      "Develop business models, customer hypotheses, strategies, and launch plans.",
  },
  {
    title: "Research",
    description:
      "Structure research questions and organize findings for better-informed decisions.",
  },
  {
    title: "Specialist AI Agents",
    description:
      "Explore focused workflows for product, engineering, marketing, sales, and operations.",
  },
  {
    title: "Analytics and Automation",
    description:
      "Plan measurable outcomes and identify workflows that could benefit from automation.",
  },
];

export default function FeaturesPage() {
  return (
    <Container className="section">
      <div className="max-w-3xl">
        <p className="eyebrow">Platform capabilities</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          The tools behind better execution.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          A founder-focused platform designed to connect planning, product
          development, and day-to-day business work.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <article key={feature.title} className="surface p-6">
            <p className="text-sm font-semibold text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-5 text-xl font-semibold">{feature.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm text-[var(--muted)]">
        These descriptions represent the product direction. Each capability
        must be implemented and tested before being advertised as available.
      </p>

      <div className="mt-10">
        <Link href="/agents" className="button button-secondary">
          Explore AI agents
        </Link>
      </div>
    </Container>
  );
}
