import React from 'react'

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-stone-200 inline-block">
      {children}
    </h2>
    <div className="w-24 h-1 bg-zinc-400 dark:bg-stone-500 mt-2"></div>
  </div>
)

export default SectionTitle
