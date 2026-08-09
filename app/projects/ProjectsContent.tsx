"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  ChevronDown,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "Manufacturing", "Trading", "Retail", "Healthcare"];

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.industry === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-royal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,168,67,0.06),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-72 h-72 border border-sky/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-accent/10 rounded-full" />

        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Our Portfolio
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Projects That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Deliver Results
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              From ERP implementations to cloud migrations and custom platforms,
              explore how we've helped businesses transform their operations
              through technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Case Studies"
            title="Featured Projects"
            description="Each project represents a partnership built on trust, technical excellence, and measurable business impact."
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold font-inter transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-royal text-white shadow-lg shadow-royal/20"
                    : "bg-navy-50/50 text-navy/60 hover:bg-navy-100/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard
                    title={project.title}
                    industry={project.industry}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    results={project.results}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Layers className="w-16 h-16 text-navy/20 mx-auto mb-4" />
              <h3 className="font-poppins text-xl font-semibold text-navy mb-2">
                No projects found
              </h3>
              <p className="text-navy/50 font-inter text-sm">
                No projects match the selected category. Try a different filter.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <button
              disabled
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy/5 text-navy/40 font-semibold rounded-lg font-inter cursor-not-allowed"
            >
              Load More Projects
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-royal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-40 h-40 border border-sky/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-accent/10 rounded-full" />

        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Let's discuss how we can help you achieve similar results for your
              business. Schedule a free consultation with our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
