'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full text-zinc-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  )
}

export default DarkModeToggle
