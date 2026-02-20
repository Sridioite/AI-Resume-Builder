import { useTemplate, colors } from '../context/TemplateContext'
import './TemplatePicker.css'

const TemplatePicker = () => {
  const { selectedTemplate, setSelectedTemplate, selectedColor, setSelectedColor } = useTemplate()

  const templates = [
    { 
      id: 'classic', 
      name: 'Classic',
      description: 'Traditional single-column'
    },
    { 
      id: 'modern', 
      name: 'Modern',
      description: 'Two-column with sidebar'
    },
    { 
      id: 'minimal', 
      name: 'Minimal',
      description: 'Clean and spacious'
    }
  ]

  const colorOptions = [
    { id: 'teal', name: 'Teal', value: colors.teal },
    { id: 'navy', name: 'Navy', value: colors.navy },
    { id: 'burgundy', name: 'Burgundy', value: colors.burgundy },
    { id: 'forest', name: 'Forest', value: colors.forest },
    { id: 'charcoal', name: 'Charcoal', value: colors.charcoal }
  ]

  return (
    <div className="template-picker">
      <div className="picker-section">
        <h4 className="picker-title">Template</h4>
        <div className="template-thumbnails">
          {templates.map(template => (
            <button
              key={template.id}
              className={`template-thumbnail ${selectedTemplate === template.id ? 'active' : ''}`}
              onClick={() => setSelectedTemplate(template.id)}
              aria-label={`Select ${template.name} template`}
            >
              {selectedTemplate === template.id && (
                <div className="checkmark">✓</div>
              )}
              <div className={`thumbnail-preview ${template.id}`}>
                {template.id === 'classic' && (
                  <div className="preview-classic">
                    <div className="preview-line header"></div>
                    <div className="preview-line"></div>
                    <div className="preview-line"></div>
                    <div className="preview-divider"></div>
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>
                )}
                {template.id === 'modern' && (
                  <div className="preview-modern">
                    <div className="preview-sidebar"></div>
                    <div className="preview-main">
                      <div className="preview-line header"></div>
                      <div className="preview-line"></div>
                      <div className="preview-line"></div>
                      <div className="preview-line short"></div>
                    </div>
                  </div>
                )}
                {template.id === 'minimal' && (
                  <div className="preview-minimal">
                    <div className="preview-line header"></div>
                    <div className="preview-line"></div>
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                    <div className="preview-spacer"></div>
                    <div className="preview-line"></div>
                  </div>
                )}
              </div>
              <div className="template-info">
                <div className="template-name">{template.name}</div>
                <div className="template-description">{template.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="picker-section">
        <h4 className="picker-title">Color Theme</h4>
        <div className="color-picker">
          {colorOptions.map(color => (
            <button
              key={color.id}
              className={`color-option ${selectedColor === color.id ? 'active' : ''}`}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Select ${color.name} color`}
              title={color.name}
            >
              <div 
                className="color-circle"
                style={{ backgroundColor: color.value }}
              >
                {selectedColor === color.id && (
                  <span className="color-checkmark">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TemplatePicker
