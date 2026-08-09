"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image?: string;
  slug: string;
  className?: string;
}

function BlogCard({
  title,
  excerpt,
  category,
  date,
  author,
  image,
  slug,
  className,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-shadow hover:shadow-card",
        className
      )}
    >
      <Link href={slug}>
        <div className="relative aspect-[16/9] bg-navy-50 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-royal/5 to-sky/5">
              <span className="font-poppins text-lg font-semibold text-navy/20">
                {category}
              </span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <Badge variant="accent" size="sm">
              {category}
            </Badge>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-navy/40 font-inter mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <User size={12} />
            {author}
          </span>
        </div>
        <Link href={slug}>
          <h3 className="font-poppins text-base font-semibold text-navy leading-snug mb-2 group-hover:text-royal transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-navy/50 font-inter line-clamp-2 leading-relaxed mb-4">
          {excerpt}
        </p>
        <Link
          href={slug}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-royal font-inter hover:gap-2 transition-all"
        >
          Read More
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export { BlogCard };
