"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-navy mb-1.5 font-inter"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full h-11 px-4 bg-white border rounded-lg font-inter text-sm text-navy placeholder:text-navy/30 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal",
            error
              ? "border-red-400 focus:ring-red/20 focus:border-red-400"
              : "border-gray-200 hover:border-gray-300",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-red-400 font-inter">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
