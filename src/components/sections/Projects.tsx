'use client'

import { useState, useMemo } from 'react'
import { Section, Grid } from '@/components/layout'
import { ProjectCard } from '@/components/ui'
import { portfolioData } from '@/data/portfolio'
import { cn, debounce } from '@/lib/utils'

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = portfolioData.projects

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(query))
      )
    }

    // Sort projects - featured first, then by date
    const sorted = [...filtered].sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return sorted
  }, [searchQuery])

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

        {/* Search Bar */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-neutral-800 border-2 border-neutral-700 rounded-2xl text-white text-lg placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all hover:border-neutral-600 hover:shadow-lg shadow-xl shadow-black/20"
              aria-label="Search projects"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors"
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
                We couldn't find any projects matching your search. Try adjusting your search terms.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setIsAnimating(true)
                  setTimeout(() => setIsAnimating(false), 300)
                }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}