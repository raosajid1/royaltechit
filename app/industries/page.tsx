import Link from "next/link";
import {
  ArrowRight,
  Factory,
  ShoppingBag,
  ArrowLeftRight,
  HardHat,
  HeartPulse,
  GraduationCap,
  Hotel,
  CheckCircle2,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/lib/data";

export const metadata = generatePageSEO({
  title: "Industries We Serve",
  description:
    "Industry-specific ERP and IT solutions for manufacturing, retail, construction, healthcare, education, hospitality, and trading businesses.",
  keywords:
    "industries, ERP solutions, manufacturing, retail, construction, healthcare, education, hospitality, trading, industry-specific IT",
});

const iconMap: Record<string, React.ElementType> = {
  Factory,
  ShoppingBag,
  ArrowLeftRight,
  HardHat,
  HeartPulse,
  GraduationCap,
  Hotel,
};

export default function IndustriesPage() {
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
              Industries
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Solutions for Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Industry
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              We deliver tailored ERP and technology solutions that address the unique
              challenges of each industry. From manufacturing to healthcare, our expertise
              spans every major sector.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industries"
            title="Industries We Serve"
            description="Deep industry expertise combined with technical excellence to deliver solutions that truly understand your business."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] || Factory;
              return (
                <div
                  key={industry.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link href={`/industries/${industry.id}`}>
                    <div className="group bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-lg bg-royal/5 flex items-center justify-center mb-4 group-hover:bg-royal/10 transition-colors">
                        <Icon className="w-6 h-6 text-royal" />
                      </div>
                      <h3 className="font-poppins text-lg font-semibold text-navy mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-navy/50 font-inter leading-relaxed flex-grow mb-4">
                        {industry.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-royal font-inter group/link">
                        Learn More
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
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
              Not Sure Which Solution Fits Your Industry?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Let our experts analyze your business requirements and recommend the perfect
              technology solution tailored to your industry and specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Get a Free Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
