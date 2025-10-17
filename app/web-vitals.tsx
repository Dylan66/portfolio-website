'use client'

import { useReportWebVitals } from 'next/web-vitals'

/**
 * Web Vitals Reporter for monitoring Core Web Vitals
 * This component reports performance metrics in development and production
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', metric)
    }

    // In production, you can send metrics to an analytics endpoint
    // Example: sendToAnalytics(metric)
    
    // Core Web Vitals thresholds (for reference):
    // LCP (Largest Contentful Paint): < 2.5s (good), < 4s (needs improvement)
    // FID (First Input Delay): < 100ms (good), < 300ms (needs improvement)
    // CLS (Cumulative Layout Shift): < 0.1 (good), < 0.25 (needs improvement)
    // FCP (First Contentful Paint): < 1.8s (good), < 3s (needs improvement)
    // TTFB (Time to First Byte): < 800ms (good), < 1800ms (needs improvement)
    
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      LCP: { good: 2500, needsImprovement: 4000 },
      FID: { good: 100, needsImprovement: 300 },
      CLS: { good: 0.1, needsImprovement: 0.25 },
      FCP: { good: 1800, needsImprovement: 3000 },
      TTFB: { good: 800, needsImprovement: 1800 },
    }

    const threshold = thresholds[metric.name]
    if (threshold) {
      const rating = 
        metric.value <= threshold.good 
          ? 'good' 
          : metric.value <= threshold.needsImprovement 
          ? 'needs-improvement' 
          : 'poor'
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[${metric.name}] ${metric.value.toFixed(2)} - ${rating}`)
      }
    }
  })

  return null
}
