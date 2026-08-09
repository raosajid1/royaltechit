"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ServiceOverviewProps {
  title: string;
  description: string;
  features: string[];
  image?: string;
}

function ServiceOverview({ title, description, features, image }: ServiceOverviewProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHeader
              title={title}
              description={description}
              centered={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="space-y-6"
          >
            {image && (
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-soft">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            )}
            <div className="bg-white rounded-xl shadow-card border border-gray-100 p-6 sm:p-8">
              <h3 className="font-poppins text-lg font-semibold text-navy mb-6">
                What We Deliver
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="flex-shrink-0 mt-0.5 text-accent"
                    />
                    <span className="text-sm text-navy/70 font-inter leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ServiceOverview };
