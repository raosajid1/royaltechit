"use client";

import { motion } from "framer-motion";
import {
  Zap, TrendingUp, Clock, Shield, DollarSign, Users,
  BarChart3, Headphones, Layers, type LucideIcon
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Zap, TrendingUp, Clock, Shield, DollarSign, Users,
  BarChart3, Headphones, Layers,
};

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            tag="Benefits"
            title="Why Choose This Service"
            description="Experience the advantages that set our solutions apart from the competition."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || Zap;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-xl shadow-card border border-gray-100 p-6 hover:shadow-lg hover:border-sky/20 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-sky/10 to-royal/10 border border-sky/20 mb-4 group-hover:from-sky/20 group-hover:to-royal/20 transition-colors duration-300">
                  <IconComponent size={24} className="text-royal" />
                </span>
                <h3 className="font-poppins text-base font-semibold text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy/60 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { ServiceBenefits };
