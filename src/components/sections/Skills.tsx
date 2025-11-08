'use client'

import { Section, Grid } from '@/components/layout'
import { Card } from '@/components/ui'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "⚛️",
    description: "Modern UI frameworks and responsive design",
    skills: [
      { name: "React", level: "Advanced", icon: "⚛️" },
      { name: "Next.js", level: "Advanced", icon: "▲" },
      { name: "TypeScript", level: "Advanced", icon: "📘" },
      { name: "JavaScript", level: "Advanced", icon: "💛" },
      { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
      { name: "HTML/CSS", level: "Advanced", icon: "🌐" }
    ]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    description: "Server-side technologies and API development",
    skills: [
      { name: "Python", level: "Advanced", icon: "🐍" },
      { name: "FastAPI", level: "Advanced", icon: "⚡" },
      { name: "Django", level: "Intermediate", icon: "🎸" },
      { name: "Node.js", level: "Intermediate", icon: "💚" },
      { name: "REST APIs", level: "Advanced", icon: "🔌" }
    ]
  },
  {
    title: "Database & Storage",
    icon: "🗄️",
    description: "Data persistence and management solutions",
    skills: [
      { name: "PostgreSQL", level: "Advanced", icon: "🐘" },
      { name: "MongoDB", level: "Intermediate", icon: "🍃" },
      { name: "Redis", level: "Intermediate", icon: "🔴" },
      { name: "SQL", level: "Advanced", icon: "📊" },
      { name: "Database Design", level: "Advanced", icon: "🏗️" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    description: "Infrastructure, deployment, and orchestration",
    skills: [
      { name: "Docker", level: "Advanced", icon: "🐳" },
      { name: "Kubernetes", level: "Advanced", icon: "☸️" },
      { name: "AWS", level: "Advanced", icon: "☁️" },
      { name: "CI/CD", level: "Advanced", icon: "🔄" },
      { name: "Linux", level: "Advanced", icon: "🐧" },
      { name: "Git", level: "Advanced", icon: "📦" }
    ]
  },
  {
    title: "Monitoring & Automation",
    icon: "📊",
    description: "System observability and workflow automation",
    skills: [
      { name: "Grafana", level: "Intermediate", icon: "📈" },
      { name: "Prometheus", level: "Intermediate", icon: "🔥" },
      { name: "Ansible", level: "Advanced", icon: "🤖" },
      { name: "Jenkins", level: "Advanced", icon: "👷" },
      { name: "Terraform", level: "Intermediate", icon: "🏗️" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Deep learning and intelligent systems",
    skills: [
      { name: "PyTorch", level: "Advanced", icon: "🔥" },
      { name: "TensorFlow", level: "Intermediate", icon: "🧠" },

      { name: "Zapier", level: "Intermediate", icon: "⚡" },
      { name: "n8n", level: "Intermediate", icon: "�" },
      { name: "Google Genkit AI", level: "Intermediate", icon: "✨" }
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    case 'Intermediate':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    case 'Beginner':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    default:
      return 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30'
  }
}

export default function Skills() {
  return (
    <Section id="skills" padding="md" background="primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          Skills & <span className="text-primary-400">Technologies</span>
        </h2>
        <p className="text-center text-neutral-300 mb-12 text-lg">
          A comprehensive toolkit for building modern, scalable applications
        </p>
        
        <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              padding="lg" 
              hover 
              className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900/30 border border-neutral-700/50 hover:border-primary-400/50 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-neutral-200 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
        
        <div className="mt-8 text-center">
          <p className="text-neutral-400 text-sm">
            Also exploring <span className="text-primary-400 font-medium">blockchain development</span> and <span className="text-primary-400 font-medium">smart contracts</span> as a hobby
          </p>
        </div>
      </div>
    </Section>
  )
}