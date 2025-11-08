import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Projects from '../Projects'
import { portfolioData } from '@/data/portfolio'

// Mock Next.js Image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img {...props} />
    },
}))

describe('Projects - Filtering and Search', () => {
    it('renders all projects by default', () => {
        render(<Projects />)
        const projectCount = portfolioData.projects.length
        expect(screen.getByText(`Showing ${projectCount} of ${projectCount} projects`)).toBeInTheDocument()
    })

    it('filters projects by category when category button is clicked', async () => {
        render(<Projects />)

        const webAppButton = screen.getByRole('button', { name: /filter by web apps/i })
        fireEvent.click(webAppButton)

        await waitFor(() => {
            const webAppProjects = portfolioData.projects.filter(p => p.category === 'web-app')
            expect(screen.getByText(`Showing ${webAppProjects.length} of ${portfolioData.projects.length} projects`)).toBeInTheDocument()
        })
    })

    it('shows all projects when "All" category is selected', async () => {
        render(<Projects />)

        // First filter by a specific category
        const toolsButton = screen.getByRole('button', { name: /filter by tools/i })
        fireEvent.click(toolsButton)

        await waitFor(() => {
            const toolProjects = portfolioData.projects.filter(p => p.category === 'tool')
            expect(screen.getByText(`Showing ${toolProjects.length} of ${portfolioData.projects.length} projects`)).toBeInTheDocument()
        })

        // Then click "All" to show all projects again
        const allButton = screen.getByRole('button', { name: /filter by all/i })
        fireEvent.click(allButton)

        await waitFor(() => {
            expect(screen.getByText(`Showing ${portfolioData.projects.length} of ${portfolioData.projects.length} projects`)).toBeInTheDocument()
        })
    })

    it('filters projects by search query', async () => {
        render(<Projects />)

        const searchInput = screen.getByPlaceholderText(/search projects/i)
        fireEvent.change(searchInput, { target: { value: 'Sahal' } })

        await waitFor(() => {
            expect(screen.getByText('Sahal Medical')).toBeInTheDocument()
        }, { timeout: 500 })
    })

    it('searches projects by technology name', async () => {
        render(<Projects />)

        const searchInput = screen.getByPlaceholderText(/search projects/i)
        fireEvent.change(searchInput, { target: { value: 'React' } })

        await waitFor(() => {
            const reactProjects = portfolioData.projects.filter(p =>
                p.technologies.some(tech => tech.name.toLowerCase().includes('react'))
            )
            expect(screen.getByText(`Showing ${reactProjects.length} of ${portfolioData.projects.length} projects`)).toBeInTheDocument()
        }, { timeout: 500 })
    })

    it('shows no results message when search returns no matches', async () => {
        render(<Projects />)

        const searchInput = screen.getByPlaceholderText(/search projects/i)
        fireEvent.change(searchInput, { target: { value: 'nonexistentproject123' } })

        await waitFor(() => {
            expect(screen.getByText('No projects found')).toBeInTheDocument()
            expect(screen.getByText(/try adjusting your search/i)).toBeInTheDocument()
        }, { timeout: 500 })
    })

    it('combines category filter and search query', async () => {
        render(<Projects />)

        // Filter by web-app category
        const webAppButton = screen.getByRole('button', { name: /filter by web apps/i })
        fireEvent.click(webAppButton)

        // Then search within that category
        const searchInput = screen.getByPlaceholderText(/search projects/i)
        fireEvent.change(searchInput, { target: { value: 'Medical' } })

        await waitFor(() => {
            expect(screen.getByText('Sahal Medical')).toBeInTheDocument()
        }, { timeout: 500 })
    })

    it('highlights active category button', () => {
        render(<Projects />)

        const allButton = screen.getByRole('button', { name: /filter by all/i })
        expect(allButton).toHaveAttribute('aria-pressed', 'true')

        const webAppButton = screen.getByRole('button', { name: /filter by web apps/i })
        fireEvent.click(webAppButton)

        expect(webAppButton).toHaveAttribute('aria-pressed', 'true')
        expect(allButton).toHaveAttribute('aria-pressed', 'false')
    })

    it('renders search input with proper accessibility attributes', () => {
        render(<Projects />)

        const searchInput = screen.getByPlaceholderText(/search projects/i)
        expect(searchInput).toHaveAttribute('aria-label', 'Search projects')
    })

    it('renders category filter buttons with proper accessibility attributes', () => {
        render(<Projects />)

        const webAppButton = screen.getByRole('button', { name: /filter by web apps/i })
        expect(webAppButton).toHaveAttribute('aria-label', 'Filter by Web Apps')
        expect(webAppButton).toHaveAttribute('aria-pressed')
    })
})
