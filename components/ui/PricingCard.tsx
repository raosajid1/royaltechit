"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  className?: string;
}

function PricingCard({
  name,
  price,
  period = "/month",
  features,
  highlighted = false,
  ctaText = "Get Started",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative bg-white rounded-xl border transition-all duration-300",
        highlighted
          ? "border-royal shadow-card scale-[1.02]"
          : "border-gray-100 shadow-soft hover:shadow-card hover:border-gray-200",
        className
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-royal text-white text-xs font-semibold font-inter px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="font-poppins text-lg font-semibold text-navy mb-1">
          {name}
        </h3>
        <div className="flex items-baseline gap-0.5 mb-5">
          <span className="font-poppins text-3xl font-bold text-navy">
            {price}
          </span>
          {period && (
            <span className="text-sm text-navy/40 font-inter">{period}</span>
          )}
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-navy/60 font-inter">
              <Check
                size={16}
                className="text-accent flex-shrink-0 mt-0.5"
              />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant={highlighted ? "primary" : "outline"}
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}

export { PricingCard };
