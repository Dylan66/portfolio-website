'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useNavigation } from '@/hooks/useNavigation'
import MobileMenu from './MobileMenu'

interface NavigationProps {
  variant?: 'transparent' | 'solid'
  className?: string
}

interface NavItem {
  id: string
  label: string
  href: string
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'blog', label: 'Blog', href: 'https://syntaxnsoul.hashnode.dev/' },
]

export default function Navigation({ variant = 'transparent', className = '' }: NavigationProps) {
  const { activeSection, isScrolled, scrollToSection } = useNavigation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't prevent default for external links
    if (!href.startsWith('#')) {
      return
    }

    e.preventDefault()
    const targetId = href.substring(1)
    scrollToSection(targetId)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${variant === 'solid' || isScrolled
      ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg'
      : 'bg-transparent'
    }
    ${className}
  `.trim()

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md px-2 py-1"
              aria-label="Go to homepage"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ id, label, href }) => {
                const isActive = activeSection === id
                const isExternal = !href.startsWith('#')

                return (
                  <Link
                    key={id}
                    href={href}
                    onClick={(e) => handleSmoothScroll(e, href)}
                    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                    className={`
                      px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900
                      ${isActive
                        ? 'text-blue-400 bg-blue-500/10 border-b-2 border-blue-400'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }
                    `.trim()}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {/* Hamburger/Close icon with animation */}
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
    </nav>
  )
}