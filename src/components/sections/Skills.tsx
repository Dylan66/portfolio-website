'use client'

import { Section, Grid } from '@/components/layout'
import { Card } from '@/components/ui'

const skillCategories = [
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "Ansible", level: "Advanced" },
      { name: "Jenkins", level: "Advanced" },
      { name: "Grafana", level: "Intermediate" },
      { name: "Prometheus", level: "Intermediate" },
      { name: "AWS", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "Git", level: "Advanced" }
    ]
  },
  {
    title: "Backend Development", 
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Django", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" }
    ]
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-green-100 text-green-800'
    case 'Intermediate':
      return 'bg-blue-100 text-blue-800'
    case 'Beginner':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function Skills() {
  return (
    <Section id="skills" padding="lg" background="primary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
        Skills & <span className="text-primary-400">Technologies</span>
      </h2>
      <p className="text-center text-neutral-300 mb-12 text-lg">My technical expertise and proficiency levels</p>
      
      <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
        {skillCategories.map((category) => (
          <Card key={category.title} padding="lg" hover className="bg-neutral-800/50 border-neutral-700">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              {category.title}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-neutral-200 font-medium">{skill.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </Grid>
      
      <div className="mt-12 text-center">
        <Card padding="lg" className="max-w-2xl mx-auto bg-neutral-800/50 border-neutral-700">
          <h3 className="text-lg font-semibold text-white mb-3">Additional Interests</h3>
          <p className="text-neutral-200 leading-relaxed">
            I also explore <span className="text-primary-400 font-medium">blockchain development</span> and 
            smart contracts as a hobby, staying curious about emerging technologies and their potential applications.
          </p>
        </Card>
      </div>
    </Section>
  )
}