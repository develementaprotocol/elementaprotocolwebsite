"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "text-Elementa-muted hover:text-white active:opacity-90",
};

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: keyof typeof variants;
  href?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  href,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-3 text-sm transition-[color,border-color,opacity,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--btn-primary-bg)] disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    // Separate rest props for anchor
    const { 
      type: _type, 
      ...anchorRest 
    } = rest as any;
    
    return (
      <motion.a href={href} className={cls} {...anchorRest}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={cls} {...rest}>
      {children}
    </motion.button>
  );
}
