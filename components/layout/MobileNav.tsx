"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
};

const submenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.nav
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
          >
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CrownLogo />
                <div className="flex items-baseline leading-none">
                  <span className="font-serif text-xl font-bold text-navy">
                    ROYAL
                  </span>
                  <span className="font-poppins text-lg font-bold text-royal ml-0.5">
                    TECH
                  </span>
                  <span className="text-[8px] font-bold text-sky ml-0.5 self-start mt-1">
                    IT
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-navy hover:text-royal hover:bg-royal/5 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="mb-1">
                      <button
                        onClick={() => toggleExpand(item.label)}
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-navy rounded-lg hover:bg-royal/5 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-300",
                            expanded === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded === item.label && (
                          <motion.div
                            variants={submenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-0.5 border-l-2 border-sky/20 ml-4">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-navy/60 hover:text-royal hover:bg-royal/5 rounded-lg transition-colors"
                                >
                                  <ChevronRight size={14} className="text-sky" />
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block px-3 py-3 text-sm font-medium text-navy rounded-lg hover:bg-royal/5 transition-colors mb-1"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="px-4 py-6 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-primary w-full justify-center"
              >
                <Phone size={16} />
                Get Free Consultation
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CrownLogo({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="26"
      viewBox="0 0 38 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-royal flex-shrink-0", className)}
    >
      <path
        d="M3 24V9L11 16L19 4L27 16L35 9V24H3Z"
        fill="currentColor"
      />
      <rect x="6" y="21" width="26" height="4" rx="1.5" fill="currentColor" />
    </svg>
  );
}
