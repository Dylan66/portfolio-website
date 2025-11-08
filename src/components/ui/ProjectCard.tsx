'use client'

import React from 'react'
import Image from 'next/image'
import { Project } from '@/types'
import { Button } from './Button'
import { Card } from './Card'
import { cn, getImageSizes } from '@/lib/utils'

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
            placeholder={primaryImage.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={primaryImage.blurDataURL}
            sizes={getImageSizes('project')}
            loading="lazy"
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
          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-neutral-300 mb-5 leading-relaxed line-clamp-3 text-sm">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechnologyTag key={tech.name} technology={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs rounded-full font-medium bg-neutral-700/40 text-neutral-300 border border-neutral-600/30">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="flex-1 min-w-[120px]"
            >
              <Button variant="primary" size="sm" className="w-full justify-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
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
              className="flex-1 min-w-[120px]"
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-center border-neutral-600 text-neutral-300 hover:bg-neutral-700/50 hover:border-neutral-500"
              >
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Code
              </Button>
            </a>
          )}
          {project.links.case_study && (
            <a
              href={project.links.case_study}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read case study of ${project.title}`}
              className="flex-1 min-w-[120px]"
            >
              <Button variant="ghost" size="sm" className="w-full justify-center">
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
    frontend: 'bg-blue-900/30 text-blue-300 border-blue-700/40 hover:bg-blue-900/40',
    backend: 'bg-green-900/30 text-green-300 border-green-700/40 hover:bg-green-900/40',
    database: 'bg-amber-900/30 text-amber-300 border-amber-700/40 hover:bg-amber-900/40',
    tool: 'bg-purple-900/30 text-purple-300 border-purple-700/40 hover:bg-purple-900/40',
    language: 'bg-red-900/30 text-red-300 border-red-700/40 hover:bg-red-900/40',
    framework: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/40 hover:bg-cyan-900/40',
    cloud: 'bg-indigo-900/30 text-indigo-300 border-indigo-700/40 hover:bg-indigo-900/40',
    design: 'bg-pink-900/30 text-pink-300 border-pink-700/40 hover:bg-pink-900/40'
  }

  const colorClass = categoryColors[technology.category] || categoryColors.tool

  return (
    <span
      className={cn(
        'px-3 py-1 text-xs rounded-full font-medium border transition-all duration-200 hover:scale-105 cursor-default',
        colorClass
      )}
      title={`${technology.name} - ${technology.category}`}
    >
      {technology.icon && <span className="mr-1" suppressHydrationWarning>{technology.icon}</span>}
      {technology.name}
    </span>
  )
}
