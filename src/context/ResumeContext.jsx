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
  skills: '',
  links: {
    github: '',
    linkedin: ''
  }
}

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(() => {
    const saved = localStorage.getItem('resumeBuilderData')
    return saved ? JSON.parse(saved) : initialResumeData
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

  const updateSkills = (value) => {
    setResumeData(prev => ({ ...prev, skills: value }))
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
      projects: [...prev.projects, { name: '', description: '', tech: '' }]
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
          name: 'AI Resume Builder',
          description: 'Built a web app that helps users create ATS-optimized resumes with AI assistance',
          tech: 'React, Node.js, OpenAI API'
        },
        {
          name: 'Task Management System',
          description: 'Developed a collaborative task management platform with real-time updates',
          tech: 'Vue.js, Firebase, WebSockets'
        }
      ],
      skills: 'JavaScript, TypeScript, React, Node.js, Python, SQL, MongoDB, AWS, Docker, Git',
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
      loadSampleData
    }}>
      {children}
    </ResumeContext.Provider>
  )
}
