"use client";

import { Calendar, Briefcase, Star, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: Calendar, target: 6, suffix: "+", label: "Years of Experience" },
  { icon: Briefcase, target: 100, suffix: "+", label: "Projects Completed" },
  { icon: Star, target: 98, suffix: "%", label: "Client Satisfaction" },
  { icon: Shield, target: 24, suffix: "/7", label: "Premium Support" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(3,158,236,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,178,244,0.05),transparent_50%)]" />

      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <stat.icon size={18} className="text-brand-light/60" />
                <span className="font-poppins text-4xl sm:text-5xl font-bold text-white">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </span>
              </div>
              <p className="text-sm text-white/50 font-inter">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
