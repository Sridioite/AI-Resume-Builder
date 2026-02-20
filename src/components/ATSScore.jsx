import { useMemo } from 'react'
import { calculateATSScore } from '../utils/atsScoring'
import './ATSScore.css'

const ATSScore = ({ resumeData }) => {
  const { score, suggestions } = useMemo(() => 
    calculateATSScore(resumeData), 
    [resumeData]
  )

  const getScoreColor = () => {
    if (score >= 80) return '#2e7d32'
    if (score >= 60) return '#f57c00'
    return '#c62828'
  }

  const getScoreLabel = () => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Fair'
    return 'Needs Work'
  }

  return (
    <div className="ats-score-container">
      <div className="ats-score-header">
        <h3>ATS Readiness Score</h3>
      </div>

      <div className="score-display">
        <div className="score-circle" style={{ borderColor: getScoreColor() }}>
          <span className="score-number" style={{ color: getScoreColor() }}>
            {score}
          </span>
          <span className="score-max">/100</span>
        </div>
        <div className="score-label" style={{ color: getScoreColor() }}>
          {getScoreLabel()}
        </div>
      </div>

      <div className="score-bar-container">
        <div 
          className="score-bar-fill" 
          style={{ 
            width: `${score}%`,
            backgroundColor: getScoreColor()
          }}
        />
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions-container">
          <h4>Suggestions to Improve</h4>
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ATSScore
