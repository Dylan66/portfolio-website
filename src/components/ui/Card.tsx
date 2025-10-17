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
  const baseClasses = 'bg-neutral-800 rounded-lg border border-neutral-700 shadow-lg';
  
  const hoverClasses = hover 
    ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-neutral-600' 
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