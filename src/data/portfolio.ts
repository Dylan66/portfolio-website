import { PortfolioData } from '@/types'

// Placeholder portfolio data - will be populated with actual content later
export const portfolioData: PortfolioData = {
  personal: {
    name: "Dylan Wanganga",
    title: "Full Stack Developer",
    description: "Passionate about technology and building innovative web applications with Python, JavaScript, and modern frameworks.",
    email: "dylan.wanganga@example.com",
    location: "Nairobi, Kenya",
    avatar: {
      src: "/images/avatar.jpg",
      alt: "Profile picture",
      width: 400,
      height: 400,
      priority: true,
    },
    social: [
      {
        platform: 'github',
        url: 'https://github.com/Dylan66',
        username: 'Dylan66'
      },
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/dylan-wanganga/',
        username: 'dylan-wanganga'
      },
      {
        platform: 'email',
        url: 'mailto:dylan.wanganga@example.com'
      }
    ]
  },
  projects: [
    {
      id: '1',
      title: 'Project One',
      description: 'A modern web application built with React and Node.js',
      technologies: [
        { name: 'React', category: 'frontend', proficiency: 5 },
        { name: 'Node.js', category: 'backend', proficiency: 4 },
        { name: 'TypeScript', category: 'language', proficiency: 5 }
      ],
      images: [
        {
          src: '/images/projects/project1.jpg',
          alt: 'Project One Screenshot',
          width: 800,
          height: 600
        }
      ],
      links: {
        demo: 'https://project1-demo.com',
        github: 'https://github.com/yourusername/project1'
      },
      featured: true,
      category: 'web-app',
      date: '2024-01-01',
      status: 'completed'
    }
  ],
  skills: [
    {
      id: 'frontend',
      name: 'Frontend Development',
      description: 'Modern frontend technologies and frameworks',
      technologies: [
        { name: 'React', category: 'framework', proficiency: 5 },
        { name: 'Next.js', category: 'framework', proficiency: 4 },
        { name: 'TypeScript', category: 'language', proficiency: 5 },
        { name: 'CSS3', category: 'language', proficiency: 4 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      description: 'Server-side technologies and databases',
      technologies: [
        { name: 'Node.js', category: 'backend', proficiency: 4 },
        { name: 'Python', category: 'language', proficiency: 3 },
        { name: 'PostgreSQL', category: 'database', proficiency: 4 }
      ]
    }
  ],
  experience: [
    {
      id: '1',
      company: 'Tech Company',
      position: 'Full Stack Developer',
      location: 'Remote',
      startDate: '2023-01-01',
      description: 'Developed and maintained web applications using modern technologies.',
      achievements: [
        'Built responsive web applications',
        'Improved application performance by 40%',
        'Collaborated with cross-functional teams'
      ],
      technologies: [
        { name: 'React', category: 'frontend', proficiency: 5 },
        { name: 'Node.js', category: 'backend', proficiency: 4 }
      ],
      type: 'full-time'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University Name',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'City, State',
      startDate: '2019-09-01',
      endDate: '2023-05-01',
      gpa: 3.8
    }
  ],
  contact: {
    email: 'your.email@example.com',
    location: 'Your Location',
    availability: 'available',
    preferred_contact: 'email',
    timezone: 'UTC-5'
  }
}