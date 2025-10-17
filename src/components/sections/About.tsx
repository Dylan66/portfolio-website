'use client'

import { Section, Grid } from '@/components/layout'
import { Card } from '@/components/ui'

export default function About() {
  return (
    <Section id="about" padding="xl" background="secondary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
        About <span className="text-primary-400">Me</span>
      </h2>
      <p className="text-center text-neutral-300 mb-12 text-lg">Software Developer based in Nairobi, Kenya</p>
      
      <Grid cols={1} responsive={{ md: 2 }} gap="lg" className="items-start">
        <Card padding="lg" className="bg-neutral-800/50 border-neutral-700">
          <div className="space-y-6">
            <div>
              <p className="text-base md:text-lg text-neutral-200 mb-4 leading-relaxed">
                I'm <span className="text-primary-400 font-semibold">Dealan Wanganga</span>, a Full Stack Developer 
                currently working at <span className="font-semibold text-white">AUM Tech</span> in Nairobi, Kenya.
              </p>
              <p className="text-base md:text-lg text-neutral-200 leading-relaxed">
                I hold a <span className="font-semibold text-white">BSc in Information Technology</span> and specialize in 
                building scalable web applications using modern technologies.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technical Focus</h4>
              <p className="text-neutral-200 mb-3 leading-relaxed">
                I work primarily with <span className="text-primary-400 font-semibold">Python</span> and{" "}
                <span className="text-primary-400 font-semibold">JavaScript</span>, building both frontend 
                and backend solutions.
              </p>
              <p className="text-neutral-200 mb-3 leading-relaxed">
                My expertise includes <span className="font-semibold text-white">React, Next.js, FastAPI, and Django</span> 
                for creating responsive web applications and robust APIs.
              </p>
              <p className="text-neutral-200 leading-relaxed">
                I also work with <span className="text-primary-400 font-semibold">DevOps tools</span> including{" "}
                <span className="font-semibold text-white">Docker and Kubernetes</span> for containerization and orchestration.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Interests & Hobbies</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-neutral-200">
                  <span className="text-primary-400 mr-2">•</span> Gaming enthusiast
                </li>
                <li className="flex items-center text-neutral-200">
                  <span className="text-primary-400 mr-2">•</span> Tech blogger
                </li>
                <li className="flex items-center text-neutral-200">
                  <span className="text-primary-400 mr-2">•</span> Travel lover
                </li>
                <li className="flex items-center text-neutral-200">
                  <span className="text-primary-400 mr-2">•</span> Blockchain development (hobby)
                </li>
              </ul>
            </div>

            <blockquote className="p-4 bg-primary-900/20 border-l-4 border-primary-400 italic text-primary-200">
              "Strive to build things that make a difference!"
              <footer className="text-sm mt-2 not-italic font-medium text-primary-300">- Dealan</footer>
            </blockquote>
          </div>
        </Card>
        
        <Card hover className="text-center bg-neutral-800/50 border-neutral-700">
          <div className="w-48 h-48 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl font-bold">DW</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Dealan Wanganga</h3>
          <p className="text-neutral-300 mb-4">Full Stack Developer</p>
          <p className="text-sm text-neutral-400 mb-6">AUM Tech • Nairobi, Kenya</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/Dylan66" target="_blank" rel="noopener noreferrer" 
               className="text-neutral-300 hover:text-primary-400 transition-colors font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/dylan-wanganga/" target="_blank" rel="noopener noreferrer"
               className="text-neutral-300 hover:text-primary-400 transition-colors font-medium">
              LinkedIn
            </a>
          </div>
        </Card>
      </Grid>
    </Section>
  )
}