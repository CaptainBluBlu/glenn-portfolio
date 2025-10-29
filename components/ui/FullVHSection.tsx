import React from 'react'

const FullVHSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`min-h-screen w-full flex items-center justify-center px-6 py-16 sm:py-24 ${className}`}>
    <div className="w-full max-w-5xl mx-auto">
      {children}
    </div>
  </section>
)

export default FullVHSection
