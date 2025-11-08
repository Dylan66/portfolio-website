import React from 'react'

interface SectionSkeletonProps {
  background?: 'primary' | 'secondary'
}

export const SectionSkeleton: React.FC<SectionSkeletonProps> = ({ 
  background = 'primary' 
}) => {
  const bgClass = background === 'primary' 
    ? 'bg-neutral-800' 
    : 'bg-neutral-900'

  return (
    <div className={`min-h-screen flex items-center justify-center ${bgClass}`}>
      <div className="max-w-7xl w-full px-4 py-16 space-y-8 animate-pulse">
        {/* Title skeleton */}
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 bg-neutral-700 rounded-lg w-64"></div>
          <div className="h-6 bg-neutral-700 rounded-lg w-96"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-neutral-700/50 rounded-lg p-6 space-y-4">
              <div className="h-48 bg-neutral-600 rounded-lg"></div>
              <div className="h-4 bg-neutral-600 rounded w-3/4"></div>
              <div className="h-4 bg-neutral-600 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
