"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 600);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(handlePageLoad, 800);
      return () => clearTimeout(timer);
    }

    window.addEventListener("load", handlePageLoad);
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-sky mb-8"
          >
            <svg
              width="72"
              height="58"
              viewBox="0 0 38 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-sky"
            >
              <path
                d="M3 24V9L11 16L19 4L27 16L35 9V24H3Z"
                fill="currentColor"
              />
              <rect
                x="6"
                y="21"
                width="26"
                height="4"
                rx="1.5"
                fill="currentColor"
              />
            </svg>
          </motion.div>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-serif text-4xl font-bold text-white tracking-tight">
              ROYAL
            </span>
            <span className="font-poppins text-3xl font-bold text-sky">
              TECH
            </span>
            <span className="text-xs font-bold text-accent self-start mt-2">
              IT
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-sky"
              />
            ))}
          </div>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-6 text-sm text-gray-400 font-medium tracking-wider uppercase"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
