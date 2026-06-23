/** Stable URL fragment for in-page anchors (legal + docs). */
export function sectionAnchorFromTitle(title: string): string {
  const cleaned = title
    .replace(/&apos;/g, "")
    .replace(/'/g, "")
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return cleaned || "section";
}
