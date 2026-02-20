import { useTemplate } from '../context/TemplateContext'
import './ResumePreview.css'

const ResumePreview = ({ data }) => {
  const { selectedTemplate } = useTemplate()
  // Check if resume has any content
  const hasContent = data.personalInfo.name || 
                     data.summary || 
                     data.experience.length > 0 || 
                     data.projects.length > 0 || 
                     data.education.length > 0 || 
                     data.skills

  return (
    <div className="resume-preview">
      <div className={`resume-content template-${selectedTemplate}`}>
        {/* Header */}
        <div className="resume-header">
          <h1 className="resume-name">{data.personalInfo.name || 'Your Name'}</h1>
          {(data.personalInfo.email || data.personalInfo.phone || data.personalInfo.location) && (
            <div className="resume-contact">
              {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
              {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
              {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
            </div>
          )}
          {(data.links.github || data.links.linkedin) && (
            <div className="resume-links">
              {data.links.github && <span>{data.links.github}</span>}
              {data.links.linkedin && <span>{data.links.linkedin}</span>}
            </div>
          )}
        </div>

        {/* Summary */}
        {data.summary && (
          <div className="resume-section">
            <h2 className="resume-section-title">Summary</h2>
            <p className="resume-summary">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="resume-entry">
                <div className="entry-header">
                  <div>
                    <h3 className="entry-title">{exp.role || 'Job Title'}</h3>
                    <div className="entry-subtitle">{exp.company || 'Company Name'}</div>
                  </div>
                  <div className="entry-date">{exp.duration || 'Duration'}</div>
                </div>
                {exp.description && <p className="entry-description">{exp.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Projects</h2>
            {data.projects.map((proj, index) => (
              <div key={index} className="resume-entry project-card">
                <h3 className="entry-title">{proj.title || 'Project'}</h3>
                {proj.description && <p className="entry-description">{proj.description}</p>}
                {proj.techStack && proj.techStack.length > 0 && (
                  <div className="tech-stack">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                )}
                {(proj.liveUrl || proj.githubUrl) && (
                  <div className="project-links">
                    {proj.liveUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        🔗 Live Demo
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        💻 GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="resume-entry">
                <div className="entry-header">
                  <div>
                    <h3 className="entry-title">{edu.school || 'School Name'}</h3>
                    <div className="entry-subtitle">{edu.degree || 'Degree'}</div>
                  </div>
                  <div className="entry-date">
                    {edu.year && <span>{edu.year}</span>}
                    {edu.location && <span className="entry-location">{edu.location}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.tools.length > 0) && (
          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            
            {data.skills.technical.length > 0 && (
              <div className="skill-group">
                <h4 className="skill-group-title">Technical Skills</h4>
                <div className="skills-pills">
                  {data.skills.technical.map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            
            {data.skills.soft.length > 0 && (
              <div className="skill-group">
                <h4 className="skill-group-title">Soft Skills</h4>
                <div className="skills-pills">
                  {data.skills.soft.map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            )}
            
            {data.skills.tools.length > 0 && (
              <div className="skill-group">
                <h4 className="skill-group-title">Tools & Technologies</h4>
                <div className="skills-pills">
                  {data.skills.tools.map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumePreview
