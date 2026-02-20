import { useState } from 'react'
import TagInput from './TagInput'
import './ProjectsSection.css'

const ProjectsSection = ({ projects, addProject, updateProject, updateProjectTechStack, removeProject }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>Projects</h2>
        <button className="btn-add" onClick={addProject}>+ Add Project</button>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="project-entry">
          <div 
            className="project-header"
            onClick={() => toggleExpand(index)}
          >
            <span className="project-title-display">
              {project.title || `Project ${index + 1}`}
            </span>
            <div className="project-header-actions">
              <button
                type="button"
                className="btn-expand"
                aria-label={expandedIndex === index ? 'Collapse' : 'Expand'}
              >
                {expandedIndex === index ? '▼' : '▶'}
              </button>
            </div>
          </div>

          {expandedIndex === index && (
            <div className="project-content">
              <button 
                type="button"
                className="btn-remove-project"
                onClick={() => removeProject(index)}
              >
                🗑️ Delete Project
              </button>

              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => updateProject(index, 'title', e.target.value)}
              />

              <div className="textarea-wrapper">
                <textarea
                  placeholder="Project description (max 200 characters)..."
                  rows="3"
                  maxLength={200}
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                />
                <div className="char-counter">
                  {project.description.length}/200
                </div>
              </div>

              <div className="form-field">
                <label>Tech Stack</label>
                <TagInput
                  tags={project.techStack || []}
                  onTagsChange={(tags) => updateProjectTechStack(index, tags)}
                  placeholder="Type technology and press Enter"
                />
              </div>

              <input
                type="url"
                placeholder="Live URL (optional)"
                value={project.liveUrl}
                onChange={(e) => updateProject(index, 'liveUrl', e.target.value)}
              />

              <input
                type="url"
                placeholder="GitHub URL (optional)"
                value={project.githubUrl}
                onChange={(e) => updateProject(index, 'githubUrl', e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default ProjectsSection
