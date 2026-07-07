"use client";

import type { ComponentProps, ReactNode } from "react";

type MotionDivProps = ComponentProps<"div"> & {
  children: ReactNode;
  motionProps?: Record<string, unknown>;
};

/** Plain wrappers — Framer is not referenced here so homepage lazy chunks never pull chunk 2164. */
export function ResponsiveMotionDiv({
  children,
  className,
  motionProps: _motionProps,
  ...rest
}: MotionDivProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

export function ResponsiveMotionSpan({
  children,
  className,
  motionProps: _motionProps,
  ...rest
}: ComponentProps<"span"> & {
  children: ReactNode;
  motionProps?: Record<string, unknown>;
}) {
  return (
    <span className={className} {...rest}>
      {children}
    </span>
  );
}

export function ResponsiveMotionA({
  children,
  className,
  motionProps: _motionProps,
  ...rest
}: ComponentProps<"a"> & {
  children: ReactNode;
  motionProps?: Record<string, unknown>;
}) {
  return (
    <a className={className} {...rest}>
      {children}
    </a>
  );
}
