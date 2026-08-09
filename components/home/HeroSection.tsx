"use client";

import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Logo from "@/components/ui/Logo";

const stats = [
  { target: 6, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "+", label: "Projects Delivered" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 24, suffix: "/7", label: "Support" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <svg className="absolute top-[5%] right-[15%] w-[300px] h-[300px] text-navy/[0.03]" viewBox="0 0 300 300">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="300" height="300" fill="url(#grid)" />
        </svg>

        {/* Floating Shapes */}
        <div className="absolute top-[30%] right-[20%] w-24 h-24 border border-brand/20 rounded-2xl rotate-45 animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-[25%] right-[30%] w-16 h-16 border border-accent/20 rounded-xl rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[15%] right-[35%] w-12 h-12 bg-brand/5 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[40%] right-[12%] w-8 h-8 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -left-40 bottom-0 w-[600px] h-[600px] bg-gradient-radial from-brand/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 rounded-2xl px-5 py-2.5 mb-8 animate-fade-in-up">
            <Logo size="sm" />
          </div>

          {/* Tag */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-6 animate-fade-in-up animation-delay-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Enterprise Technology Partner
          </div>

          {/* Headline */}
          <h1 className="font-poppins text-[clamp(2rem,5vw,4.5rem)] font-bold text-navy leading-[1.05] tracking-tight animate-fade-in-up animation-delay-2">
            Technology That
            <br />
            <span className="gradient-text">Transforms</span> Your
            <br />
            Business
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-navy/60 font-inter leading-relaxed max-w-xl animate-fade-in-up animation-delay-3">
            Royal Tech IT delivers enterprise-grade ERP solutions, custom software, and IT consulting that drive real business growth across Pakistan and beyond.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up animation-delay-4">
            <Link
              href="/services"
              className="btn-primary h-13 px-8 text-sm font-semibold"
            >
              Explore Our Services
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="btn-outline h-13 px-8 text-sm font-semibold"
            >
              <Phone size={17} />
              Free Consultation
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-navy/40 animate-fade-in-up animation-delay-5">
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" /> ISO Certified</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" /> Odoo Gold Partner</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-500" /> AWS Select Partner</span>
          </div>

          {/* Stats */}
          <div className="mt-14 pt-10 border-t border-gray-100 animate-fade-in-up animation-delay-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-poppins text-3xl sm:text-4xl font-bold text-navy">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                  <p className="text-xs sm:text-sm text-navy/40 font-inter mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/10 to-transparent" />
    </section>
  );
}
