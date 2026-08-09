"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  className?: string;
}

function TeamCard({ name, role, bio, image, className }: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "group bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-shadow hover:shadow-card",
        className
      )}
    >
      <div className="relative aspect-[4/3] bg-navy-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-royal/10 to-sky/10">
            <span className="font-poppins text-3xl font-bold text-royal/30">
              {initials}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
          <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy hover:text-royal transition-colors cursor-pointer">
            <Linkedin size={14} />
          </span>
          <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy hover:text-royal transition-colors cursor-pointer">
            <Twitter size={14} />
          </span>
          <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-navy hover:text-royal transition-colors cursor-pointer">
            <Globe size={14} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-poppins text-base font-semibold text-navy">
          {name}
        </h3>
        <p className="text-xs font-medium text-sky font-inter mt-0.5">{role}</p>
        {bio && (
          <p className="mt-2 text-sm text-navy/50 font-inter line-clamp-2 leading-relaxed">
            {bio}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export { TeamCard };
