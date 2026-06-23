import type { Metadata } from "next";
import { DocReaderLayout } from "@/components/docs/DocReaderLayout";
import { docsNav } from "@/data/docsPage";
import { docsToc } from "@/data/docsPage";


export default function DocsPage() {
  return (
    <DocReaderLayout
      title="Documentation"
      breadcrumb={[{ label: "Home", href: "/" }]}
      navGroups={docsNav}
      tocItems={docsToc}
    />
  );
}
