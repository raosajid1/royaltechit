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

function PartnersSection() {
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-16 lg:py-20 bg-navy/[0.02] overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Trusted By"
          title="Our Trusted Partners"
          description="We collaborate with industry-leading technology providers to deliver world-class solutions."
        />

        <div className="relative mt-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy/[0.02] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy/[0.02] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {doubledPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-2 w-[140px] p-5 rounded-xl bg-white border border-gray-100 shadow-soft transition-all duration-300 hover:shadow-hover"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-sm",
                    partnerColors[partner.name] || "from-navy to-royal"
                  )}
                >
                  <span className="font-poppins text-[10px] font-bold text-white tracking-tight">
                    {partnerInitials[partner.name] || partner.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="font-inter text-xs font-medium text-navy/60 text-center whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { PartnersSection };
