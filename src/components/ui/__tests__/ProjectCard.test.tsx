import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { Project } from '@/types'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

const mockProject: Project = {
  id: '1',
  title: 'Test Project',
  description: 'This is a test project description',
  technologies: [
    { name: 'React', category: 'frontend', proficiency: 5 },
    { name: 'TypeScript', category: 'language', proficiency: 4 },
  ],
  images: [
    {
      src: '/test-image.jpg',
      alt: 'Test image',
      width: 1200,
      height: 800,
    },
  ],
  links: {
    demo: 'https://demo.example.com',
    github: 'https://github.com/test/project',
  },
  featured: true,
  category: 'web-app',
  date: '2024-01-01',
  status: 'completed',
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('renders technology tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders demo link when provided', () => {
    render(<ProjectCard project={mockProject} />)
    const demoLink = screen.getByRole('link', { name: /view live demo/i })
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com')
  })

  it('renders github link when provided', () => {
    render(<ProjectCard project={mockProject} />)
    const githubLink = screen.getByRole('link', { name: /view source code/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project')
  })

  it('renders featured badge when project is featured', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('does not render featured badge when project is not featured', () => {
    const nonFeaturedProject = { ...mockProject, featured: false }
    render(<ProjectCard project={nonFeaturedProject} />)
    expect(screen.queryByText('Featured')).not.toBeInTheDocument()
  })

  it('renders in-progress badge when project status is in-progress', () => {
    const inProgressProject = { ...mockProject, status: 'in-progress' as const }
    render(<ProjectCard project={inProgressProject} />)
    expect(screen.getByText('In Progress')).toBeInTheDocument()
  })

  it('renders grid variant by default', () => {
    const { container } = render(<ProjectCard project={mockProject} />)
    const card = container.firstChild
    expect(card).toHaveClass('flex', 'flex-col')
  })

  it('renders list variant when specified', () => {
    const { container } = render(<ProjectCard project={mockProject} variant="list" />)
    const card = container.firstChild
    expect(card).toHaveClass('flex', 'flex-col', 'md:flex-row')
  })

  it('renders project image with correct attributes', () => {
    render(<ProjectCard project={mockProject} />)
    const image = screen.getByAltText('Test image')
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })

  it('renders fallback when no image is provided', () => {
    const projectWithoutImage = { ...mockProject, images: [] }
    render(<ProjectCard project={projectWithoutImage} />)
    const titles = screen.getAllByText('Test Project')
    expect(titles.length).toBeGreaterThan(0)
  })

  it('does not render case study link when not provided', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.queryByRole('link', { name: /case study/i })).not.toBeInTheDocument()
  })

  it('renders case study link when provided', () => {
    const projectWithCaseStudy = {
      ...mockProject,
      links: { ...mockProject.links, case_study: 'https://example.com/case-study' },
    }
    render(<ProjectCard project={projectWithCaseStudy} />)
    const caseStudyLink = screen.getByRole('link', { name: /read case study/i })
    expect(caseStudyLink).toHaveAttribute('href', 'https://example.com/case-study')
  })
})
