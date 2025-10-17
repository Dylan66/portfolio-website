import React from 'react';
import { clsx } from 'clsx';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'primary' | 'secondary' | 'dark';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  padding = 'lg',
  background = 'primary',
  containerSize = 'lg'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20',
    xl: 'py-20 sm:py-24 md:py-32'
  };

  const backgroundClasses = {
    primary: 'bg-neutral-900',
    secondary: 'bg-neutral-800',
    dark: 'bg-neutral-950'
  };

  return (
    <section
      id={id}
      className={clsx(
        paddingClasses[padding],
        backgroundClasses[background],
        'text-neutral-100',
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};