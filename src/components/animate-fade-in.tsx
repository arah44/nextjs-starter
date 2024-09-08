"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateFadeInProps {
  children: ReactNode;
}

export default function AnimateFadeIn({ children }: AnimateFadeInProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {children}
    </motion.div>
  );
}
