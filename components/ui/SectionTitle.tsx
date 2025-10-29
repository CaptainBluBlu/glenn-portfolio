import React from 'react'

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-800 dark:text-stone-200 mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-zinc-400 dark:bg-stone-500"></span>
  </h2>
)

export default SectionTitle
