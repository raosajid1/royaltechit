"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(3,158,236,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,178,244,0.08),transparent_50%)]" />

      <div className="absolute top-10 left-10 w-40 h-40 border border-brand/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-accent/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-brand/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-light/70 mb-4">
            Let&apos;s Get Started
          </span>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/50 font-inter leading-relaxed max-w-xl mx-auto">
            Schedule a free consultation with our experts and discover how Royal Tech IT can help your business grow.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white h-13 px-8 text-sm font-semibold">
              <Phone size={16} />
              Schedule Free Consultation
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 h-13 px-8 text-sm font-semibold text-white border-2 border-white/20 rounded-lg hover:bg-white/10 transition-all duration-200">
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
