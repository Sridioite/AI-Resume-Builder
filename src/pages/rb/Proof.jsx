import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import './Proof.css'

const Proof = () => {
  const navigate = useNavigate()
  const { isStepComplete, proofData, updateProofData } = useProgress()

  const steps = [
    { number: 1, name: 'Problem', route: '/rb/01-problem' },
    { number: 2, name: 'Market', route: '/rb/02-market' },
    { number: 3, name: 'Architecture', route: '/rb/03-architecture' },
    { number: 4, name: 'HLD', route: '/rb/04-hld' },
    { number: 5, name: 'LLD', route: '/rb/05-lld' },
    { number: 6, name: 'Build', route: '/rb/06-build' },
    { number: 7, name: 'Test', route: '/rb/07-test' },
    { number: 8, name: 'Ship', route: '/rb/08-ship' }
  ]

  const allStepsComplete = steps.every(step => isStepComplete(step.number))

  const handleCopySubmission = () => {
    const submission = `
AI Resume Builder - Project 3 Submission
========================================

Step Completion Status:
${steps.map(step => `${step.number}. ${step.name}: ${isStepComplete(step.number) ? '✓ Complete' : '✗ Incomplete'}`).join('\n')}

Project Links:
- Lovable Project: ${proofData.lovableLink || 'Not provided'}
- GitHub Repository: ${proofData.githubLink || 'Not provided'}
- Live Deployment: ${proofData.deployLink || 'Not provided'}

Completion: ${allStepsComplete ? 'ALL STEPS COMPLETE ✓' : 'INCOMPLETE'}
    `.trim()

    navigator.clipboard.writeText(submission)
    alert('Submission copied to clipboard!')
  }

  return (
    <div className="proof-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">AI Resume Builder</div>
        <div className="top-bar-center">Project 3 — Proof of Completion</div>
        <div className="top-bar-right">
          <span className={`status-badge ${allStepsComplete ? 'complete' : 'pending'}`}>
            {allStepsComplete ? '✓ All Complete' : 'In Progress'}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="proof-content">
        <div className="proof-header">
          <h1>Proof of Completion</h1>
          <p>Track your progress and submit your final project</p>
        </div>

        {/* Step Status Grid */}
        <div className="steps-grid">
          <h2>Step Completion Status</h2>
          <div className="steps-container">
            {steps.map(step => (
              <div 
                key={step.number}
                className={`step-card ${isStepComplete(step.number) ? 'complete' : 'incomplete'}`}
                onClick={() => navigate(step.route)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-name">{step.name}</div>
                <div className="step-status">
                  {isStepComplete(step.number) ? '✓' : '○'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="project-links">
          <h2>Project Links</h2>
          <div className="links-form">
            <div className="form-group">
              <label>Lovable Project Link</label>
              <input
                type="url"
                placeholder="https://lovable.dev/projects/..."
                value={proofData.lovableLink}
                onChange={(e) => updateProofData('lovableLink', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>GitHub Repository Link</label>
              <input
                type="url"
                placeholder="https://github.com/username/repo"
                value={proofData.githubLink}
                onChange={(e) => updateProofData('githubLink', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Live Deployment Link</label>
              <input
                type="url"
                placeholder="https://your-app.vercel.app"
                value={proofData.deployLink}
                onChange={(e) => updateProofData('deployLink', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submission */}
        <div className="submission-section">
          <h2>Final Submission</h2>
          {!allStepsComplete && (
            <div className="warning-box">
              ⚠️ Complete all 8 steps before submitting your final project.
            </div>
          )}
          
          <button
            className={`btn-copy-submission ${!allStepsComplete ? 'disabled' : ''}`}
            onClick={handleCopySubmission}
            disabled={!allStepsComplete}
          >
            📋 Copy Final Submission
          </button>

          {allStepsComplete && (
            <div className="success-box">
              🎉 Congratulations! You've completed all 8 steps. Copy your submission and share it with your instructor.
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="proof-footer">
          <button className="btn-back" onClick={() => navigate('/rb/01-problem')}>
            ← Back to Steps
          </button>
        </div>
      </div>
    </div>
  )
}

export default Proof
