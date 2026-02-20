import { createContext, useContext, useState, useEffect } from 'react'

const ResumeContext = createContext()

export const useResume = () => {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider')
  }
  return context
}

const initialResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: ''
  },
  summary: '',
  education: [],
  experience: [],
  projects: [],
  skills: {
    technical: [],
    soft: [],
    tools: []
  },
  links: {
    github: '',
    linkedin: ''
  }
}

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeBuilderData')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        // Migrate old skills format to new format
        if (typeof parsed.skills === 'string') {
          const skillsArray = parsed.skills.split(',').map(s => s.trim()).filter(s => s)
          parsed.skills = {
            technical: skillsArray.slice(0, Math.ceil(skillsArray.length / 2)),
            soft: [],
            tools: skillsArray.slice(Math.ceil(skillsArray.length / 2))
          }
        }
        // Migrate old projects format to new format
        if (parsed.projects && parsed.projects.length > 0) {
          parsed.projects = parsed.projects.map(proj => ({
            title: proj.name || proj.title || '',
            description: proj.description || '',
            techStack: proj.tech ? proj.tech.split(',').map(t => t.trim()).filter(t => t) : (proj.techStack || []),
            liveUrl: proj.liveUrl || '',
            githubUrl: proj.githubUrl || ''
          }))
        }
        // Ensure skills object exists
        if (!parsed.skills || typeof parsed.skills !== 'object') {
          parsed.skills = { technical: [], soft: [], tools: [] }
        }
        return parsed
      } catch (e) {
        console.error('Error parsing saved data:', e)
        return initialResumeData
      }
    }
    return initialResumeData
  })

  // Auto-save to localStorage
  useEffect(() => {
    localStorage.setItem('resumeBuilderData', JSON.stringify(resumeData))
  }, [resumeData])

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }))
  }

  const updateSummary = (value) => {
    setResumeData(prev => ({ ...prev, summary: value }))
  }

  const updateSkills = (category, tags) => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: tags
      }
    }))
  }

  const suggestSkills = () => {
    setResumeData(prev => ({
      ...prev,
      skills: {
        technical: [...new Set([...prev.skills.technical, 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'GraphQL'])],
        soft: [...new Set([...prev.skills.soft, 'Team Leadership', 'Problem Solving'])],
        tools: [...new Set([...prev.skills.tools, 'Git', 'Docker', 'AWS'])]
      }
    }))
  }

  const updateLinks = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      links: {
        ...prev.links,
        [field]: value
      }
    }))
  }

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { school: '', degree: '', year: '', location: '' }]
    }))
  }

  const updateEducation = (index, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }))
  }

  const removeEducation = (index) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }))
  }

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', role: '', duration: '', description: '' }]
    }))
  }

  const updateExperience = (index, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }))
  }

  const removeExperience = (index) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }))
  }

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, { 
        title: '', 
        description: '', 
        techStack: [],
        liveUrl: '',
        githubUrl: ''
      }]
    }))
  }

  const updateProject = (index, field, value) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) => 
        i === index ? { ...proj, [field]: value } : proj
      )
    }))
  }

  const removeProject = (index) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }))
  }

  const updateProjectTechStack = (index, tags) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) => 
        i === index ? { ...proj, techStack: tags } : proj
      )
    }))
  }

  const loadSampleData = () => {
    setResumeData({
      personalInfo: {
        name: 'Alex Johnson',
        email: 'alex.johnson@email.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA'
      },
      summary: 'Full-stack software engineer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and continuous learning.',
      education: [
        {
          school: 'Stanford University',
          degree: 'B.S. Computer Science',
          year: '2015 - 2019',
          location: 'Stanford, CA'
        }
      ],
      experience: [
        {
          company: 'Tech Corp',
          role: 'Senior Software Engineer',
          duration: '2021 - Present',
          description: 'Led development of microservices architecture serving 10M+ users. Reduced API response time by 40% through optimization.'
        },
        {
          company: 'StartupXYZ',
          role: 'Software Engineer',
          duration: '2019 - 2021',
          description: 'Built and maintained React-based dashboard used by 50K+ customers. Implemented CI/CD pipeline reducing deployment time by 60%.'
        }
      ],
      projects: [
        {
          title: 'AI Resume Builder',
          description: 'Built a web app that helps users create ATS-optimized resumes with AI assistance',
          techStack: ['React', 'Node.js', 'OpenAI API'],
          liveUrl: 'https://resume-builder.example.com',
          githubUrl: 'https://github.com/user/resume-builder'
        },
        {
          title: 'Task Management System',
          description: 'Developed a collaborative task management platform with real-time updates',
          techStack: ['Vue.js', 'Firebase', 'WebSockets'],
          liveUrl: '',
          githubUrl: 'https://github.com/user/task-manager'
        }
      ],
      skills: {
        technical: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'],
        soft: ['Team Leadership', 'Problem Solving', 'Communication'],
        tools: ['Git', 'Docker', 'AWS', 'MongoDB']
      },
      links: {
        github: 'github.com/alexjohnson',
        linkedin: 'linkedin.com/in/alexjohnson'
      }
    })
  }

  return (
    <ResumeContext.Provider value={{
      resumeData,
      updatePersonalInfo,
      updateSummary,
      updateSkills,
      updateLinks,
      addEducation,
      updateEducation,
      removeEducation,
      addExperience,
      updateExperience,
      removeExperience,
      addProject,
      updateProject,
      removeProject,
      updateProjectTechStack,
      suggestSkills,
      loadSampleData
    }}>
      {children}
    </ResumeContext.Provider>
  )
}
