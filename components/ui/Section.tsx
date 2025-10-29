import React from 'react'

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`w-full max-w-5xl mx-auto px-6 py-16 sm:py-24 ${className}`}>
    {children}
  </section>
)

export default Section
