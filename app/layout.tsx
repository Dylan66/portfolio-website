import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import { WebVitals } from './web-vitals'
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
  metadataBase: new URL('https://dealan.vercel.app'),
  title: {
    default: 'Dealan Wanganga - Full Stack Developer',
    template: '%s | Dealan Wanganga',
  },
  description: 'Building modern web applications with Python and JavaScript. Focused on creating scalable solutions that make a real impact.',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'Python', 'JavaScript', 'DevOps', 'Kubernetes'],
  authors: [{ name: 'Dealan Wanganga' }],
  creator: 'Dealan Wanganga',
  publisher: 'Dealan Wanganga',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dealan.vercel.app',
    title: 'Dealan Wanganga - Full Stack Developer',
    description: 'Building modern web applications with Python and JavaScript. Focused on creating scalable solutions that make a real impact.',
    siteName: 'Dealan Wanganga Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dealan Wanganga - Full Stack Developer',
    description: 'Building modern web applications with Python and JavaScript',
  },
  alternates: {
    canonical: 'https://dealan.vercel.app',
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
        <WebVitals />
        <Navigation />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}