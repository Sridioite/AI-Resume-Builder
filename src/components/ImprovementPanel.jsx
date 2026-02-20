import { useMemo } from 'react'
import './ImprovementPanel.css'

const ImprovementPanel = ({ resumeData }) => {
  const improvements = useMemo(() => {
    const suggestions = []

    // Check projects
    if (resumeData.projects.length < 2) {
      suggestions.push({
        title: 'Add More Projects',
        description: 'Include at least 2 projects to showcase your skills and experience.'
      })
    }

    // Check for numbers in experience/projects
    const hasNumbers = [...resumeData.experience, ...resumeData.projects].some(item => {
      const text = item.description || ''
      return /\d+[%kKmM]?|\d+\.\d+|[0-9]+/.test(text)
    })
    if (!hasNumbers && (resumeData.experience.length > 0 || resumeData.projects.length > 0)) {
      suggestions.push({
        title: 'Add Measurable Impact',
        description: 'Include numbers, percentages, or metrics to quantify your achievements.'
      })
    }

    // Check summary length
    const summaryWords = resumeData.summary.trim().split(/\s+/).filter(w => w.length > 0).length
    if (summaryWords < 40 && summaryWords > 0) {
      suggestions.push({
        title: 'Expand Your Summary',
        description: 'Write a more detailed summary (40-120 words) to better showcase your background.'
      })
    } else if (summaryWords === 0) {
      suggestions.push({
        title: 'Add Professional Summary',
        description: 'Write a compelling summary that highlights your key strengths and experience.'
      })
    }

    // Check skills
    const skillsArray = resumeData.skills
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)
    if (skillsArray.length < 8) {
      suggestions.push({
        title: 'Expand Skills Section',
        description: 'List at least 8 relevant skills to improve your ATS compatibility.'
      })
    }

    // Check experience
    if (resumeData.experience.length === 0) {
      suggestions.push({
        title: 'Add Work Experience',
        description: 'Include internships, part-time work, or relevant project experience.'
      })
    }

    // Return top 3
    return suggestions.slice(0, 3)
  }, [resumeData])

  if (improvements.length === 0) {
    return null
  }

  return (
    <div className="improvement-panel">
      <h4>Top 3 Improvements</h4>
      <div className="improvements-list">
        {improvements.map((improvement, index) => (
          <div key={index} className="improvement-item">
            <div className="improvement-number">{index + 1}</div>
            <div className="improvement-content">
              <h5>{improvement.title}</h5>
              <p>{improvement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImprovementPanel
