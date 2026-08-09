"use client";

import { motion } from "framer-motion";
import {
  Factory, ShoppingBag, ArrowLeftRight, HardHat,
  HeartPulse, GraduationCap, Hotel, type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { industries, type Industry } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Factory, ShoppingBag, ArrowLeftRight, HardHat, HeartPulse, GraduationCap, Hotel,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function IndustrySolutions() {
  return (
    <section className="py-20 lg:py-28 bg-navy/[0.02]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Industries"
          title="Solutions Across Industries"
          description="Deep industry expertise combined with technology excellence to solve sector-specific challenges."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {industries.map((industry: Industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.a
                key={industry.id}
                href={industry.href}
                variants={cardVariants}
                className="group p-5 rounded-xl bg-white border border-gray-100 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-royal/5 flex items-center justify-center mb-3 transition-colors duration-300 group-hover:bg-accent/10">
                  {Icon && <Icon size={18} className="text-royal transition-colors duration-300 group-hover:text-accent" />}
                </div>
                <h3 className="font-poppins text-sm font-semibold text-navy mb-1.5">
                  {industry.title}
                </h3>
                <p className="text-xs text-navy/50 font-inter leading-relaxed">
                  {industry.description}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export { IndustrySolutions };
