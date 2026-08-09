"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

function ServiceCTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-royal" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.08),transparent_50%)]" />

      <div className="absolute top-10 left-10 w-40 h-40 border border-sky/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-accent/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-sky/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-royal/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky/70 mb-4">
            Let's Get Started
          </span>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Ready to Get Started?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/50 font-inter leading-relaxed max-w-xl mx-auto">
            Schedule a free consultation with our experts and discover how Royal Tech IT can help your business grow.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-13 px-8 text-sm font-medium font-inter bg-accent text-navy-900 rounded-lg hover:bg-accent-light shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Phone size={16} />
              Schedule Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export { ServiceCTA };
