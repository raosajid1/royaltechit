"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Carousel } from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";
import { testimonials, type Testimonial } from "@/lib/data";

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 sm:p-8 mx-2 h-full flex flex-col">
      <Quote size={24} className="text-sky/20 flex-shrink-0 mb-4" />
      <p className="text-sm text-navy/60 font-inter leading-relaxed mb-6 flex-1">
        {item.content}
      </p>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={cn(
              i < item.rating ? "text-accent fill-accent" : "text-gray-200 fill-gray-200"
            )}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal/10 to-sky/10 flex items-center justify-center">
          <span className="font-poppins text-xs font-semibold text-royal">
            {item.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="font-poppins text-sm font-semibold text-navy leading-tight">
            {item.name}
          </p>
          <p className="text-xs text-navy/40 font-inter">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Testimonials"
          title="What Our Clients Say"
          description="Hear from the businesses we have helped transform."
        />

        <Carousel
          items={testimonials}
          renderItem={(item) => <TestimonialCard item={item} />}
          autoplay
          autoplaySpeed={5000}
          showDots
          showArrows
          slidesToShow={1}
          className="max-w-4xl mx-auto"
        />
      </div>
    </section>
  );
}

export { TestimonialsSection };
