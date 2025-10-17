'use client'

import { Section } from '@/components/layout'
import { Button } from '@/components/ui'

export default function Contact() {
  return (
    <Section id="contact" padding="xl" background="primary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
        Get In <span className="text-primary-400">Touch</span>
      </h2>
      <p className="text-center text-neutral-300 mb-12 text-lg">Interested in working together? Let's connect and discuss your project.</p>
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:your.email@example.com">
            <Button variant="primary" size="lg">
              Send Email
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/dylan-wanganga/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg" className="text-white border-primary-400 hover:bg-primary-900/20">
              View LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </Section>
  )
}