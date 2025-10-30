'use client'

import { useState, useMemo } from 'react'
import { Section, Grid } from '@/components/layout'
import { ProjectCard } from '@/components/ui'
import { portfolioData } from '@/data/portfolio'
import { ProjectCategory } from '@/types'
import { cn, debounce } from '@/lib/utils'

const categories: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web-app' },
  { label: 'Mobile Apps', value: 'mobile-app' },
  { label: 'Tools', value: 'tool' },
  { label: 'Libraries', value: 'library' },
  { label: 'Design', value: 'design' }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    let filtered = portfolioData.projects

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [selectedCategory, searchQuery])

  // Handle category change with animation
  const handleCategoryChange = (category: ProjectCategory | 'all') => {
    if (category === selectedCategory) return
    
    setIsAnimating(true)
    setSelectedCategory(category)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  // Debounced search handler
  const handleSearchChange = useMemo(
    () => debounce((value: string) => {
      setSearchQuery(value)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 300)
    }, 300),
    []
  )

  return (
    <Section id="projects" padding="lg" background="secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          Featured <span className="text-primary-400">Projects</span>
        </h2>
        <p className="text-center text-neutral-300 mb-12 text-lg">
          Recent work showcasing my development skills
        </p>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full px-5 py-3 pl-12 bg-neutral-800/50 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              aria-label="Search projects"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={cn(
                'px-5 py-2.5 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900',
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                  : 'bg-neutral-800/50 text-neutral-300 border border-neutral-700 hover:bg-neutral-700/50 hover:border-neutral-600'
              )}
              aria-pressed={selectedCategory === category.value}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Animation */}
        <div
          className={cn(
            'transition-opacity duration-300',
            isAnimating ? 'opacity-0' : 'opacity-100'
          )}
        >
          {filteredProjects.length > 0 ? (
            <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="grid" />
              ))}
            </Grid>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-800/50 border border-neutral-700 mb-4">
                <svg
                  className="w-8 h-8 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-neutral-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-8 text-neutral-400">
            Showing {filteredProjects.length} of {portfolioData.projects.length} projects
          </div>
        )}
      </div>
    </Section>
  )
}