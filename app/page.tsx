import { generatePageSEO } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TransformationProcess } from "@/components/home/TransformationProcess";
import { IndustrySolutions } from "@/components/home/IndustrySolutions";
import { TechStack } from "@/components/home/TechStack";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata = generatePageSEO({
  title: "ERP & Bookkeeping Services in Lahore, Pakistan",
  description:
    "Royal Tech IT provides expert ERP implementation (Odoo), bookkeeping, accounting, tax, and digital transformation services across Lahore and all of Pakistan. Remote delivery available.",
  keywords:
    "ERP services Pakistan, bookkeeping services Lahore, Odoo ERP Lahore, accounting services Lahore, IT consulting Lahore, ERP implementation Pakistan, remote bookkeeping Pakistan, Odoo partner Pakistan, business automation Lahore, digital transformation Pakistan",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ServicesPreview />
      <AboutPreview />
      <StatsSection />
      <WhyChooseUs />
      <TransformationProcess />
      <IndustrySolutions />
      <TechStack />
      <ProjectsPreview />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
