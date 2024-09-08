"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function AnimateOnScroll({ children, className }: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}