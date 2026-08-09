"use client";

import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

function ServiceFAQ({ faqs }: ServiceFAQProps) {
  if (!faqs.length) return null;

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
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our service."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion
            items={faqs.map((faq) => ({
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </motion.div>
      </div>
    </section>
  );
}

export { ServiceFAQ };
