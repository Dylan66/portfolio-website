import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import { SectionSkeleton } from '@/components/ui'

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
  },
}

// Dynamic imports for below-the-fold sections with optimized loading states
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionSkeleton background="secondary" />
})

const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionSkeleton background="primary" />
})

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionSkeleton background="secondary" />
})

const Contact = dynamic(() => import('@/components/sections/Contact'), {
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