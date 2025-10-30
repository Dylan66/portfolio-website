'use client'

import { Section, Grid } from '@/components/layout'
import { Card } from '@/components/ui'

export default function About() {
  return (
    <Section id="about" padding="lg" background="secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          About <span className="text-primary-400">Me</span>
        </h2>
        <p className="text-center text-neutral-300 mb-12 text-lg max-w-2xl mx-auto">
          Full Stack Developer crafting scalable solutions with Python and JavaScript
        </p>
        
        <Grid cols={1} responsive={{ md: 2 }} gap="lg" className="items-start">
          <Card padding="lg" className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-primary-400 text-2xl">→</span> Hello!
                </h3>
                <p className="text-base md:text-lg text-neutral-200 mb-4 leading-relaxed">
                  I'm <span className="text-primary-400 font-semibold">Dealan Wanganga</span>, a passionate Full Stack Developer 
                  based in <span className="font-semibold text-white">Nairobi, Kenya</span>. Currently, I'm building innovative 
                  solutions at <span className="font-semibold text-white">AUM Tech</span>, where I transform ideas into 
                  scalable applications.
                </p>
                <p className="text-base md:text-lg text-neutral-200 leading-relaxed">
                  With a <span className="font-semibold text-white">BSc in Information Technology</span>, I specialize in 
                  creating seamless user experiences backed by robust, efficient systems.
                </p>
              </div>
              
              <div className="border-t border-neutral-700 pt-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-primary-400 text-xl">▸</span> Technical Expertise
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary-400 mb-2">Core Technologies</p>
                    <p className="text-neutral-200 leading-relaxed">
                      <span className="font-semibold text-white">Python</span> and{" "}
                      <span className="font-semibold text-white">JavaScript</span> are my primary languages, 
                      enabling me to build full-stack solutions from database to UI.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary-400 mb-2">Frontend Development</p>
                    <p className="text-neutral-200 leading-relaxed">
                      Expert in <span className="font-semibold text-white">React, Next.js, and TypeScript</span> for 
                      building responsive, performant web applications with modern UI/UX patterns.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary-400 mb-2">Backend & APIs</p>
                    <p className="text-neutral-200 leading-relaxed">
                      Proficient with <span className="font-semibold text-white">FastAPI, Django, and Node.js</span> for 
                      creating RESTful APIs and microservices architectures.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary-400 mb-2">DevOps & Cloud</p>
                    <p className="text-neutral-200 leading-relaxed">
                      Experienced with <span className="font-semibold text-white">Docker, Kubernetes, and CI/CD pipelines</span> for 
                      containerization, orchestration, and automated deployments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-primary-400 text-xl">★</span> Beyond Code
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-400 text-lg">•</span>
                    <span className="text-neutral-200 text-sm">Gaming & game mechanics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-400 text-lg">•</span>
                    <span className="text-neutral-200 text-sm">Technical writing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-400 text-lg">•</span>
                    <span className="text-neutral-200 text-sm">Travel & exploration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-400 text-lg">•</span>
                    <span className="text-neutral-200 text-sm">Blockchain & Web3</span>
                  </div>
                </div>
              </div>

              <blockquote className="p-4 bg-gradient-to-r from-primary-900/30 to-primary-800/20 border-l-4 border-primary-400 italic text-primary-200 rounded-r">
                "Strive to build things that make a difference!"
                <footer className="text-sm mt-2 not-italic font-medium text-primary-300">— Dealan</footer>
              </blockquote>
            </div>
          </Card>
          
          <div className="space-y-6">
            <Card hover className="text-center bg-neutral-800/50 border-neutral-700 backdrop-blur-sm">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl ring-4 ring-primary-400/20">
                  <span className="text-white text-5xl font-bold">DW</span>
                </div>
                <div className="absolute top-0 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse ring-2 ring-green-400/50"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Dealan Wanganga</h3>
              <p className="text-primary-400 font-semibold mb-2">Full Stack Developer</p>
              <p className="text-sm text-neutral-400 mb-6">
                <span className="inline-block">AUM Tech</span>
                <span className="mx-2">•</span>
                <span className="inline-block">Nairobi, Kenya</span>
              </p>
              <div className="flex justify-center gap-4 mb-4">
                <a 
                  href="https://github.com/Dylan66" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-neutral-700 hover:bg-primary-600 text-white rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/dylan-wanganga/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-700 hover:bg-primary-600 text-white rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </Card>

            <Card padding="lg" className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-neutral-300 text-sm">Experience</span>
                  <span className="text-white font-semibold">Professional</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-neutral-300 text-sm">Location</span>
                  <span className="text-white font-semibold">Nairobi, KE</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-700">
                  <span className="text-neutral-300 text-sm">Education</span>
                  <span className="text-white font-semibold">BSc IT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 text-sm">Availability</span>
                  <span className="text-green-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Open
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </div>
    </Section>
  )
}