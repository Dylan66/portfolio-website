// Core Portfolio Data Types
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  avatar: ImageAsset;
  resume?: string;
  social: SocialLink[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'website' | 'email';
  url: string;
  username?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: Technology[];
  images: ImageAsset[];
  links: ProjectLinks;
  featured: boolean;
  category: ProjectCategory;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
  case_study?: string;
  documentation?: string;
}

export type ProjectCategory = 
  | 'web-app' 
  | 'mobile-app' 
  | 'desktop-app' 
  | 'library' 
  | 'tool' 
  | 'design' 
  | 'other';

export interface Technology {
  name: string;
  category: TechnologyCategory;
  proficiency: number; // 1-5 scale
  icon?: string;
  color?: string;
}

export type TechnologyCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'tool' 
  | 'language' 
  | 'framework' 
  | 'cloud' 
  | 'design';

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
  technologies: Technology[];
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined means current
  description: string;
  achievements: string[];
  technologies: Technology[];
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: number;
  achievements?: string[];
  relevant_courses?: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability: 'available' | 'busy' | 'not-available';
  preferred_contact: 'email' | 'phone' | 'linkedin';
  timezone: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

// Component Props Types
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  variant: 'grid' | 'list';
  showDescription?: boolean;
  className?: string;
}

export interface SkillsProps {
  skills: SkillCategory[];
  displayMode: 'grid' | 'chart';
  animationEnabled: boolean;
  filterable?: boolean;
}

export interface NavigationProps {
  variant: 'transparent' | 'solid';
  activeSection: string;
  onSectionChange: (section: string) => void;
  className?: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButtons: CTAButton[];
  backgroundAnimation: boolean;
  personalInfo: PersonalInfo;
}

export interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant: ButtonProps['variant'];
  icon?: React.ReactNode;
}

// State Management Types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  retry?: () => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Portfolio Data Structure
export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  contact: ContactInfo;
}

// Utility Types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  reducedMotion?: boolean;
}

// Theme Types
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
  fonts: {
    primary: string;
    mono: string;
  };
  spacing: Record<string, string>;
  breakpoints: Record<Breakpoint, string>;
}