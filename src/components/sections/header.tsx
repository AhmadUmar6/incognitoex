"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-x-8 px-6 py-6 md:px-12">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="h-12 w-auto" />
          <span className="text-2xl font-semibold md:text-3xl">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden lg:block">
          <Link
            href="#"
            className={cn(
              buttonVariants({ variant: "new" }),
              "h-12 rounded-lg px-8 text-lg font-medium tracking-tight text-primary-foreground"
            )}
          >
            {siteConfig.cta}
          </Link>
        </div>

        <div className="mt-2 block cursor-pointer lg:hidden">
          <MobileDrawer />
        </div>
      </div>
      <hr className="absolute bottom-0 w-full" />
    </header>
  );
}
