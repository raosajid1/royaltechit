"use client";

import { motion } from "framer-motion";
import {
  Building2, Stethoscope, ShoppingBag, GraduationCap,
  Factory, Landmark, Truck, Hotel, type LucideIcon
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Building2, Stethoscope, ShoppingBag, GraduationCap,
  Factory, Landmark, Truck, Hotel,
};

interface Industry {
  name: string;
  description: string;
  icon: string;
}

interface ServiceIndustriesProps {
  industries: Industry[];
}

function ServiceIndustries({ industries }: ServiceIndustriesProps) {
  if (!industries.length) return null;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            tag="Industries"
            title="Industries We Serve"
            description="Delivering tailored technology solutions across diverse industry verticals."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || Building2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="group bg-white rounded-xl shadow-card border border-gray-100 p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300 text-center"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent/10 to-royal/10 border border-accent/20 mb-4 group-hover:from-accent/20 group-hover:to-royal/20 transition-colors duration-300 mx-auto">
                  <IconComponent size={28} className="text-accent" />
                </span>
                <h3 className="font-poppins text-base font-semibold text-navy mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-navy/60 font-inter leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { ServiceIndustries };
