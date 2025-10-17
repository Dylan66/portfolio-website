'use client'

import { Section, Grid } from '@/components/layout'
import { Card, Button } from '@/components/ui'

const projects = [
  {
    id: 1,
    title: "Sahal Medical",
    description: "A modern, responsive web app for a medical service provider. Built with React, Vite, and Tailwind CSS, it features online appointment booking, service browsing, and a clean, fast user experience.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    demoLink: "https://sahal-web-dylan66s-projects.vercel.app/#home",
    githubLink: "https://github.com/Dylan66/sahal_web"
  },
  {
    id: 2,
    title: "Period Relief Project",
    description: "A web app to track and showcase the impact of menstrual product distribution. Features a metrics dashboard with real-time stats on individuals supported, products distributed, and active centers.",
    technologies: ["React", "JavaScript", "Dashboard", "Analytics"],
    demoLink: "https://pp-relief-platform-cg1m.vercel.app/",
    githubLink: "https://github.com/Dylan66/PP-Relief-platform"
  },
  {
    id: 3,
    title: "Chatify",
    description: "Personal Chat Room or Workspace to share resources and hangout with friends. Built with React.js, Material-UI, and Firebase. Features realtime messaging, image sharing and message reactions.",
    technologies: ["React", "Material-UI", "Firebase", "Real-time"],
    demoLink: "https://chatify-49.web.app/",
    githubLink: "https://github.com/soumyajit4419/Chatify"
  },
  {
    id: 4,
    title: "Plant AI",
    description: "Image classifier model using PyTorch framework with CNN and Transfer Learning. Successfully detects diseased and healthy leaves of 14 unique plants with 98% accuracy using Resnet34.",
    technologies: ["PyTorch", "CNN", "Transfer Learning", "Python"],
    demoLink: "https://plant49-ai.herokuapp.com/",
    githubLink: "https://github.com/soumyajit4419/Plant_AI"
  },
  {
    id: 5,
    title: "AI For Social Good",
    description: "Using Natural Language Processing for the detection of suicide-related posts and user's suicide ideation in cyberspace, helping in suicide prevention through AI-powered analysis.",
    technologies: ["NLP", "Python", "Machine Learning", "Social Impact"],
    githubLink: "https://github.com/soumyajit4419/AI_For_Social_Good"
  },
  {
    id: 6,
    title: "Face Recognition & Emotion Detection",
    description: "CNN classifier trained using FER-2013 dataset with Keras and TensorFlow. Successfully predicts various human emotions with 60.1% accuracy, using OpenCV for face detection.",
    technologies: ["CNN", "Keras", "TensorFlow", "OpenCV"],
    githubLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection"
  }
]

export default function Projects() {
  return (
    <Section id="projects" padding="xl" background="white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        My Recent <span className="text-purple-600">Works</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">Here are a few projects I've worked on recently.</p>
      
      <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
        {projects.map((project) => (
          <Card key={project.id} hover padding="lg" className="h-full flex flex-col">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg h-48 mb-6 flex items-center justify-center">
              <span className="text-purple-600 font-medium text-lg">{project.title}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="sm">Live Demo</Button>
                </a>
              )}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">Source Code</Button>
              </a>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  )
}