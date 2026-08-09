"use client";

import Link from "next/link";
import {
  LayoutGrid, Receipt, FileCheck, Code, Globe, Smartphone,
  Cloud, Shield, TrendingUp, ArrowRight, type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { services, type Service } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid, Receipt, FileCheck, Code, Globe, Smartphone, Cloud, Shield, TrendingUp,
};

export function ServicesPreview() {
  const displayServices = services.slice(0, 6);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title mb-4">Comprehensive IT Solutions</h2>
          <p className="section-desc mx-auto">
            From ERP implementation to custom software development, we provide end-to-end technology services tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service: Service, i: number) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group card-hover overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[16/8] bg-navy-50 overflow-hidden">
                  {service.image && (
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-7">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand/10 to-accent/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:from-brand group-hover:to-accent group-hover:shadow-glow">
                    {Icon && <Icon size={24} className="text-brand transition-colors duration-300 group-hover:text-white" />}
                  </div>
                  <h3 className="font-poppins text-lg font-semibold text-navy mb-3">{service.title}</h3>
                  <p className="text-sm text-navy/50 font-inter leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-navy/50 font-inter">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0 mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand font-inter group-hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link href="/services" className="btn-primary px-8 py-3.5">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
