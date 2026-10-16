
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Discover the planned specialist agent departments in Co-Founder Elite AI.",
};

const departments = [
  {
    name: "Executive",
    description: "Strategy, priorities, and founder decision support.",
  },
  {
    name: "Business",
    description: "Business models, operations, and growth planning.",
  },
  {
    name: "Product",
    description: "Customer problems, product requirements, and roadmaps.",
  },
  {
    name: "Engineering",
    description: "Software architecture, implementation, and testing.",
  },
  {
    name: "Infrastructure",
    description: "Deployment planning, reliability, and technical operations.",
  },
  {
    name: "Marketing",
    description: "Positioning, distribution, campaigns, and acquisition.",
  },
  {
    name: "Content",
    description: "Content planning, writing workflows, and editorial systems.",
  },
  {
    name: "Sales",
    description: "Sales processes, customer discovery, and follow-up planning.",
  },
  {
    name: "Automation",
    description: "Repeatable workflows and process improvement.",
  },
  {
    name: "Legal",
    description: "Legal-information organization and compliance checklists.",
  },
  {
    name: "Analytics",
    description: "Metrics, performance analysis, and reporting workflows.",
  },
];

export default function AgentsPage() {
  return (
    <Container className="section">
      <div className="max-w-3xl">
        <p className="eyebrow">Specialist AI workflows</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          A specialist for every part of building.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Explore the planned departments that will help founders organize
          different types of business work in one connected workspace.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((department, index) => (
          <article key={department.name} className="surface p-6">
            <p className="text-sm font-semibold text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-4 text-xl font-semibold">
              {department.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {department.description}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-6 text-[var(--muted)]">
        This page describes planned agent departments. It does not mean that
        these agents are already connected to AI models or ready to execute
        actions.
      </p>

      <Link href="/pricing" className="button button-secondary mt-8">
        View planned plans
      </Link>
    </Container>
  );
}
