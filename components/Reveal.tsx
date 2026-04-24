"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
  as?: "div" | "section" | "article" | "aside";
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export function Reveal({
  children,
  className,
  immediate = false,
  as: Component = "div",
  id,
  ariaLabel,
  ariaLabelledBy,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(immediate);

  useEffect(() => {
    if (immediate || isVisible) {
      return undefined;
    }

    const element = elementRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry], currentObserver) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        currentObserver.unobserve(entry.target);
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [immediate, isVisible]);

  return (
    <Component
      ref={elementRef as never}
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={className}
      data-reveal
      data-visible={isVisible}
    >
      {children}
    </Component>
  );
}
