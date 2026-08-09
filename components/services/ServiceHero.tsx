"use client";

import { motion } from "framer-motion";
import {
  Code2, Database, Cloud, Globe, Smartphone, Shield,
  BarChart3, Settings, Users, Building2, Palette, Cog,
  type LucideIcon
} from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";

const iconMap: Record<string, LucideIcon> = {
  Code2, Database, Cloud, Globe, Smartphone, Shield,
  BarChart3, Settings, Users, Building2, Palette, Cog,
};

interface ServiceHeroProps {
  title: string;
  description: string;
  icon: string;
}

function ServiceHero({ title, description, icon }: ServiceHeroProps) {
  const IconComponent = iconMap[icon] || Cog;

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.02] via-transparent to-sky/[0.03] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,168,67,0.04),transparent_50%)]" />

      <div className="absolute top-20 left-10 w-72 h-72 border border-sky/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 border border-royal/10 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-sky/5 rounded-full blur-3xl" />

      <svg className="absolute top-10 right-[15%] w-80 h-80 text-navy/[0.02]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="0.5" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.3" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      <div className="absolute top-[30%] left-[8%] w-20 h-20 border border-sky/10 rounded-xl rotate-45" />
      <div className="absolute bottom-[25%] right-[8%] w-16 h-16 border border-accent/10 rounded-lg rotate-12" />

      <div className="relative z-10 w-full max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: title },
            ]}
          />
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-sky/10 to-royal/10 border border-sky/20 mb-6">
              <IconComponent size={28} className="text-royal" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-navy/60 font-inter leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal/10 to-transparent" />
    </section>
  );
}

export { ServiceHero };
