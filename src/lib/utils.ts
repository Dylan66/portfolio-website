import { type ClassValue, clsx } from 'clsx'

// Utility function for combining class names
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Format date utility
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Format date range utility
export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })

  if (!endDate) {
    return `${start} - Present`
  }

  const end = new Date(endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })

  return `${start} - ${end}`
}

// Debounce utility for search and filtering
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle utility for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Generate blur data URL for images (server-side compatible)
export function generateBlurDataURL(color: string = '#1e293b'): string {
  // Create a simple 10x10 SVG with the specified color for blur placeholder
  const svg = `
    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="${color}"/>
    </svg>
  `
  
  // Convert to base64 (works in both browser and Node.js)
  if (typeof window === 'undefined') {
    // Server-side (Node.js)
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
  } else {
    // Client-side (browser)
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }
}

// Get optimized image sizes for responsive images
export function getImageSizes(variant: 'hero' | 'project' | 'avatar' | 'thumbnail'): string {
  switch (variant) {
    case 'hero':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
    case 'project':
      return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
    case 'avatar':
      return '(max-width: 768px) 200px, 400px'
    case 'thumbnail':
      return '(max-width: 768px) 100px, 200px'
    default:
      return '100vw'
  }
}

// Determine if an image should be loaded with priority
export function shouldPrioritizeImage(section: string): boolean {
  // Only prioritize images in the hero section (above the fold)
  return section === 'hero'
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Get technology color based on category
export function getTechnologyColor(category: string): string {
  const colors: Record<string, string> = {
    frontend: 'var(--color-primary-500)',
    backend: 'var(--color-secondary-500)',
    database: 'var(--color-accent-amber)',
    tool: 'var(--color-neutral-400)',
    language: 'var(--color-accent-red)',
    framework: 'var(--color-primary-400)',
    cloud: 'var(--color-secondary-400)',
    design: 'var(--color-neutral-300)'
  }

  return colors[category] || 'var(--color-neutral-400)'
}

// Smooth scroll to element
export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  })
}

// Get current section based on scroll position
export function getCurrentSection(sections: string[]): string {
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i]
    }
  }

  return sections[0] || ''
}

// Format file size
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}