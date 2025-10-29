'use client'

import React from 'react'
import Link from 'next/link'
import { FileText, Moon, Sun } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  const navItems = ['Home', 'Projects', 'Gallery', 'Blog']

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b-2 border-zinc-900 dark:border-stone-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" aria-label="Navigate home">
            <FileText />
            <span className="text-xl font-bold tracking-wider text-zinc-900 dark:text-stone-100 hidden sm:block">
              THE DAILY DEV
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, idx) => (
              <React.Fragment key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="px-3 py-2 rounded-md text-lg font-medium text-zinc-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  {item}
                </Link>
                {idx < navItems.length - 1 && (
                  <span className="text-zinc-400 dark:text-stone-500">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center">
            <DarkModeToggle />
            <div className="md:hidden ml-2">
              <button className="p-2 rounded-md text-zinc-700 dark:text-stone-300" aria-label="Open menu">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
