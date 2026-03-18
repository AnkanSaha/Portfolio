"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";

const variants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" } },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
