"use client";

import Link from "next/link";
import { CheckCircle2, Rocket, Cpu, HandshakeIcon, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

const values = [
  {
    icon: Rocket,
    title: "Royal Excellence",
    description: "We hold ourselves to the highest standards of quality, delivering enterprise-grade solutions that exceed expectations.",
  },
  {
    icon: Cpu,
    title: "Technology Forward",
    description: "We leverage cutting-edge technologies and industry best practices to build future-ready solutions.",
  },
  {
    icon: HandshakeIcon,
    title: "Partnership Approach",
    description: "We work alongside your team, ensuring knowledge transfer and building lasting relationships beyond project delivery.",
  },
];

const checklist = [
  "Certified Odoo Gold Partners",
  "6+ Years Industry Experience",
  "100+ Successful Projects",
  "Dedicated 24/7 Support Team",
  "Data Protection & GDPR Compliant",
  "Agile Development Methodology",
];

export function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy/[0.02] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Values */}
          <div className="space-y-5">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-xl bg-white border border-gray-100 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/10 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:from-brand group-hover:to-accent transition-all duration-300">
                    <value.icon size={22} className="text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-poppins text-base font-semibold text-navy mb-1">{value.title}</h3>
                    <p className="text-sm text-navy/50 font-inter leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-up animation-delay-3">
            <span className="section-tag">About Royal Tech IT</span>
            <h2 className="section-title mb-4">Your Trusted Technology Partner</h2>
            <p className="section-desc mb-6">
              We are a team of passionate technologists, consultants, and innovators dedicated to transforming businesses through technology.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <Logo size="sm" />
            </div>

            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy/60 font-inter">
                  <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/about" className="btn-primary px-7 py-3">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
