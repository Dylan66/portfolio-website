import dynamicImport from 'next/dynamic'
import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import { SectionSkeleton } from '@/components/ui'

// Force static generation for this page
export const dynamic = 'force-static'
export const revalidate = false // Never revalidate (pure static)

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
    url: 'https://yourportfolio.com',
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

// Dynamic imports for below-the-fold sections with optimized loading states
const About = dynamicImport(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton background="secondary" />
})

const Skills = dynamicImport(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton background="primary" />
})

const Projects = dynamicImport(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton background="secondary" />
})

const Contact = dynamicImport(() => import('@/components/sections/Contact'), {
  loading: () => <SectionSkeleton background="primary" />
})

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