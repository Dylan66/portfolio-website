'use client'

import { Section } from '@/components/layout'
import { Card } from '@/components/ui'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: '⚛️' },
    { category: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Node.js'], icon: '⚙️' },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis'], icon: '🗄️' },
    { category: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'], icon: '🚀' }
  ]

  const interests = [
    { title: 'Gaming & Game Mechanics', description: 'Exploring interactive systems and player engagement patterns', icon: '🎮' },
    { title: 'Blockchain & Web3', description: 'Decentralized applications and smart contract development', icon: '⛓️' },
    { title: 'Technical Writing', description: 'Documenting complex systems and sharing knowledge', icon: '✍️' },
    { title: 'Travel & Exploration', description: 'Discovering new cultures and perspectives', icon: '🌍' }
  ]

  return (
    <Section id="about" padding="md" background="secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">
          About <span className="text-primary-400">Me</span>
        </h2>
        
        <div className="space-y-6">
          {/* My Approach */}
          <Card padding="md" className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <span>My Approach</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <img
                  src="/images/dylan.png"
                  alt="Dylan"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl object-cover border-2 border-primary-400/40 shadow-lg flex-shrink-0"
                />
                <p className="text-neutral-300 leading-relaxed flex-1">
                  I craft digital experiences that connect people and purpose. Every line of code is written with intention, blending technical precision and genuine empathy to create products that feel as good as they function.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="text-primary-400 font-semibold">User-Centric Design</div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Every line of code serves a purpose. I prioritize intuitive interfaces and seamless experiences that users actually enjoy.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-primary-400 font-semibold">Scalable Architecture</div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Building for today while planning for tomorrow. Clean code, modular design, and performance optimization are non-negotiable.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-primary-400 font-semibold">Continuous Growth</div>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Technology evolves rapidly. I stay ahead by experimenting with emerging tools and contributing to the developer community.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card padding="lg" className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              <span>Technical Arsenal</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div key={skill.category} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <h4 className="text-lg font-semibold text-white">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-neutral-700/50 text-neutral-200 text-xs rounded-full border border-neutral-600 hover:border-primary-400 hover:text-primary-300 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Beyond Code */}
          <Card padding="lg" className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🌟</span>
              <span>Beyond Code</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {interests.map((interest) => (
                <div key={interest.title} className="flex gap-4 p-4 rounded-lg bg-neutral-900/30 border border-neutral-700/50 hover:border-primary-400/50 transition-colors">
                  <div className="text-3xl flex-shrink-0">{interest.icon}</div>
                  <div className="space-y-1">
                    <h4 className="text-white font-semibold">{interest.title}</h4>
                    <p className="text-neutral-400 text-sm">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </Section>
  )
}