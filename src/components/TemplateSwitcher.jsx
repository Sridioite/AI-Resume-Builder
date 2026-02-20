import { useTemplate } from '../context/TemplateContext'
import './TemplateSwitcher.css'

const TemplateSwitcher = () => {
  const { selectedTemplate, setSelectedTemplate } = useTemplate()

  const templates = [
    { id: 'classic', name: 'Classic' },
    { id: 'modern', name: 'Modern' },
    { id: 'minimal', name: 'Minimal' }
  ]

  return (
    <div className="template-switcher">
      {templates.map(template => (
        <button
          key={template.id}
          className={`template-btn ${selectedTemplate === template.id ? 'active' : ''}`}
          onClick={() => setSelectedTemplate(template.id)}
        >
          {template.name}
        </button>
      ))}
    </div>
  )
}

export default TemplateSwitcher
