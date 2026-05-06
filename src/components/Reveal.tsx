"use client";

import { motion, type MotionProps } from "framer-motion";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
} & Pick<MotionProps, "viewport">;

export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  viewport = { once: true, amount: 0.2 },
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
