/** Documentation hub — nav + on-page TOC ids must match `DocsArticleBody` section `id`s. */

export const docsNav = [
  {
    group: "Overview",
    items: [
      { id: "introduction", label: "Introduction", href: "#introduction" },
      { id: "vision-and-purpose", label: "Vision & purpose", href: "#vision-and-purpose" },
      { id: "ecosystem-hierarchy", label: "Ecosystem hierarchy", href: "#ecosystem-hierarchy" },
    ],
  },
  {
    group: "Products",
    items: [
      { id: "elementa-wallet-overview", label: "Elementa Wallet", href: "#elementa-wallet-overview" },
      { id: "product-philosophy", label: "Product philosophy", href: "#product-philosophy" },
    ],
  },
  {
    group: "Strategy & roadmap",
    items: [
      { id: "research-and-development", label: "Research & development", href: "#research-and-development" },
      { id: "market-positioning", label: "Market positioning", href: "#market-positioning" },
      { id: "problem-statement", label: "Problem statement", href: "#problem-statement" },
      { id: "security-architecture", label: "Security architecture", href: "#security-architecture" },
      { id: "current-status", label: "Current status", href: "#current-status" },
      { id: "roadmap", label: "Roadmap", href: "#roadmap" },
      { id: "conclusion", label: "Conclusion", href: "#conclusion" },
    ],
  },
] as const;

export const docsToc = [
  { id: "introduction", label: "Introduction" },
  { id: "vision-and-purpose", label: "Vision & purpose" },
  { id: "ecosystem-hierarchy", label: "Ecosystem hierarchy" },
  { id: "elementa-wallet-overview", label: "Elementa Wallet" },
  { id: "product-philosophy", label: "Product philosophy" },
  { id: "research-and-development", label: "Research & development" },
  { id: "market-positioning", label: "Market positioning" },
  { id: "problem-statement", label: "Problem statement" },
  { id: "security-architecture", label: "Security architecture" },
  { id: "current-status", label: "Current status" },
  { id: "roadmap", label: "Roadmap" },
  { id: "conclusion", label: "Conclusion" },
] as const;
