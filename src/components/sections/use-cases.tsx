"use client";

import { Section } from "@/components/section";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import { cubicBezier, motion } from "framer-motion";
import {
  AlertTriangleIcon,
  BrainCircuitIcon,
  DatabaseIcon,
  GitForkIcon,
  HeadsetIcon,
  InfoIcon,
  MessageSquareIcon,
  SearchIcon,
  SquareTerminal,
  UserSearch,
  XCircleIcon,
} from "lucide-react";

const ICON_WRAPPER =
  "h-8 w-8 rounded-full bg-[rgba(20,20,20,0.7)] flex items-center justify-center";

const containerVariants = {
  initial: {},
  whileHover: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Card1() {
  const variant1 = {
    initial: {
      scale: 0.87,
      transition: { delay: 0.05, duration: 0.2, ease: "linear" },
    },
    whileHover: {
      scale: 0.8,
      boxShadow:
        "rgba(245,40,145,0.35) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: { delay: 0.05, duration: 0.2, ease: "linear" },
    },
  };
  const variant2 = {
    initial: {
      y: -27,
      scale: 0.95,
      transition: { delay: 0, duration: 0.2, ease: "linear" },
    },
    whileHover: {
      y: -55,
      scale: 0.87,
      boxShadow:
        "rgba(39,127,245,0.15) 0px 20px 70px -10px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: { delay: 0, duration: 0.2, ease: "linear" },
    },
  };
  const variant3 = {
    initial: {
      y: -25,
      opacity: 0,
      scale: 1,
      transition: { delay: 0.05, duration: 0.2, ease: "linear" },
    },
    whileHover: {
      y: -45,
      opacity: 1,
      scale: 1,
      boxShadow:
        "rgba(39,245,76,0.15) 10px 20px 70px -20px, rgba(36,42,66,0.04) 0px 10px 24px -8px, rgba(36,42,66,0.06) 0px 1px 4px -1px",
      transition: { delay: 0.05, duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <div className="p-0 h-full overflow-hidden border-b lg:border-b-0 lg:border-r">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="flex h-full w-full items-center justify-center rounded-t-xl border-b">
          <div className="relative flex flex-col items-center justify-center gap-y-2 p-10">
            <motion.div
              variants={variant1}
              className="z-[1] flex h-full w-full items-center justify-between gap-x-2 rounded-md border bg-background p-5 px-2.5"
            >
              <div className={ICON_WRAPPER}>
                <SearchIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="h-2 w-32 rounded-full bg-neutral-800/50 dark:bg-neutral-200/80" />
                <div className="h-2 w-48 rounded-full bg-slate-400/50" />
                <div className="text-xs text-neutral-500">
                  Private Dark‑Pool Entry
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={variant2}
              className="z-[2] flex h-full w-full items-center justify-between gap-x-2 rounded-md border bg-background p-5 px-2.5"
            >
              <div className={ICON_WRAPPER}>
                <DatabaseIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="h-2 w-32 rounded-full bg-neutral-800/50 dark:bg-neutral-200/80" />
                <div className="h-2 w-48 rounded-full bg-slate-400/50" />
                <div className="h-2 w-20 rounded-full bg-slate-400/50" />
                <div className="text-xs text-neutral-500">
                  Secure Settlement Layer
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={variant3}
              className="absolute bottom-0 z-[3] m-auto flex h-fit w-fit items-center justify-between gap-x-2 rounded-md border bg-background p-5 px-2.5"
            >
              <div className={ICON_WRAPPER}>
                <MessageSquareIcon className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="h-2 w-32 rounded-full bg-neutral-800/50 dark:bg-neutral-200/80" />
                <div className="h-2 w-48 rounded-full bg-slate-400/50" />
                <div className="h-2 w-20 rounded-full bg-slate-400/50" />
                <div className="h-2 w-48 rounded-full bg-slate-400/50" />
                <div className="text-xs text-neutral-500">
                  AI Execution Engine
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
          <h2 className="font-semibold tracking-tight text-lg">
            Confidential Block Trading
          </h2>
          <p className="text-sm text-muted-foreground">
            Execute large‑volume orders anonymously through IncognitoEx dark
            pools with near‑zero market impact.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const Card2 = () => {
  const logs = [
    {
      id: 1,
      type: "info",
      timestamp: "2025-06-15 10:01:12",
      message: "Algorithm initialized. Assessing market liquidity.",
      icon: (
        <div className={ICON_WRAPPER}>
          <InfoIcon className="h-5 w-5 text-white" />
        </div>
      ),
    },
    {
      id: 2,
      type: "action",
      timestamp: "2025-06-15 10:01:14",
      message: "Splitting order across multi‑chain pools...",
      icon: (
        <div className={ICON_WRAPPER}>
          <DatabaseIcon className="h-5 w-5 text-white" />
        </div>
      ),
    },
    {
      id: 3,
      type: "decision",
      timestamp: "2025-06-15 10:01:18",
      message: "Route optimized. Expected slippage: <0.02%",
      icon: (
        <div className={ICON_WRAPPER}>
          <BrainCircuitIcon className="h-5 w-5 text-white" />
        </div>
      ),
    },
    {
      id: 4,
      type: "warning",
      timestamp: "2025-06-15 10:01:20",
      message: "Detected MEV hotspot, rerouting...",
      icon: (
        <div className={ICON_WRAPPER}>
          <AlertTriangleIcon className="h-5 w-5 text-white" />
        </div>
      ),
    },
    {
      id: 5,
      type: "success",
      timestamp: "2025-06-15 10:01:23",
      message: "Execution complete. Avg. price improvement 0.5%.",
      icon: (
        <div className={ICON_WRAPPER}>
          <GitForkIcon className="h-5 w-5 text-white" />
        </div>
      ),
    },
  ];
  return (
    <div className="p-0 h-full overflow-hidden border-b lg:border-b-0 lg:border-r">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileHover="whileHover"
        className="flex flex-col gap-y-5 items-center justify-between h-full w-full cursor-pointer"
      >
        <div className="border-b items-center justify-center overflow-hidden bg-transparent rounded-t-xl h-4/5 w-full flex">
          <motion.div className="p-5 rounded-t-md cursor-pointer overflow-hidden h-[270px] flex flex-col gap-y-3.5 w-full">
            {logs.map((log, index) => (
              <motion.div
                key={log.id}
                className="p-4 bg-transparent backdrop-blur-md shadow-[0px_0px_40px_-25px_rgba(0,0,0,0.25)] border border-border origin-right w-full rounded-md flex items-center"
                custom={index}
                variants={{
                  initial: (i: number) => ({
                    y: 0,
                    scale: i === 4 ? 0.9 : 1,
                    opacity: 1,
                    transition: {
                      delay: 0.05,
                      duration: 0.2,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                    },
                  }),
                  whileHover: (i: number) => ({
                    y: -85,
                    opacity: i === 4 ? 1 : 0.6,
                    scale: i === 0 ? 0.85 : i === 4 ? 1.1 : 1,
                    transition: {
                      delay: 0.05,
                      duration: 0.2,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                    },
                  }),
                }}
                transition={{ type: "spring", damping: 40, stiffness: 600 }}
              >
                <div className="mr-3">{log.icon}</div>
                <div className="flex-grow">
                  <p className="text-foreground text-xs font-medium">
                    [{log.timestamp}] {log.type.toUpperCase()}
                  </p>
                  <p className="text-muted-foreground text-xs">{log.message}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
          <h2 className="font-semibold tracking-tight text-lg">
            Real‑Time AI Execution
          </h2>
          <p className="text-sm text-muted-foreground">
            IncognitoEx’s AI engine dynamically routes liquidity to secure the
            best fills while maintaining total trade privacy.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="p-0 min-h-[500px] lg:min-h-fit overflow-hidden border-b lg:border-b-0 -z-0">
      <div className="relative flex flex-col gap-y-5 items-center justify-between h-full w-full">
        <div className="border-b items-center justify-center overflow-hidden rounded-t-xl h-4/5 w-full flex">
          <div className="relative flex items-center justify-center h-full w-full">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(circle,hsl(var(--accent)/0.3)_0%,transparent_100%)]" />
            <OrbitingCircles duration={15} delay={0} radius={40} reverse>
              <div className={ICON_WRAPPER}>
                <HeadsetIcon className="h-5 w-5 text-white" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles duration={15} delay={20} radius={80}>
              <div className={ICON_WRAPPER}>
                <SquareTerminal className="h-5 w-5 text-white" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles radius={120} duration={20} delay={20}>
              <div className={ICON_WRAPPER}>
                <UserSearch className="h-5 w-5 text-white" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles radius={160} duration={40} delay={20}>
              <div className={ICON_WRAPPER}>
                <MessageSquareIcon className="h-5 w-5 text-white" />
              </div>
            </OrbitingCircles>
            <OrbitingCircles radius={200} duration={30}>
              <div className={ICON_WRAPPER}>
                <GitForkIcon className="h-5 w-5 text-white" />
              </div>
            </OrbitingCircles>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 px-5 pb-4 items-start w-full">
          <h2 className="font-semibold tracking-tight text-lg">
            MEV &amp; Slippage Shield
          </h2>
          <p className="text-sm text-muted-foreground">
            IncognitoEx neutralizes frontrunning and sandwich attacks to keep
            execution prices exactly where you expect them.
          </p>
        </div>
      </div>
    </div>
  );
};

export function UseCases() {
  return (
    <Section id="use-cases" title="Use Cases">
      <div className="grid lg:grid-cols-3 h-full border border-b-0">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </Section>
  );
}
