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

// Generate blur data URL for images
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''
  
  // Create a simple gradient blur placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#1e293b')
  gradient.addColorStop(1, '#334155')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  
  return canvas.toDataURL()
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