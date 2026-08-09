import Link from "next/link";
import {
  LayoutGrid,
  Receipt,
  FileCheck,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Search,
  Settings,
  Headphones,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata = generatePageSEO({
  title: "Our Services",
  description:
    "Comprehensive IT services including Odoo ERP, software development, web & mobile apps, cloud solutions, cyber security, digital marketing, and more.",
  keywords:
    "IT services, ERP implementation, software development, web development, mobile apps, cloud solutions, cyber security, digital marketing, Odoo partner",
});

const iconMap: Record<string, React.ElementType> = {
  LayoutGrid,
  Receipt,
  FileCheck,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  TrendingUp,
};

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your business needs, challenges, and goals to create a tailored strategy.",
  },
  {
    icon: Settings,
    title: "Planning",
    description: "A comprehensive roadmap is developed with clear milestones, timelines, and deliverables.",
  },
  {
    icon: Code,
    title: "Execution",
    description: "Our experts implement the solution using agile methodology with regular client updates.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance, training, and 24/7 support ensure long-term success and optimization.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-royal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,168,67,0.06),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-72 h-72 border border-sky/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-accent/10 rounded-full" />

        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Our Services
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                IT Solutions
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              From ERP implementation to digital marketing, we offer end-to-end technology
              services designed to transform your business operations and drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="What We Offer"
            title="Solutions Designed for Your Success"
            description="Every service is delivered with the same commitment to quality, innovation, and client satisfaction."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || LayoutGrid;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative aspect-[16/9] bg-navy-50 overflow-hidden">
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-lg bg-royal/5 flex items-center justify-center mb-4 group-hover:bg-royal/10 transition-colors">
                      <Icon className="w-6 h-6 text-royal" />
                    </div>
                    <h3 className="font-poppins text-lg font-semibold text-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy/50 font-inter leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky flex-shrink-0" />
                          <span className="text-xs text-navy/60 font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-royal font-inter group/link mt-auto"
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Our Process"
            title="How We Deliver Results"
            description="A proven methodology that ensures every project is delivered on time, within budget, and beyond expectations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-royal to-sky flex items-center justify-center mx-auto mb-4 shadow-lg shadow-royal/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute top-0 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gradient-to-r from-royal/30 to-transparent hidden lg:block" />
                <span className="inline-block w-8 h-8 rounded-full bg-royal/5 border border-royal/10 text-royal text-xs font-bold font-inter flex items-center justify-center mx-auto mb-3">
                  0{index + 1}
                </span>
                <h3 className="font-poppins text-base font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-royal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-40 h-40 border border-sky/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-accent/10 rounded-full" />

        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
