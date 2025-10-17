'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Section } from '@/components/layout'
import { Button } from '@/components/ui'
import { portfolioData } from '@/data/portfolio'

// Lazy load ParticleBackground for better performance with optimized loading state
const ParticleBackground = dynamic(
  () => import('@/components/ui/ParticleBackground'),
  { 
    ssr: false,
    loading: () => (
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/10 pointer-events-none"
        aria-label="Loading background animation"
      />
    )
  }
)

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { personal } = portfolioData

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section 
      id="home" 
      padding="xl" 
      background="dark" 
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Particle background animation */}
      <ParticleBackground 
        particleCount={60}
        speed={0.3}
        maxDistance={120}
      />
      
      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting with wave animation */}
          <div 
            className={`hero-text-reveal ${isVisible ? 'hero-text-visible' : ''}`}
            style={{ animationDelay: '0ms' }}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-6 font-light tracking-wide">
              Hi There! <span className="wave">👋🏻</span>
            </h1>
          </div>

          {/* Main heading with name highlight */}
          <div 
            className={`hero-text-reveal ${isVisible ? 'hero-text-visible' : ''}`}
            style={{ animationDelay: '150ms' }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
              I'M{' '}
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h2>
          </div>

          {/* Role/Title with accent color */}
          <div 
            className={`hero-text-reveal ${isVisible ? 'hero-text-visible' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="text-2xl md:text-3xl lg:text-4xl text-primary-300 mb-8 font-semibold tracking-wide">
              {personal.title}
            </div>
          </div>

          {/* Description */}
          <div 
            className={`hero-text-reveal ${isVisible ? 'hero-text-visible' : ''}`}
            style={{ animationDelay: '450ms' }}
          >
            <p className="text-base md:text-lg lg:text-xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              {personal.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`hero-text-reveal ${isVisible ? 'hero-text-visible' : ''}`}
            style={{ animationDelay: '600ms' }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto min-w-[180px] shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-shadow"
              >
                View Projects
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="w-full sm:w-auto min-w-[180px] text-white border-2 border-primary-400 hover:bg-primary-900/30 hover:border-primary-300 transition-all"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div 
            className={`hero-text-reveal ${isVisible ? 'hero-text-visible' : ''}`}
            style={{ animationDelay: '750ms' }}
          >
            <div className="flex gap-6 justify-center items-center mt-12">
              {personal.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform !== 'email' ? '_blank' : undefined}
                  rel={link.platform !== 'email' ? 'noopener noreferrer' : undefined}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={`Visit ${link.platform} profile`}
                >
                  <span className="text-2xl md:text-3xl">
                    {link.platform === 'github' && '🔗'}
                    {link.platform === 'linkedin' && '💼'}
                    {link.platform === 'email' && '✉️'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-scroll-indicator" />
        </div>
      </div>
    </Section>
  )
}