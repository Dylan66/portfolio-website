import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md'
}) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200 shadow-sm';
  
  const hoverClasses = hover 
    ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300' 
    : '';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div
      className={clsx(
        baseClasses,
        hoverClasses,
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
};