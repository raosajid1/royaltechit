"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-navy mb-1.5 font-inter"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full h-11 px-4 pr-10 bg-white border rounded-lg font-inter text-sm text-navy appearance-none transition-all duration-200 cursor-pointer",
              "focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal",
              error
                ? "border-red-400 focus:ring-red/20 focus:border-red-400"
                : "border-gray-200 hover:border-gray-300",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none"
          />
        </div>
        {error && (
          <p className="mt-1 text-xs text-red-400 font-inter">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
