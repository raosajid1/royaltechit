"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectsPreview() {
  const displayProjects = projects.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-navy/[0.02]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Our Work"
          title="Featured Projects"
          description="Real projects, real results. See how we've helped businesses transform their operations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {displayProjects.map((project: Project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-shadow hover:shadow-card"
            >
              <div className="relative aspect-[16/10] bg-navy-50 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-royal/10 to-sky/10">
                    <span className="font-poppins text-xl font-bold text-royal/20">
                      {project.industry}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <Badge variant="outline" size="sm" className="text-white border-white/60">
                    {project.industry}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-poppins text-sm font-semibold text-navy mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-navy/50 font-inter line-clamp-2 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium font-inter px-2 py-0.5 rounded-md bg-royal/5 text-royal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.results.length > 0 && (
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-navy/40 font-inter mb-1.5">
                      <BarChart3 size={12} />
                      Key Results
                    </div>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li
                          key={idx}
                          className="text-[11px] text-navy/50 font-inter flex items-start gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium font-inter bg-royal text-white h-11 px-6 rounded-lg hover:bg-royal/90 transition-colors"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export { ProjectsPreview };
