"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Subtle gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Primary floating orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] opacity-30 dark:opacity-20"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -30, 15, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 dark:from-primary/15 dark:via-secondary/10 dark:to-accent/15 rounded-full blur-3xl" />
      </motion.div>

      {/* Secondary accent orb */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] opacity-25 dark:opacity-15"
        animate={{
          x: [0, -15, 10, 0],
          y: [0, 20, -10, 0],
          scale: [1, 0.95, 1.03, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      >
        <div className="w-full h-full bg-gradient-to-bl from-muted/25 via-primary/10 to-secondary/20 dark:from-muted/15 dark:via-primary/8 dark:to-secondary/12 rounded-full blur-2xl" />
      </motion.div>

      {/* Minimal floating particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 dark:bg-primary/20 rounded-full"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${25 + Math.sin(i) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Subtle top light effect */}
      <motion.div
        className="absolute -top-40 left-1/2 w-[600px] h-[300px] -translate-x-1/2 opacity-10 dark:opacity-5"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-primary/20 via-background/5 to-transparent blur-3xl rounded-full" />
      </motion.div>
    </div>
  )
}