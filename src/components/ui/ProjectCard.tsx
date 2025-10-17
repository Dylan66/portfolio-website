'use client'

import React from 'react'
import Image from 'next/image'
import { Project } from '@/types'
import { Button } from './Button'
import { Card } from './Card'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  variant?: 'grid' | 'list'
  className?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  variant = 'grid',
  className
}) => {
  const isListView = variant === 'list'
  const primaryImage = project.images[0]

  return (
    <Card
      hover
      padding="none"
      className={cn(
        'overflow-hidden group',
        isListView ? 'flex flex-col md:flex-row' : 'flex flex-col',
        className
      )}
    >
      {/* Project Image */}
      <div
        className={cn(
          'relative overflow-hidden bg-gradient-to-br from-primary-900/40 to-primary-800/40',
          isListView ? 'md:w-2/5 h-64 md:h-auto' : 'h-56 w-full'
        )}
      >
        {primaryImage ? (
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            width={primaryImage.width}
            height={primaryImage.height}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            placeholder={primaryImage.placeholder || 'blur'}
            blurDataURL={primaryImage.blurDataURL || '/images/placeholder-blur.jpg'}
            sizes={isListView ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-primary-300 font-semibold text-lg text-center px-4">
              {project.title}
            </span>
          </div>
        )}
        
        {/* Status Badge */}
        {project.status === 'in-progress' && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent-amber/90 backdrop-blur-sm text-neutral-900 text-xs font-semibold rounded-full">
            In Progress
          </div>
        )}
        
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className={cn('p-6 flex flex-col', isListView ? 'md:w-3/5' : 'flex-grow')}>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-neutral-300 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <TechnologyTag key={tech.name} technology={tech} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              <Button variant="primary" size="sm">
                Live Demo
              </Button>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code of ${project.title}`}
            >
              <Button
                variant="ghost"
                size="sm"
                className="border-primary-600 text-primary-300 hover:bg-primary-900/20"
              >
                Source Code
              </Button>
            </a>
          )}
          {project.links.case_study && (
            <a
              href={project.links.case_study}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read case study of ${project.title}`}
            >
              <Button variant="ghost" size="sm">
                Case Study
              </Button>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

// Technology Tag Component
interface TechnologyTagProps {
  technology: {
    name: string
    category: string
    icon?: string
  }
}

const TechnologyTag: React.FC<TechnologyTagProps> = ({ technology }) => {
  const categoryColors: Record<string, string> = {
    frontend: 'bg-primary-900/40 text-primary-300 border-primary-700/30',
    backend: 'bg-secondary-900/40 text-secondary-300 border-secondary-700/30',
    database: 'bg-amber-900/40 text-amber-300 border-amber-700/30',
    tool: 'bg-neutral-700/40 text-neutral-300 border-neutral-600/30',
    language: 'bg-red-900/40 text-red-300 border-red-700/30',
    framework: 'bg-primary-800/40 text-primary-200 border-primary-600/30',
    cloud: 'bg-secondary-800/40 text-secondary-200 border-secondary-600/30',
    design: 'bg-neutral-600/40 text-neutral-200 border-neutral-500/30'
  }

  const colorClass = categoryColors[technology.category] || categoryColors.tool

  return (
    <span
      className={cn(
        'px-3 py-1 text-sm rounded-full font-medium border transition-all duration-200 hover:scale-105',
        colorClass
      )}
    >
      {technology.icon && <span className="mr-1">{technology.icon}</span>}
      {technology.name}
    </span>
  )
}
