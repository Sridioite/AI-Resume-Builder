import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import './Proof.css'

const Proof = () => {
  const navigate = useNavigate()
  const { isStepComplete, proofData, updateProofData } = useProgress()
  
  const [finalSubmission, setFinalSubmission] = useState(() => {
    const saved = localStorage.getItem('rb_final_submission')
    return saved ? JSON.parse(saved) : {
      lovableLink: '',
      githubLink: '',
      deployLink: ''
    }
  })

  const [checklist, setChecklist] = useState(() => {
    const saved = localStorage.getItem('rb_test_checklist')
    return saved ? JSON.parse(saved) : {
      localStorage: false,
      livePreview: false,
      templateSwitching: false,
      colorPersistence: false,
      atsCalculation: false,
      liveScoreUpdate: false,
      exportButtons: false,
      emptyStates: false,
      mobileResponsive: false,
      noConsoleErrors: false
    }
  })

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

  const checklistItems = [
    { key: 'localStorage', label: 'All form sections save to localStorage' },
    { key: 'livePreview', label: 'Live preview updates in real-time' },
    { key: 'templateSwitching', label: 'Template switching preserves data' },
    { key: 'colorPersistence', label: 'Color theme persists after refresh' },
    { key: 'atsCalculation', label: 'ATS score calculates correctly' },
    { key: 'liveScoreUpdate', label: 'Score updates live on edit' },
    { key: 'exportButtons', label: 'Export buttons work (copy/download)' },
    { key: 'emptyStates', label: 'Empty states handled gracefully' },
    { key: 'mobileResponsive', label: 'Mobile responsive layout works' },
    { key: 'noConsoleErrors', label: 'No console errors on any page' }
  ]

  // Save to localStorage whenever finalSubmission changes
  useEffect(() => {
    localStorage.setItem('rb_final_submission', JSON.stringify(finalSubmission))
  }, [finalSubmission])

  // Save checklist to localStorage
  useEffect(() => {
    localStorage.setItem('rb_test_checklist', JSON.stringify(checklist))
  }, [checklist])

  const allStepsComplete = steps.every(step => isStepComplete(step.number))
  const allChecklistPassed = Object.values(checklist).every(val => val === true)
  const allLinksProvided = finalSubmission.lovableLink && 
                          finalSubmission.githubLink && 
                          finalSubmission.deployLink

  const isShipped = allStepsComplete && allChecklistPassed && allLinksProvided

  const validateURL = (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const handleUpdateLink = (field, value) => {
    setFinalSubmission(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleToggleChecklist = (key) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleCopySubmission = () => {
    const submission = `------------------------------------------
AI Resume Builder — Final Submission

Lovable Project: ${finalSubmission.lovableLink || 'Not provided'}
GitHub Repository: ${finalSubmission.githubLink || 'Not provided'}
Live Deployment: ${finalSubmission.deployLink || 'Not provided'}

Core Capabilities:
- Structured resume builder
- Deterministic ATS scoring
- Template switching
- PDF export with clean formatting
- Persistence + validation checklist
------------------------------------------`

    navigator.clipboard.writeText(submission)
    alert('Final submission copied to clipboard!')
  }

  const completedSteps = steps.filter(step => isStepComplete(step.number)).length
  const passedTests = Object.values(checklist).filter(val => val === true).length

  return (
    <div className="proof-page">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">AI Resume Builder</div>
        <div className="top-bar-center">Project 3 — Proof of Completion</div>
        <div className="top-bar-right">
          <span className={`status-badge ${isShipped ? 'shipped' : 'in-progress'}`}>
            {isShipped ? '✓ Shipped' : 'In Progress'}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="proof-content">
        <div className="proof-header">
          <h1>Proof of Completion</h1>
          <p>Complete all requirements to mark this project as shipped</p>
        </div>

        {/* Shipped Confirmation */}
        {isShipped && (
          <div className="shipped-confirmation">
            <div className="shipped-icon">✓</div>
            <h2>Project 3 Shipped Successfully.</h2>
            <p>All requirements met. Your submission is ready.</p>
          </div>
        )}

        {/* Step Completion Overview */}
        <div className="completion-section">
          <div className="section-header">
            <h2>A) Step Completion Overview</h2>
            <span className="progress-badge">{completedSteps}/8 Complete</span>
          </div>
          <div className="steps-grid">
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

        {/* Test Checklist */}
        <div className="completion-section">
          <div className="section-header">
            <h2>Testing Checklist</h2>
            <span className="progress-badge">{passedTests}/10 Passed</span>
          </div>
          <div className="checklist-container">
            {checklistItems.map(item => (
              <label key={item.key} className="checklist-item">
                <input
                  type="checkbox"
                  checked={checklist[item.key]}
                  onChange={() => handleToggleChecklist(item.key)}
                />
                <span className="checklist-label">{item.label}</span>
                <span className="checklist-status">
                  {checklist[item.key] ? '✓' : '○'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Artifact Collection */}
        <div className="completion-section">
          <div className="section-header">
            <h2>B) Artifact Collection</h2>
            <span className="required-badge">Required to mark Shipped</span>
          </div>
          <div className="links-form">
            <div className="form-group">
              <label>
                Lovable Project Link
                {finalSubmission.lovableLink && validateURL(finalSubmission.lovableLink) && (
                  <span className="validation-check">✓</span>
                )}
              </label>
              <input
                type="url"
                placeholder="https://lovable.dev/projects/..."
                value={finalSubmission.lovableLink}
                onChange={(e) => handleUpdateLink('lovableLink', e.target.value)}
                className={finalSubmission.lovableLink && !validateURL(finalSubmission.lovableLink) ? 'invalid' : ''}
              />
              {finalSubmission.lovableLink && !validateURL(finalSubmission.lovableLink) && (
                <span className="validation-error">Invalid URL format</span>
              )}
            </div>

            <div className="form-group">
              <label>
                GitHub Repository Link
                {finalSubmission.githubLink && validateURL(finalSubmission.githubLink) && (
                  <span className="validation-check">✓</span>
                )}
              </label>
              <input
                type="url"
                placeholder="https://github.com/username/repo"
                value={finalSubmission.githubLink}
                onChange={(e) => handleUpdateLink('githubLink', e.target.value)}
                className={finalSubmission.githubLink && !validateURL(finalSubmission.githubLink) ? 'invalid' : ''}
              />
              {finalSubmission.githubLink && !validateURL(finalSubmission.githubLink) && (
                <span className="validation-error">Invalid URL format</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Deployed URL
                {finalSubmission.deployLink && validateURL(finalSubmission.deployLink) && (
                  <span className="validation-check">✓</span>
                )}
              </label>
              <input
                type="url"
                placeholder="https://your-app.vercel.app"
                value={finalSubmission.deployLink}
                onChange={(e) => handleUpdateLink('deployLink', e.target.value)}
                className={finalSubmission.deployLink && !validateURL(finalSubmission.deployLink) ? 'invalid' : ''}
              />
              {finalSubmission.deployLink && !validateURL(finalSubmission.deployLink) && (
                <span className="validation-error">Invalid URL format</span>
              )}
            </div>
          </div>
        </div>

        {/* Requirements Summary */}
        <div className="requirements-summary">
          <h3>Shipping Requirements:</h3>
          <ul>
            <li className={allStepsComplete ? 'met' : 'unmet'}>
              {allStepsComplete ? '✓' : '○'} All 8 steps marked completed
            </li>
            <li className={allChecklistPassed ? 'met' : 'unmet'}>
              {allChecklistPassed ? '✓' : '○'} All 10 checklist tests passed
            </li>
            <li className={allLinksProvided ? 'met' : 'unmet'}>
              {allLinksProvided ? '✓' : '○'} All 3 proof links provided
            </li>
          </ul>
        </div>

        {/* Final Submission */}
        <div className="submission-section">
          <button
            className={`btn-copy-submission ${!isShipped ? 'disabled' : ''}`}
            onClick={handleCopySubmission}
            disabled={!isShipped}
          >
            📋 Copy Final Submission
          </button>
          {!isShipped && (
            <p className="submission-hint">
              Complete all requirements above to enable submission
            </p>
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
