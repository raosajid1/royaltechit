import { generatePageSEO } from "@/lib/metadata";
import CareerContent from "./CareerContent";

export const metadata = generatePageSEO({
  title: "Career",
  description:
    "Join Royal Tech IT and be part of a dynamic team transforming businesses through technology. Explore career opportunities in ERP, software development, and digital marketing.",
  keywords:
    "careers, jobs, Odoo ERP consultant, software developer, digital marketing, Lahore jobs, remote jobs Pakistan",
});

export default function CareerPage() {
  return <CareerContent />;
}
