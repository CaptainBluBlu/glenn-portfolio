import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 dark:border-stone-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-zinc-600 dark:text-stone-400">
        <p>&copy; {new Date().getFullYear()} Jane Doe. Built in the ether.</p>
      </div>
    </footer>
  )
}

export default Footer
