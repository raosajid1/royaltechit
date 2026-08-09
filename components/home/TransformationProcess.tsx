"use client";

import { motion } from "framer-motion";
import { Search, FileText, Code2, Rocket, LifeBuoy } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Discovery",
    description: "We analyze your business processes, identify pain points, and define clear objectives for transformation.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Planning",
    description: "A comprehensive roadmap with milestones, timelines, resource allocation, and risk mitigation strategies.",
  },
  {
    number: 3,
    icon: Code2,
    title: "Development",
    description: "Agile development with regular sprints, continuous testing, and transparent progress reporting.",
  },
  {
    number: 4,
    icon: Rocket,
    title: "Deployment",
    description: "Structured rollout with data migration, user training, and zero-downtime cutover planning.",
  },
  {
    number: 5,
    icon: LifeBuoy,
    title: "Support",
    description: "Ongoing 24/7 support, system monitoring, performance optimization, and continuous improvement.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function TransformationProcess() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Our Process"
          title="How We Transform Your Business"
          description="A proven 5-step methodology that ensures successful technology transformation from discovery to ongoing support."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="hidden lg:block absolute top-[4.25rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-royal/20 via-sky/20 to-accent/20" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-royal to-sky flex items-center justify-center shadow-md mb-4">
                  <step.icon size={20} className="text-white" />
                </div>

                <div className="hidden lg:block absolute top-7 left-[60%] w-[calc(100%+2rem)] h-0.5">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-royal/10 to-transparent" />
                </div>

                <span className="font-poppins text-[10px] font-bold text-royal/40 tracking-widest uppercase mb-1">
                  Step {step.number}
                </span>
                <h3 className="font-poppins text-sm font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-navy/50 font-inter leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { TransformationProcess };
