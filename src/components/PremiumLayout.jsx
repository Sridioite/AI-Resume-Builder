import { useNavigate } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import './PremiumLayout.css'

const PremiumLayout = ({ 
  stepNumber, 
  stepTitle, 
  contextHeader, 
  children, 
  buildPanelContent,
  nextRoute 
}) => {
  const navigate = useNavigate()
  const { isStepComplete, canAccessStep } = useProgress()
  
  const currentStepComplete = isStepComplete(stepNumber)
  const canGoNext = currentStepComplete && nextRoute

  const handleNext = () => {
    if (canGoNext) {
      navigate(nextRoute)
    }
  }

  const getStatusBadge = () => {
    if (currentStepComplete) {
      return <span className="status-badge complete">✓ Complete</span>
    }
    return <span className="status-badge pending">In Progress</span>
  }

  return (
    <div className="premium-layout">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">AI Resume Builder</div>
        <div className="top-bar-center">Project 3 — Step {stepNumber} of 8</div>
        <div className="top-bar-right">{getStatusBadge()}</div>
      </div>

      {/* Context Header */}
      <div className="context-header">
        <h1>{stepTitle}</h1>
        <p>{contextHeader}</p>
      </div>

      {/* Main Content Area */}
      <div className="content-container">
        {/* Main Workspace (70%) */}
        <div className="main-workspace">
          {children}
        </div>

        {/* Build Panel (30%) */}
        <div className="build-panel">
          {buildPanelContent}
        </div>
      </div>

      {/* Proof Footer */}
      <div className="proof-footer">
        <button 
          className="btn-secondary"
          onClick={() => navigate('/rb/proof')}
        >
          View Proof Page
        </button>
        <button 
          className={`btn-primary ${!canGoNext ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={!canGoNext}
        >
          {canGoNext ? 'Next Step →' : 'Upload Artifact to Continue'}
        </button>
      </div>
    </div>
  )
}

export default PremiumLayout
