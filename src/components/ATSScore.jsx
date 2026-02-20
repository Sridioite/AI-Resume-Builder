import { useMemo } from 'react'
import { calculateATSScore } from '../utils/atsScoring'
import './ATSScore.css'

const ATSScore = ({ resumeData }) => {
  const atsResult = useMemo(() => 
    calculateATSScore(resumeData), 
    [resumeData]
  )

  const { score, rating, color, suggestions } = atsResult

  // Calculate circle progress
  const circumference = 2 * Math.PI * 45 // radius = 45
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="ats-score-container">
      <h3 className="ats-title">ATS Readiness Score</h3>
      
      <div className="score-display">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <svg className="score-circle" width="120" height="120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#e5e5e0"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              className="score-progress"
            />
          </svg>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <div className="score-number">{score}</div>
          </div>
        </div>
        <div className="score-text">
          <div className="score-rating" style={{ color }}>{rating}</div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="score-suggestions">
          <h4>Improve Your Score:</h4>
          <ul>
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
