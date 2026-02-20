import { useResume } from '../../context/ResumeContext'
import Navigation from '../../components/Navigation'
import ResumePreview from '../../components/ResumePreview'
import './Builder.css'

const Builder = () => {
  const {
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
  } = useResume()

  return (
    <div className="builder-page">
      <Navigation />
      
      <div className="builder-container">
        {/* Left Column - Form */}
        <div className="builder-form">
          <div className="form-header">
            <h1>Build Your Resume</h1>
            <button className="btn-sample" onClick={loadSampleData}>
              Load Sample Data
            </button>
          </div>

          {/* Personal Info */}
          <section className="form-section">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Full Name"
                value={resumeData.personalInfo.name}
                onChange={(e) => updatePersonalInfo('name', e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={resumeData.personalInfo.email}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={resumeData.personalInfo.phone}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              />
              <input
                type="text"
                placeholder="Location"
                value={resumeData.personalInfo.location}
                onChange={(e) => updatePersonalInfo('location', e.target.value)}
              />
            </div>
          </section>

          {/* Summary */}
          <section className="form-section">
            <h2>Professional Summary</h2>
            <textarea
              placeholder="Write a brief summary about yourself..."
              rows="4"
              value={resumeData.summary}
              onChange={(e) => updateSummary(e.target.value)}
            />
          </section>

          {/* Education */}
          <section className="form-section">
            <div className="section-header">
              <h2>Education</h2>
              <button className="btn-add" onClick={addEducation}>+ Add</button>
            </div>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="entry-card">
                <button 
                  className="btn-remove"
                  onClick={() => removeEducation(index)}
                >
                  ×
                </button>
                <input
                  type="text"
                  placeholder="School Name"
                  value={edu.school}
                  onChange={(e) => updateEducation(index, 'school', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                />
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="Year (e.g., 2019-2023)"
                    value={edu.year}
                    onChange={(e) => updateEducation(index, 'year', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    value={edu.location}
                    onChange={(e) => updateEducation(index, 'location', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="form-section">
            <div className="section-header">
              <h2>Work Experience</h2>
              <button className="btn-add" onClick={addExperience}>+ Add</button>
            </div>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="entry-card">
                <button 
                  className="btn-remove"
                  onClick={() => removeExperience(index)}
                >
                  ×
                </button>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={exp.company}
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  value={exp.role}
                  onChange={(e) => updateExperience(index, 'role', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., 2021 - Present)"
                  value={exp.duration}
                  onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                />
                <textarea
                  placeholder="Description of your role and achievements..."
                  rows="3"
                  value={exp.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                />
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="form-section">
            <div className="section-header">
              <h2>Projects</h2>
              <button className="btn-add" onClick={addProject}>+ Add</button>
            </div>
            {resumeData.projects.map((proj, index) => (
              <div key={index} className="entry-card">
                <button 
                  className="btn-remove"
                  onClick={() => removeProject(index)}
                >
                  ×
                </button>
                <input
                  type="text"
                  placeholder="Project Name"
                  value={proj.name}
                  onChange={(e) => updateProject(index, 'name', e.target.value)}
                />
                <textarea
                  placeholder="Project description..."
                  rows="2"
                  value={proj.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Technologies used"
                  value={proj.tech}
                  onChange={(e) => updateProject(index, 'tech', e.target.value)}
                />
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="form-section">
            <h2>Skills</h2>
            <input
              type="text"
              placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
              value={resumeData.skills}
              onChange={(e) => updateSkills(e.target.value)}
            />
          </section>

          {/* Links */}
          <section className="form-section">
            <h2>Links</h2>
            <input
              type="text"
              placeholder="GitHub URL"
              value={resumeData.links.github}
              onChange={(e) => updateLinks('github', e.target.value)}
            />
            <input
              type="text"
              placeholder="LinkedIn URL"
              value={resumeData.links.linkedin}
              onChange={(e) => updateLinks('linkedin', e.target.value)}
            />
          </section>
        </div>

        {/* Right Column - Live Preview */}
        <div className="builder-preview">
          <div className="preview-header">
            <h3>Live Preview</h3>
          </div>
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  )
}

export default Builder
