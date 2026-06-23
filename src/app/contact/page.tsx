import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Elementa Protocol address, email, phone, and contact form. Connect with support, partnerships, and the community.",
};

export default function Page() {
  return <ContactPage />;
}
