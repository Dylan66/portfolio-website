'use client'

import { useState, useMemo } from 'react'
import { Section, Grid } from '@/components/layout'
import { ProjectCard } from '@/components/ui'
import { portfolioData } from '@/data/portfolio'
import { ProjectCategory } from '@/types'
import { cn, debounce } from '@/lib/utils'

type SortOption = 'date-desc' | 'date-asc' | 'featured'

const categories: { label: string; value: ProjectCategory | 'all'; count?: number }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Apps', value: 'web-app' },
  { label: 'Mobile Apps', value: 'mobile-app' },
  { label: 'Tools & AI', value: 'tool' },
  { label: 'Libraries', value: 'library' },
  { label: 'Design', value: 'design' }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: portfolioData.projects.length }
    portfolioData.projects.forEach(project => {
      counts[project.category] = (counts[project.category] || 0) + 1
    })
    return counts
  }, [])

  // Filter and sort projects
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

    // Sort projects
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (sortBy === 'date-desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (sortBy === 'date-asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
      return 0
    })

    return sorted
  }, [selectedCategory, searchQuery, sortBy])

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
    <Section id="projects" padding="sm" background="secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development, AI/ML solutions, and modern web applications
          </p>
        </div>

        {/* Controls Container */}
        <div className="mb-8 space-y-5">
          {/* Search and Sort Row */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name, description, or technology..."
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-neutral-600"
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

            {/* Sort Dropdown */}
            <div className="relative md:w-56">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as SortOption)
                  setIsAnimating(true)
                  setTimeout(() => setIsAnimating(false), 300)
                }}
                className="w-full px-4 py-3.5 pr-10 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-neutral-600 appearance-none cursor-pointer"
                aria-label="Sort projects"
              >
                <option value="featured">Featured First</option>
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
              </select>
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const count = categoryCounts[category.value] || 0
              return (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  disabled={count === 0 && category.value !== 'all'}
                  className={cn(
                    'px-5 py-2.5 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed',
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                      : 'bg-neutral-800/50 text-neutral-300 border border-neutral-700 hover:bg-neutral-700/50 hover:border-neutral-600 hover:scale-105'
                  )}
                  aria-pressed={selectedCategory === category.value}
                  aria-label={`Filter by ${category.label}`}
                >
                  <span>{category.label}</span>
                  <span className={cn(
                    'ml-2 px-2 py-0.5 rounded-full text-xs font-semibold',
                    selectedCategory === category.value
                      ? 'bg-white/20'
                      : 'bg-neutral-700/50'
                  )}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid with Animation */}
        <div
          className={cn(
            'transition-all duration-300',
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          )}
        >
          {filteredProjects.length > 0 ? (
            <>
              <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                    className="animate-fade-in-up"
                  >
                    <ProjectCard project={project} variant="grid" />
                  </div>
                ))}
              </Grid>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-800/50 border-2 border-neutral-700 mb-5">
                <svg
                  className="w-10 h-10 text-neutral-400"
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
              <h3 className="text-2xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-neutral-400 mb-5 max-w-md mx-auto">
                We couldn't find any projects matching your criteria. Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                  setIsAnimating(true)
                  setTimeout(() => setIsAnimating(false), 300)
                }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}