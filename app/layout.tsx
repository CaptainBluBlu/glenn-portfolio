import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { inter } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Daily Dev',
  description: 'A creative developer & digital strategist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class">
          <div className="min-h-screen bg-stone-100 dark:bg-zinc-900 text-zinc-900 dark:text-stone-200 transition-colors duration-300 relative">
            <div
              className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.06]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                pointerEvents: 'none',
              }}
            ></div>
            <div className="relative z-10">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
