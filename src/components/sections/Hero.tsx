'use client'

import { Section, Container } from '@/components/layout'
import { Button } from '@/components/ui'

export default function Hero() {
  return (
    <Section 
      id="hero" 
      padding="xl" 
      background="dark" 
      className="min-h-screen flex items-center"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl text-gray-300 mb-4">
          Hi There! <span className="wave">👋🏻</span>
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
          I'M <span className="text-purple-400">Dylan Wanganga</span>
        </h2>
        <div className="text-xl md:text-2xl text-purple-300 mb-8 font-medium">
          Full Stack Developer | Python & JavaScript Enthusiast
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Passionate about technology and building innovative web applications with Python, JavaScript, and modern frameworks like React, Next.js, and FastAPI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            View Projects
          </Button>
          <Button variant="ghost" size="lg" className="text-white border-gray-600 hover:bg-gray-800">
            Contact Me
          </Button>
        </div>
      </div>
    </Section>
  )
}