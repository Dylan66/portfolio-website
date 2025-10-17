import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Navigation from '@/components/navigation/Navigation'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'A modern, responsive portfolio showcasing professional work and skills',
  keywords: ['portfolio', 'developer', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Portfolio Owner' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Professional Portfolio',
    description: 'A modern, responsive portfolio showcasing professional work and skills',
    siteName: 'Professional Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Portfolio',
    description: 'A modern, responsive portfolio showcasing professional work and skills',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}