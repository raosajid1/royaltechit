"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/utils";

const COOKIE_CONSENT_KEY = "royaltech_cookie_consent";

type CookieChoice = "accepted" | "settings" | null;

export default function CookieConsent() {
  const [choice, setChoice] = useState<CookieChoice>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "accepted" || stored === "settings") {
      setChoice(stored);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setChoice("accepted");
  };

  const openSettings = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "settings");
    setChoice("settings");
  };

  const dismiss = () => {
    setChoice("accepted");
  };

  if (!mounted || choice !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-content mx-auto">
          <div className="relative bg-white rounded-xl shadow-card border border-gray-100 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 p-1 text-gray-400 hover:text-navy transition-colors"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-royal/5 text-royal">
                <Cookie size={20} />
              </div>
              <div className="pr-6">
                <p className="text-sm text-navy font-medium mb-1">
                  We value your privacy
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  This website uses cookies to enhance your browsing experience,
                  analyze site traffic, and serve personalized content. By
                  clicking &quot;Accept All&quot;, you consent to our use of cookies.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={openSettings}
                className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-medium text-navy border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cookie Settings
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold text-white bg-royal rounded-lg hover:bg-sky transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
