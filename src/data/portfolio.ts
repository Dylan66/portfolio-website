import { PortfolioData } from '@/types'

// Placeholder portfolio data - will be populated with actual content later
export const portfolioData: PortfolioData = {
  personal: {
    name: "Dealan Wanganga",
    title: "Full Stack Developer",
    description: "Building modern web applications with Python and JavaScript. Focused on creating scalable solutions that make a real impact.",
    email: "dealan.wanganga@example.com",
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
        url: 'mailto:dealan.wanganga@example.com'
      }
    ]
  },
  projects: [
    {
      id: '1',
      title: 'Sahal Medical',
      description: 'A modern, responsive web app for a medical service provider. Built with React, Vite, and Tailwind CSS, it features online appointment booking, service browsing, and a clean, fast user experience.',
      technologies: [
        { name: 'React', category: 'frontend', proficiency: 5 },
        { name: 'Vite', category: 'tool', proficiency: 5 },
        { name: 'Tailwind CSS', category: 'framework', proficiency: 5 },
        { name: 'JavaScript', category: 'language', proficiency: 5 }
      ],
      images: [
        {
          src: '/images/projects/sahal-medical.jpg',
          alt: 'Sahal Medical web application screenshot',
          width: 1200,
          height: 800,
          placeholder: 'blur',
          blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=='
        }
      ],
      links: {
        demo: 'https://sahal-web-dylan66s-projects.vercel.app/#home',
        github: 'https://github.com/Dylan66/sahal_web'
      },
      featured: true,
      category: 'web-app',
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Period Relief Project',
      description: 'A web app to track and showcase the impact of menstrual product distribution. Features a metrics dashboard with real-time stats on individuals supported, products distributed, and active centers.',
      technologies: [
        { name: 'React', category: 'frontend', proficiency: 5 },
        { name: 'JavaScript', category: 'language', proficiency: 5 },
        { name: 'Dashboard', category: 'tool', proficiency: 4 },
        { name: 'Analytics', category: 'tool', proficiency: 4 }
      ],
      images: [
        {
          src: '/images/projects/period-relief.jpg',
          alt: 'Period Relief Project dashboard screenshot',
          width: 1200,
          height: 800,
          placeholder: 'blur',
          blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=='
        }
      ],
      links: {
        demo: 'https://pp-relief-platform-cg1m.vercel.app/',
        github: 'https://github.com/Dylan66/PP-Relief-platform'
      },
      featured: true,
      category: 'web-app',
      date: '2024-02-10',
      status: 'completed'
    },
    {
      id: '3',
      title: 'Chatify',
      description: 'Personal Chat Room or Workspace to share resources and hangout with friends. Built with React.js, Material-UI, and Firebase. Features realtime messaging, image sharing and message reactions.',
      technologies: [
        { name: 'React', category: 'frontend', proficiency: 5 },
        { name: 'Material-UI', category: 'framework', proficiency: 4 },
        { name: 'Firebase', category: 'backend', proficiency: 4 },
        { name: 'Real-time', category: 'tool', proficiency: 4 }
      ],
      images: [
        {
          src: '/images/projects/chatify.jpg',
          alt: 'Chatify chat application screenshot',
          width: 1200,
          height: 800,
          placeholder: 'blur',
          blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=='
        }
      ],
      links: {
        demo: 'https://chatify-49.web.app/',
        github: 'https://github.com/soumyajit4419/Chatify'
      },
      featured: false,
      category: 'web-app',
      date: '2023-11-20',
      status: 'completed'
    },
    {
      id: '4',
      title: 'Plant AI',
      description: 'Image classifier model using PyTorch framework with CNN and Transfer Learning. Successfully detects diseased and healthy leaves of 14 unique plants with 98% accuracy using Resnet34.',
      technologies: [
        { name: 'PyTorch', category: 'framework', proficiency: 5 },
        { name: 'CNN', category: 'tool', proficiency: 5 },
        { name: 'Transfer Learning', category: 'tool', proficiency: 4 },
        { name: 'Python', category: 'language', proficiency: 5 }
      ],
      images: [
        {
          src: '/images/projects/plant-ai.jpg',
          alt: 'Plant AI machine learning application screenshot',
          width: 1200,
          height: 800,
          placeholder: 'blur',
          blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=='
        }
      ],
      links: {
        demo: 'https://plant49-ai.herokuapp.com/',
        github: 'https://github.com/soumyajit4419/Plant_AI'
      },
      featured: true,
      category: 'tool',
      date: '2023-09-15',
      status: 'completed'
    },
    {
      id: '5',
      title: 'AI For Social Good',
      description: 'Using Natural Language Processing for the detection of suicide-related posts and user\'s suicide ideation in cyberspace, helping in suicide prevention through AI-powered analysis.',
      technologies: [
        { name: 'NLP', category: 'tool', proficiency: 5 },
        { name: 'Python', category: 'language', proficiency: 5 },
        { name: 'Machine Learning', category: 'tool', proficiency: 5 },
        { name: 'Social Impact', category: 'tool', proficiency: 4 }
      ],
      images: [
        {
          src: '/images/projects/ai-social-good.jpg',
          alt: 'AI For Social Good project screenshot',
          width: 1200,
          height: 800,
          placeholder: 'blur',
          blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=='
        }
      ],
      links: {
        github: 'https://github.com/soumyajit4419/AI_For_Social_Good'
      },
      featured: false,
      category: 'tool',
      date: '2023-08-10',
      status: 'completed'
    },
    {
      id: '6',
      title: 'Face Recognition & Emotion Detection',
      description: 'CNN classifier trained using FER-2013 dataset with Keras and TensorFlow. Successfully predicts various human emotions with 60.1% accuracy, using OpenCV for face detection.',
      technologies: [
        { name: 'CNN', category: 'tool', proficiency: 5 },
        { name: 'Keras', category: 'framework', proficiency: 4 },
        { name: 'TensorFlow', category: 'framework', proficiency: 4 },
        { name: 'OpenCV', category: 'tool', proficiency: 4 }
      ],
      images: [
        {
          src: '/images/projects/face-emotion.jpg',
          alt: 'Face Recognition and Emotion Detection screenshot',
          width: 1200,
          height: 800,
          placeholder: 'blur',
          blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=='
        }
      ],
      links: {
        github: 'https://github.com/soumyajit4419/Face_And_Emotion_Detection'
      },
      featured: false,
      category: 'tool',
      date: '2023-07-05',
      status: 'completed'
    }
  ],
  skills: [
    {
      id: 'devops',
      name: 'DevOps & Infrastructure',
      description: 'Containerization, orchestration, monitoring, and deployment tools',
      technologies: [
        { name: 'Docker', category: 'tool', proficiency: 5 },
        { name: 'Kubernetes', category: 'tool', proficiency: 5 },
        { name: 'Ansible', category: 'tool', proficiency: 5 },
        { name: 'Jenkins', category: 'tool', proficiency: 5 },
        { name: 'Grafana', category: 'tool', proficiency: 4 },
        { name: 'Prometheus', category: 'tool', proficiency: 4 },
        { name: 'AWS', category: 'cloud', proficiency: 5 },
        { name: 'Linux', category: 'tool', proficiency: 5 },
        { name: 'Git', category: 'tool', proficiency: 5 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      description: 'Server-side technologies and databases',
      technologies: [
        { name: 'Python', category: 'language', proficiency: 5 },
        { name: 'FastAPI', category: 'framework', proficiency: 5 },
        { name: 'Django', category: 'framework', proficiency: 4 },
        { name: 'Node.js', category: 'backend', proficiency: 4 },
        { name: 'PostgreSQL', category: 'database', proficiency: 5 },
        { name: 'MongoDB', category: 'database', proficiency: 4 }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      description: 'Modern frontend technologies and frameworks',
      technologies: [
        { name: 'React', category: 'framework', proficiency: 5 },
        { name: 'Next.js', category: 'framework', proficiency: 5 },
        { name: 'JavaScript', category: 'language', proficiency: 5 },
        { name: 'TypeScript', category: 'language', proficiency: 4 },
        { name: 'HTML/CSS', category: 'language', proficiency: 5 },
        { name: 'Tailwind CSS', category: 'framework', proficiency: 5 }
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