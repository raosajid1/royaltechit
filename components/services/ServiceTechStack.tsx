"use client";

import { motion } from "framer-motion";
import {
  Code2, Database, Cloud, Globe, Smartphone, Shield,
  BarChart3, Settings, Cpu, Server, GitBranch, Terminal,
  type LucideIcon
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Code2, Database, Cloud, Globe, Smartphone, Shield,
  BarChart3, Settings, Cpu, Server, GitBranch, Terminal,
};

interface Technology {
  name: string;
  description: string;
  icon: string;
}

interface ServiceTechStackProps {
  technologies: Technology[];
}

function ServiceTechStack({ technologies }: ServiceTechStackProps) {
  if (!technologies.length) return null;

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
            tag="Technologies"
            title="Tools & Technologies We Use"
            description="Leveraging modern, battle-tested technologies to build robust solutions."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {technologies.map((tech, index) => {
            const IconComponent = iconMap[tech.icon] || Code2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="group bg-white rounded-xl shadow-card border border-gray-100 p-5 hover:shadow-lg hover:border-sky/20 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sky/10 to-royal/10 border border-sky/20 mb-3 group-hover:from-sky/20 group-hover:to-royal/20 transition-colors duration-300">
                  <IconComponent size={20} className="text-royal" />
                </span>
                <h3 className="font-poppins text-sm font-semibold text-navy mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-navy/50 font-inter leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { ServiceTechStack };
