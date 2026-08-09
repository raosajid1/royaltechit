"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface ProjectCardProps {
  title: string;
  industry: string;
  description: string;
  technologies: string[];
  image?: string;
  results?: string[];
  className?: string;
}

function ProjectCard({
  title,
  industry,
  description,
  technologies,
  image,
  results,
  className,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-shadow hover:shadow-card",
        className
      )}
    >
      <div className="relative aspect-[16/10] bg-navy-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-royal/10 to-sky/10">
            <span className="font-poppins text-xl font-bold text-royal/20">
              {industry}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
          <Badge variant="outline" size="sm" className="text-white border-white/60">
            {industry}
          </Badge>
          <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy hover:text-royal transition-colors cursor-pointer">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-poppins text-base font-semibold text-navy mb-2">
          {title}
        </h3>
        <p className="text-sm text-navy/50 font-inter line-clamp-2 leading-relaxed mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium font-inter px-2 py-0.5 rounded-md bg-royal/5 text-royal"
            >
              {tech}
            </span>
          ))}
        </div>
        {results && results.length > 0 && (
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-xs font-medium text-navy/40 font-inter mb-2">
              <BarChart3 size={12} />
              Key Results
            </div>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="text-xs text-navy/50 font-inter flex items-start gap-1.5"
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
  );
}

export { ProjectCard };
