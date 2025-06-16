"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { lazy, Suspense, useEffect, useState } from "react";
import { ShinyButton } from "@/components/ui/shiny";
import Aurora from "@/components/Aurora"; 

const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="flex w-full max-w-3xl flex-col overflow-hidden pt-4">
      <motion.h1
        className="text-left text-4xl font-semibold leading-tight text-foreground sm:text-6xl md:text-8xl tracking-tighter mb-3"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        <motion.span
          className="inline-block text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease,
          }}
        >
          <span 
            className="leading-tight text-white font-mono"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            {siteConfig.hero.title}
          </span>
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-left max-w-md leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        {siteConfig.hero.description}
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="relative mt-4">
      <motion.div
        className="flex w-full max-w-2xl flex-col items-start justify-start space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="/download"
          className={cn(
            buttonVariants({ variant: "new" }),
            "w-full sm:w-auto text-background flex gap-2 rounded-lg"
          )}
        >
          <Icons.logo className="h-6 w-6" />
          {siteConfig.hero.cta}
        </Link>
      </motion.div>
      <motion.p
        className="mt-4 text-sm text-muted-foreground text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        {siteConfig.hero.ctaDescription}
      </motion.p>
    </div>
  );
}

const LazySpline = lazy(() => import("@splinetool/react-spline"));

export function Hero() {
  const [showSpline, setShowSpline] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Assuming 1024px is the breakpoint for lg
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Don't show on mobile
    if (!isMobile) {
      const timer = setTimeout(() => {
        setShowSpline(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <Section id="hero">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-0 w-full px-8 lg:px-20 py-16 lg:py-24 border-x overflow-hidden min-h-[50vh] lg:min-h-[70vh]">
        
        {/* Aurora Background - positioned behind everything */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#0d0d0d", "#e6e6e6", "#2a2a2a"]}  //colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        
        <div className="flex flex-col justify-center items-start lg:col-span-1 relative z-10">
          <HeroTitles />
          <HeroCTA />
        </div>
        {!isMobile && (
          <div className="relative lg:h-full lg:col-span-1 z-10">
            <Suspense>
              {showSpline && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <LazySpline
                    scene="https://prod.spline.design/mZBrYNcnoESGlTUG/scene.splinecode"
                    className="absolute inset-0 w-full h-full origin-top-left flex items-center justify-center"
                  />
                </motion.div>
              )}
            </Suspense>
          </div>
        )}
      </div>
    </Section>
  );
}