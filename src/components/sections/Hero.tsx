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
                    {link.platform === 'github' && (
                      <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    )}
                    {link.platform === 'linkedin' && (
                      <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
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