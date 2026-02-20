import { createContext, useContext, useState, useEffect } from 'react'

const TemplateContext = createContext()

export const useTemplate = () => {
  const context = useContext(TemplateContext)
  if (!context) {
    throw new Error('useTemplate must be used within TemplateProvider')
  }
  return context
}

export const colors = {
  teal: 'hsl(168, 60%, 40%)',
  navy: 'hsl(220, 60%, 35%)',
  burgundy: 'hsl(345, 60%, 35%)',
  forest: 'hsl(150, 50%, 30%)',
  charcoal: 'hsl(0, 0%, 25%)'
}

export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    const saved = localStorage.getItem('selectedTemplate')
    return saved || 'classic'
  })

  const [selectedColor, setSelectedColor] = useState(() => {
    const saved = localStorage.getItem('selectedColor')
    return saved || 'teal'
  })

  useEffect(() => {
    localStorage.setItem('selectedTemplate', selectedTemplate)
  }, [selectedTemplate])

  useEffect(() => {
    localStorage.setItem('selectedColor', selectedColor)
    // Update CSS variable for dynamic color
    document.documentElement.style.setProperty('--resume-accent-color', colors[selectedColor])
  }, [selectedColor])

  return (
    <TemplateContext.Provider value={{ 
      selectedTemplate, 
      setSelectedTemplate,
      selectedColor,
      setSelectedColor,
      accentColor: colors[selectedColor]
    }}>
      {children}
    </TemplateContext.Provider>
  )
}
