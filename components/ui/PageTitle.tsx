import React from 'react'

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-stone-100 border-b-4 border-zinc-900 dark:border-stone-100 pb-2 mb-8">
    {children}
  </h1>
)

export default PageTitle
