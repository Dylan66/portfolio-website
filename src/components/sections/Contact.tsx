'use client'

import { Section } from '@/components/layout'
import { Button } from '@/components/ui'

export default function Contact() {
  return (
    <Section id="contact" padding="md" background="primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          Let's Work <span className="text-primary-400">Together</span>
        </h2>
        <p className="text-center text-neutral-300 mb-8 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a 
            href="mailto:wanganga97@gmail.com"
            className="w-full sm:w-auto"
          >
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full sm:w-auto text-white border-2 border-primary-400 hover:bg-primary-400/10 hover:border-primary-300 transition-all"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              Send Email
            </Button>
          </a>
          <a 
            href="https://calendly.com/wanganga97/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              Book a Meeting
            </Button>
          </a>
          <a 
            href="https://www.linkedin.com/in/dylan-wanganga/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full sm:w-auto text-white border-2 border-primary-400 hover:bg-primary-400/10 hover:border-primary-300 transition-all"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </Section>
  )
}