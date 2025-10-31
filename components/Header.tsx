"use client";

import { usePathname } from "next/navigation";
import { LogoIcon, Menu } from "@/components/ui/icons";
import { ThemeToggle } from "./ui/themeToggle";
import { cn } from "@/lib/cnUtility";
import React from 'react'
import Link from 'next/link'

export const Header = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-50 dark:bg-zinc-900">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Navigate home"
            >
              <LogoIcon />
              <span className="text-xl font-bold tracking-wider text-zinc-900 dark:text-stone-100 hidden sm:block">
                THE DAILY DEV
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-lg font-medium transition-colors",
                    pathname === item.href
                      ? "text-zinc-900 dark:text-stone-100"
                      : "text-zinc-500 dark:text-stone-400 hover:text-zinc-900 dark:hover:text-stone-100",
                  )}
                >
                  {item.name}
                </Link>
                {idx < navItems.length - 1 && (
                  <span className="text-zinc-300 dark:text-stone-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu (placeholder) */}
          <div className="flex items-center">
            <ThemeToggle />

            {/* Mobile menu button placeholder */}
            <div className="md:hidden ml-2">
              <button
                className="p-2 rounded-md text-zinc-700 dark:text-stone-300"
                aria-label="Open menu"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header
