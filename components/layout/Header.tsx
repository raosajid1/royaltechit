"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navItems } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import MobileNav from "./MobileNav";

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scaleY: 0.96 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: 8, scaleY: 0.96, transition: { duration: 0.15, ease: "easeIn" } },
};

export default function Header() {
  const { isScrolled } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-soft py-2"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-content flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size="md" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      openDropdown === item.label
                        ? "text-brand bg-brand/5"
                        : "text-navy/60 hover:text-brand hover:bg-brand/5"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={14} className={cn("transition-transform duration-200", openDropdown === item.label && "rotate-180")} />
                  </button>
                ) : (
                  <Link href={item.href} className="px-3 py-2 text-sm font-medium text-navy/60 rounded-lg transition-all duration-200 hover:text-brand hover:bg-brand/5">
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-card border border-gray-100 py-2 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-accent" />
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy/60 hover:text-brand hover:bg-brand/5 transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-brand" />
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/923244579917" target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:inline-flex text-sm px-5 py-2.5 gap-1.5">
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2.5 text-navy hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
