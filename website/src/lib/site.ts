
export const siteConfig = {
  name: "Co-Founder Elite AI",
  shortName: "Co-Founder",
  description:
    "Your AI co-founder for planning, building, launching, and growing your business.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  links: {
    home: "/",
    features: "/features",
    pricing: "/pricing",
    login: "/login",
    signup: "/signup",
  },
} as const;

export const publicNavigation = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
