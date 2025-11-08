'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseNavigationReturn {
  activeSection: string
  isScrolled: boolean
  scrollToSection: (sectionId: string) => void
}

export function useNavigation(): UseNavigationReturn {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle mount state to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
    // Set initial scroll state after mount
    setIsScrolled(window.scrollY > 50)
  }, [])

  // Handle scroll position for navbar background
  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted])

  // Intersection Observer for active section highlighting
  useEffect(() => {
    if (!isMounted) return

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          if (element.id) {
            setActiveSection(element.id)
          }
        }
      })
    }, observerOptions)

    // Observe all sections with IDs
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [isMounted])

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const targetElement = document.getElementById(sectionId)
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Account for fixed navbar height
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      // Update URL without triggering page reload
      window.history.pushState(null, '', `#${sectionId}`)
      setActiveSection(sectionId)
    }
  }, [])

  return {
    activeSection: isMounted ? activeSection : '',
    isScrolled: isMounted ? isScrolled : false,
    scrollToSection
  }
}