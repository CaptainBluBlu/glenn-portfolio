"use client";

import { usePathname } from "next/navigation";
import { LogoIcon } from "@/components/ui/icons";
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
    <header className="sticky top-0 z-50 w-full bg-stone-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b-2 border-zinc-900 dark:border-stone-600">
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
          <div className="md:flex items-center space-x-4">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-lg font-medium transition-colors",
                    pathname === item.href
                      ? "text-zinc-900 dark:text-stone-100 bg-stone-200 dark:bg-zinc-700"
                      : "text-zinc-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-zinc-700"
                  )}
                >
                  {item.name}
                </Link>
                {idx < navItems.length - 1 && (
                  <span className="text-zinc-400 dark:text-stone-500">|</span>
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
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header
