"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

type Props = {
  text: string;
  active?: boolean;
  isActiveRoute?: boolean;
};

/** Plain text for mobile/tablet — zero GSAP cost. */
export function NavbarPlainText({ text, isActiveRoute }: Props) {
  return (
    <span
      className={cn(
        "transition-colors duration-150",
        isActiveRoute ? "text-[#24bace]" : "group-hover:text-white",
      )}
    >
      {text}
    </span>
  );
}

/** GSAP 3D flip — desktop XL nav only (dynamically imported). */
export function NavbarAnimatedTextDesktop({ text, active, isActiveRoute }: Props) {
  const chars1Ref = useRef<(HTMLSpanElement | null)[]>([]);
  const chars2Ref = useRef<(HTMLSpanElement | null)[]>([]);
  const textArray = text.split("");

  const animateIn = useCallback(async () => {
    const { gsap } = await import("gsap");
    gsap.killTweensOf(chars1Ref.current);
    gsap.killTweensOf(chars2Ref.current);
    const depth = -8;
    const transformOrigin = `50% 50% ${depth}px`;
    gsap.fromTo(
      chars1Ref.current,
      { rotationX: 0, opacity: 1 },
      { rotationX: 90, opacity: 0, duration: 0.4, stagger: 0.02, ease: "expo.out", transformOrigin },
    );
    gsap.fromTo(
      chars2Ref.current,
      { rotationX: -90, opacity: 0 },
      { rotationX: 0, opacity: 1, duration: 0.4, stagger: 0.02, ease: "expo.out", transformOrigin },
    );
  }, []);

  const animateOut = useCallback(async () => {
    const { gsap } = await import("gsap");
    gsap.killTweensOf(chars1Ref.current);
    gsap.killTweensOf(chars2Ref.current);
    const depth = -8;
    const transformOrigin = `50% 50% ${depth}px`;
    gsap.to(chars1Ref.current, { rotationX: 0, opacity: 1, duration: 0.4, stagger: 0.02, ease: "expo.out", transformOrigin });
    gsap.to(chars2Ref.current, { rotationX: -90, opacity: 0, duration: 0.4, stagger: 0.02, ease: "expo.out", transformOrigin });
  }, []);

  useEffect(() => {
    if (active) animateIn();
    else animateOut();
  }, [active, animateIn, animateOut]);

  return (
    <span
      className="relative inline-flex group-hover:text-transparent transition-colors duration-150"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      style={{ perspective: "800px", transformStyle: "preserve-3d" }}
    >
      <span className="inline-flex" aria-hidden>
        {textArray.map((char, i) => (
          <span
            key={`c1-${i}`}
            ref={(el) => { chars1Ref.current[i] = el; }}
            className={cn("inline-block", isActiveRoute && "text-[#24bace]")}
            style={{ transformStyle: "preserve-3d" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="absolute inset-0 inline-flex text-[#24bace]" aria-hidden>
        {textArray.map((char, i) => (
          <span
            key={`c2-${i}`}
            ref={(el) => { chars2Ref.current[i] = el; }}
            className="inline-block opacity-0"
            style={{ transform: "rotateX(-90deg)", transformStyle: "preserve-3d" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
