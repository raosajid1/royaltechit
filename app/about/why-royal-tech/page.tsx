import {
  Shield,
  Award,
  Handshake,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Globe,
  Headphones,
  Settings,
  TrendingUp,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

export const metadata = generatePageSEO({
  title: "Why Royal Tech IT",
  description:
    "Discover what makes Royal Tech IT the preferred technology partner — deep expertise, certified professionals, proven results, and unwavering commitment.",
  keywords:
    "why choose Royal Tech IT, IT consulting partner Pakistan, Odoo partner, digital transformation company",
});

const reasons = [
  {
    icon: Award,
    title: "Deep Industry Expertise",
    description:
      "Years of hands-on experience across manufacturing, retail, healthcare, education, trading, construction, and hospitality. We understand your industry's unique challenges and opportunities.",
  },
  {
    icon: Shield,
    title: "Certified Professionals",
    description:
      "Our team holds certifications from Odoo, AWS, Microsoft, and other leading technology providers. We invest continuously in training to stay ahead of the curve.",
  },
  {
    icon: Settings,
    title: "End-to-End Services",
    description:
      "From strategy and consultation to implementation, integration, training, and ongoing support — we cover the entire technology lifecycle.",
  },
  {
    icon: BarChart3,
    title: "Proven Track Record",
    description:
      "100+ successful projects delivered with a 98% client satisfaction rate across 10+ countries. Our results speak for themselves.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We don't just deliver projects — we build partnerships. Every solution is tailored to your specific needs, goals, and budget.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description:
      "Our agile methodology ensures rapid delivery, transparent communication, and the flexibility to adapt as your needs evolve.",
  },
  {
    icon: Globe,
    title: "Global Standards, Local Expertise",
    description:
      "We combine international best practices with deep understanding of local business environments, regulations, and market dynamics.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to ensure your systems run smoothly and any issues are resolved promptly.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "We define clear KPIs before every engagement and report on measurable outcomes — from cost savings to efficiency gains and revenue growth.",
  },
];

export default function WhyRoyalTechPage() {
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
              Why Choose Us
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Why Royal Tech IT?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Your Trusted Technology Partner
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              We don't just deliver projects — we build partnerships that drive
              lasting business value. Here's why businesses trust Royal Tech IT.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="What Sets Us Apart"
            title="Nine Reasons to Partner With Us"
            description="Every engagement is built on expertise, trust, and a relentless focus on delivering results."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-royal/10 to-sky/10 flex items-center justify-center mb-4 group-hover:from-royal/20 group-hover:to-sky/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-royal" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="The Difference"
            title="How We Compare"
            description="See what makes Royal Tech IT different from traditional IT consultancies."
          />
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-card border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-royal to-sky">
                  <th className="text-left px-6 py-4 text-white font-semibold font-poppins">Factor</th>
                  <th className="text-left px-6 py-4 text-white font-semibold font-poppins">Royal Tech IT</th>
                  <th className="text-left px-6 py-4 text-white font-semibold font-poppins">Traditional Firms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Approach", "Partnership-driven, client-first", "Project-driven, deadline-first"],
                  ["Solutions", "Tailor-made for your business", "One-size-fits-all"],
                  ["Support", "24/7 dedicated support", "Limited business hours"],
                  ["Expertise", "Multi-industry, certified", "Often narrow specialization"],
                  ["Delivery", "Agile, transparent, iterative", "Waterfall, rigid timelines"],
                  ["Value", "Measurable ROI focused", "Output focused"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3.5 text-navy font-medium font-inter">{row[0]}</td>
                    <td className="px-6 py-3.5">
                      <span className="flex items-center gap-1.5 text-green-600 font-medium font-inter">
                        <CheckCircle2 className="w-4 h-4" /> {row[1]}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-navy/40 font-inter">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-royal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Experience the Royal Tech Difference
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Partner with us and discover what true technology partnership feels like.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Company Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
