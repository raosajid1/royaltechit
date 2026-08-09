"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  process: ProcessStep[];
}

function ServiceProcess({ process }: ServiceProcessProps) {
  if (!process.length) return null;

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
            tag="Our Process"
            title="How We Deliver"
            description="A structured approach that ensures quality, transparency, and timely delivery."
          />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky/30 via-royal/20 to-accent/30 hidden md:block" />

          <div className="space-y-10">
            {process
              .sort((a, b) => a.step - b.step)
              .map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6 md:pl-14"
                >
                  <div className="hidden md:flex absolute left-0 top-0 items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-royal to-sky text-white font-poppins font-bold text-sm shadow-lg shadow-royal/20 z-10">
                    {String(step.step).padStart(2, "0")}
                  </div>

                  <div className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-royal to-sky text-white font-poppins font-bold text-xs shadow-lg shadow-royal/20 flex-shrink-0">
                    {String(step.step).padStart(2, "0")}
                  </div>

                  <div className="flex-1 bg-white rounded-xl shadow-card border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:border-sky/20 transition-all duration-300">
                    <h3 className="font-poppins text-base sm:text-lg font-semibold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ServiceProcess };
