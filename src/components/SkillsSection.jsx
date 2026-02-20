import { useState } from 'react'
import TagInput from './TagInput'
import './SkillsSection.css'

const SkillsSection = ({ skills, updateSkills, suggestSkills }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSuggestSkills = () => {
    setIsLoading(true)
    setTimeout(() => {
      suggestSkills()
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="form-section">
      <div className="section-header">
        <h2>Skills</h2>
        <button 
          className="btn-suggest" 
          onClick={handleSuggestSkills}
          disabled={isLoading}
        >
          {isLoading ? '⏳ Loading...' : '✨ Suggest Skills'}
        </button>
      </div>

      <div className="skill-category">
        <label className="skill-category-label">
          Technical Skills ({skills.technical.length})
        </label>
        <TagInput
          tags={skills.technical}
          onTagsChange={(tags) => updateSkills('technical', tags)}
          placeholder="Type a skill and press Enter"
        />
      </div>

      <div className="skill-category">
        <label className="skill-category-label">
          Soft Skills ({skills.soft.length})
        </label>
        <TagInput
          tags={skills.soft}
          onTagsChange={(tags) => updateSkills('soft', tags)}
          placeholder="Type a skill and press Enter"
        />
      </div>

      <div className="skill-category">
        <label className="skill-category-label">
          Tools & Technologies ({skills.tools.length})
        </label>
        <TagInput
          tags={skills.tools}
          onTagsChange={(tags) => updateSkills('tools', tags)}
          placeholder="Type a skill and press Enter"
        />
      </div>
    </section>
  )
}

export default SkillsSection
