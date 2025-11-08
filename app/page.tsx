import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

// Metadata for SEO optimization
export const metadata: Metadata = {
  title: 'Dealan Wanganga - Full Stack Developer',
  description: 'Building modern web applications with Python and JavaScript. Focused on creating scalable solutions that make a real impact.',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'Python', 'JavaScript'],
  authors: [{ name: 'Dealan Wanganga' }],
  openGraph: {
    title: 'Dealan Wanganga - Full Stack Developer',
    description: 'Building modern web applications with Python and JavaScript',
    type: 'website',
    url: 'https://dealan.vercel.app',
    siteName: 'Dealan Wanganga Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dealan Wanganga - Full Stack Developer',
    description: 'Building modern web applications with Python and JavaScript',
  },
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
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}