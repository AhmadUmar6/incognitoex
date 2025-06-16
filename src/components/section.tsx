"use client";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { id, title, subtitle, description, children, className, align },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = forwardedRef || internalRef;
    const alignmentClass =
      align === "left"
        ? "text-left"
        : align === "right"
        ? "text-right"
        : "text-center";

    return (
      <section id={id} ref={ref}>
        <div
          className={cn(
            "relative mx-auto max-w-screen-2xl px-6 md:px-12",
            className
          )}
        >
          {(title || subtitle || description) && (
            <div
              className={cn(
                alignmentClass,
                "relative mx-auto border-x-2 border-t-2 overflow-hidden p-4 py-16 md:p-20"
              )}
            >
              {title && (
                <h2 className="text-sm font-semibold uppercase tracking-tight text-muted-foreground">
                  {title}
                </h2>
              )}

              {subtitle && (
                <h3
                  className={cn(
                    "mx-0 mt-4 max-w-lg text-5xl font-bold leading-[1.2] tracking-tighter text-foreground lowercase text-balance sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                >
                  {subtitle}
                </h3>
              )}

              {description && (
                <p
                  className={cn(
                    "mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-balance",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                >
                  {description}
                </p>
              )}

              <div className="pointer-events-none absolute inset-0 h-full w-full -z-10 bg-gradient-to-t from-background dark:from-background from-50%" />
              <FlickeringGrid
                squareSize={4}
                gridGap={4}
                color="#6B7280"
                maxOpacity={0.2}
                flickerChance={0.1}
                className="-z-20 absolute inset-0 size-full"
              />
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
