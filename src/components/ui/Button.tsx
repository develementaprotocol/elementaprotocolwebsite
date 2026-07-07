import React from "react";
import { cn } from "@/utils/cn";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "text-Elementa-muted hover:text-white active:opacity-90",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    const { type: _type, ...anchorRest } = rest;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
