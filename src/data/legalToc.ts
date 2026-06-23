import { sectionAnchorFromTitle } from "@/utils/sectionAnchor";

export const privacySectionTitles = [
  "Introduction",
  "Who We Are",
  "Self-Custody Wallet Model",
  "Information We Collect",
  "How We Use Information",
  "Cookies and Tracking Technologies",
  "Analytics",
  "How We Share Information",
  "Public Blockchain Transparency",
  "Wallet Connections, dApps, and Signing",
  "Data Retention",
  "Security",
  "Your Rights and Choices",
  "International Data Transfers",
  "Children's Privacy", // matches page title (apostrophe)
  "Third-Party Services",
  "Changes to This Policy",
  "Contact Us",
] as const;

export const termsSectionTitles = [
  "1. Agreement to Terms",
  "2. Eligibility",
  "3. Self-Custody Wallet Responsibility",
  "4. Blockchain Risks",
  "5. Acceptable Use",
  "6. Limitation of Liability",
  "7. Governing Law",
  "8. Contact",
  "9. Third-Party Networks, dApps, and Integrations",
  "10. Taxes, Reporting, and Regulatory Compliance",
  "11. Intellectual Property and Limited License",
  "12. Amendments to These Terms",
] as const;

export function titlesToToc(titles: readonly string[]) {
  return titles.map((full) => ({
    id: sectionAnchorFromTitle(full),
    label: full.replace(/^\d+\.\s*/, "").trim(),
  }));
}

export const privacyToc = titlesToToc(privacySectionTitles);
export const termsToc = titlesToToc(termsSectionTitles);
