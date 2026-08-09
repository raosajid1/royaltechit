"use client";

import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-navy mb-1.5 font-inter"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full min-h-[120px] px-4 py-3 bg-white border rounded-lg font-inter text-sm text-navy placeholder:text-navy/30 transition-all duration-200 resize-y",
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

Textarea.displayName = "Textarea";

export { Textarea };
