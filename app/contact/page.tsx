import { generatePageSEO } from "@/lib/metadata";
import ContactContent from "./ContactContent";

export const metadata = generatePageSEO({
  title: "Contact Us — ERP & Bookkeeping Services Lahore",
  description:
    "Contact Royal Tech IT in Lahore, Pakistan for expert ERP implementation, bookkeeping, accounting, and digital transformation services. We work remotely across all of Pakistan.",
  keywords:
    "contact Royal Tech IT Lahore, ERP services inquiry Lahore, bookkeeping services Lahore, Odoo ERP consultation Pakistan, IT consulting Lahore, remote IT services Pakistan, Lahore technology consultants",
});

export default function ContactPage() {
  return <ContactContent />;
}
