"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { partners } from "@/lib/data";

const partnerColors: Record<string, string> = {
  Microsoft: "from-blue-600 to-blue-700",
  Odoo: "from-purple-600 to-purple-700",
  "Google Cloud": "from-sky-500 to-blue-600",
  AWS: "from-orange-500 to-orange-600",
  Meta: "from-blue-500 to-blue-600",
  Shopify: "from-emerald-600 to-green-700",
};

const partnerInitials: Record<string, string> = {
  Microsoft: "MS",
  Odoo: "OD",
  "Google Cloud": "GC",
  AWS: "AWS",
  Meta: "ME",
  Shopify: "SH",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

function TechStack() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Technology Partners"
          title="Built on Industry-Leading Technologies"
          description="We partner with the world's best technology platforms to deliver enterprise-grade solutions."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-white border border-gray-100 shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110",
                  partnerColors[partner.name] || "from-navy to-royal"
                )}
              >
                <span className="font-poppins text-xs font-bold text-white tracking-tight">
                  {partnerInitials[partner.name] || partner.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="font-inter text-xs font-medium text-navy/60 text-center">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { TechStack };
