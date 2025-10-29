import React from 'react'

const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-stone-50 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-stone-500 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
    {children}
  </div>
)

export default Card
