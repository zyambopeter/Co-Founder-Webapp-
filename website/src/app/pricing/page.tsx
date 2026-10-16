
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore the planned subscription tiers for Co-Founder Elite AI.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Explore the founder workspace.",
    features: [
      "Basic AI Co-Founder",
      "Basic research workflows",
      "Basic business planning",
    ],
  },
  {
    name: "Starter",
    price: "$19",
    period: "per month",
    description: "For founders building momentum.",
    features: [
      "Advanced research workflows",
      "Founder workflows",
      "More projects",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For deeper AI-assisted execution.",
    features: [
      "AI agent capabilities",
      "Automation workflows",
      "Advanced analytics",
    ],
  },
  {
    name: "Business",
    price: "$99",
    period: "per month",
    description: "For organized business operations.",
    features: [
      "Team workspace",
      "Multiple users",
      "Business workflows",
    ],
  },
  {
    name: "Scale",
    price: "$249",
    period: "per month",
    description: "For larger operational needs.",
    features: [
      "Advanced integrations",
      "Larger agent workloads",
      "Priority capabilities",
    ],
  },
];

export default function PricingPage() {
  return (
    <Container className="section">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Planned subscription tiers</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Choose the right level for your work.
        </h1>
        <p className="mt-5 text-[var(--muted)]">
          Start with the basics and evaluate additional capabilities as your
          needs grow.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="surface flex flex-col p-6">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {plan.description}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight">
                {plan.price}
              </span>
              <span className="text-sm text-[var(--muted)]">
                {plan.period}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <span aria-hidden="true" className="text-[var(--accent)]">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className={`button mt-8 w-full ${
                plan.name === "Pro" ? "button-primary" : "button-secondary"
              }`}
            >
              Get started
            </Link>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[var(--muted)]">
        These are proposed prices and planned features, not a confirmation
        that subscriptions are available for purchase. Currency, taxes,
        billing terms, feature limits, and web payment support must be
        confirmed before checkout is enabled.
      </p>
    </Container>
  );
}
