"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "1234567890";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg shadow-lg whitespace-nowrap"
            >
              Chat with us
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat on WhatsApp"
          className={cn(
            "flex items-center justify-center w-14 h-14 rounded-full shadow-lg",
            "bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
          )}
        >
          <MessageCircle size="28" fill="currentColor" />
        </motion.a>
      </div>
    </div>
  );
}
