import { Target, Eye, CheckCircle2, Lightbulb, Rocket, Heart, ArrowRight } from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Link from "next/link";

export const metadata = generatePageSEO({
  title: "Mission & Vision",
  description:
    "Discover the mission and vision that drive Royal Tech IT — empowering businesses with innovative technology solutions for a digital future.",
  keywords:
    "Royal Tech IT mission, company vision, digital transformation Pakistan, IT consulting mission",
});

const missionPoints = [
  "Deliver enterprise-grade ERP and software solutions that streamline operations",
  "Provide end-to-end digital transformation consulting and implementation",
  "Ensure measurable business outcomes through technology innovation",
  "Maintain unwavering commitment to quality and client satisfaction",
  "Foster long-term partnerships built on trust and transparency",
];

const visionPoints = [
  "Be the most trusted technology partner across the region",
  "Set new benchmarks for innovation and excellence in IT consulting",
  "Empower every business with access to enterprise-grade technology",
  "Create lasting value for clients, employees, and communities",
  "Lead the digital transformation movement in emerging markets",
];

export default function MissionVisionPage() {
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
              Our Purpose
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Mission &amp; Vision
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Driving Digital Excellence
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Our mission and vision define who we are and where we are going. They
              guide every decision, every solution, and every partnership we build.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky to-accent flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-white" />
              </div>
              <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky mb-3">
                Our Mission
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                Empowering Businesses Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-sky">
                  Innovative Technology
                </span>
              </h2>
              <p className="text-base text-navy/60 font-inter leading-relaxed mb-6">
                Our mission is to empower businesses with cutting-edge technology
                solutions that streamline operations, enhance productivity, and drive
                sustainable growth. We bridge the gap between business challenges and
                technological possibilities, delivering solutions that create real,
                measurable impact.
              </p>
              <div className="space-y-3">
                {missionPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/70 font-inter">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal to-brand-light flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky mb-3">
                Our Vision
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                Shaping the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-sky">
                  Digital Enterprise
                </span>
              </h2>
              <p className="text-base text-navy/60 font-inter leading-relaxed mb-6">
                We envision a world where every business, regardless of size or
                industry, has access to enterprise-grade technology that unlocks their
                full potential. Royal Tech IT strives to be the most trusted technology
                partner, known for excellence, innovation, and unwavering commitment to
                client success.
              </p>
              <div className="space-y-3">
                {visionPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/70 font-inter">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Our Approach"
            title="How We Deliver on Our Mission"
            description="Our strategic approach ensures every engagement drives measurable business value."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Understand",
                desc: "We deeply analyze your business processes, challenges, and goals before recommending any solution.",
              },
              {
                icon: Rocket,
                title: "Innovate",
                desc: "We design and implement tailor-made solutions using the latest technologies and industry best practices.",
              },
              {
                icon: Heart,
                title: "Support",
                desc: "We provide continuous support, training, and optimization to ensure long-term success.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group bg-white rounded-xl p-8 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal/10 to-sky/10 flex items-center justify-center mb-5 group-hover:from-royal/20 group-hover:to-sky/20 transition-colors">
                  <item.icon className="w-7 h-7 text-royal" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-royal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Let's discuss how we can help bring your vision to life.
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
