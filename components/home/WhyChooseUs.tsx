"use client";

import { Award, Route, Briefcase, Sparkles } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Award,
    title: "Certified Expertise",
    description: "Our team holds industry-leading certifications including Odoo Gold Partnership, AWS Solutions Architect, and Google Cloud Professional credentials.",
    gradient: "from-brand/10 to-accent/5",
    iconColor: "text-brand",
  },
  {
    number: "02",
    icon: Route,
    title: "Proven Methodology",
    description: "We follow a battle-tested agile methodology that ensures on-time delivery, transparent communication, and measurable results at every milestone.",
    gradient: "from-accent/10 to-brand/5",
    iconColor: "text-accent",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "End-to-End Service",
    description: "From initial consultation and implementation to training, support, and continuous optimization, we cover the entire technology lifecycle.",
    gradient: "from-brand-dark/10 to-brand/5",
    iconColor: "text-brand-dark",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Tailored Solutions",
    description: "No two businesses are alike. We take time to understand your unique challenges and craft custom solutions that fit your processes perfectly.",
    gradient: "from-brand-light/10 to-accent/5",
    iconColor: "text-brand-light",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Why Royal Tech IT</span>
          <h2 className="section-title mb-4">Why Businesses Choose Us</h2>
          <p className="section-desc mx-auto">
            We combine deep technical expertise with genuine business understanding to deliver outcomes that matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className="group p-7 rounded-xl bg-white border border-gray-100 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="font-poppins text-5xl font-bold text-navy/[0.04] leading-none block mb-3 transition-colors duration-300">
                {reason.number}
              </span>
              <div className={["w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-glow", reason.gradient].join(" ")}>
                <reason.icon size={22} className={[reason.iconColor, "transition-colors duration-300"].join(" ")} />
              </div>
              <h3 className="font-poppins text-base font-semibold text-navy mb-2">{reason.title}</h3>
              <p className="text-sm text-navy/50 font-inter leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
