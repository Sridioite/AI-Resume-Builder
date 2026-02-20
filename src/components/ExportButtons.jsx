import { useState } from 'react'
import { generatePlainText } from '../utils/exportUtils'
import { validateResumeForExport } from '../utils/validationUtils'
import './ExportButtons.css'

const ExportButtons = ({ resumeData }) => {
  const [showWarning, setShowWarning] = useState(false)
  const [warningMessage, setWarningMessage] = useState('')
  const [pendingAction, setPendingAction] = useState(null)

  const handlePrint = () => {
    const validation = validateResumeForExport(resumeData)
    
    if (!validation.isValid) {
      // Show warning and store the action to execute later
      setWarningMessage(validation.message)
      setPendingAction(() => () => window.print())
      setShowWarning(true)
    } else {
      // If valid, execute immediately
      window.print()
    }
  }

  const handleCopyText = () => {
    const validation = validateResumeForExport(resumeData)
    
    if (!validation.isValid) {
      // Show warning and store the action to execute later
      setWarningMessage(validation.message)
      setPendingAction(() => () => {
        const plainText = generatePlainText(resumeData)
        navigator.clipboard.writeText(plainText).then(() => {
          alert('Resume copied to clipboard!')
        }).catch(() => {
          alert('Failed to copy to clipboard. Please try again.')
        })
      })
      setShowWarning(true)
    } else {
      // If valid, execute immediately
      const plainText = generatePlainText(resumeData)
      navigator.clipboard.writeText(plainText).then(() => {
        alert('Resume copied to clipboard!')
      }).catch(() => {
        alert('Failed to copy to clipboard. Please try again.')
      })
    }
  }

  const handleProceed = () => {
    // Execute the pending action
    if (pendingAction) {
      pendingAction()
    }
    // Close modal and clear state
    setShowWarning(false)
    setPendingAction(null)
  }

  const handleCancel = () => {
    // Just close modal without executing action
    setShowWarning(false)
    setPendingAction(null)
  }

  return (
    <div className="export-buttons-container">
      {showWarning && (
        <div className="export-warning-modal">
          <div className="warning-content">
            <div className="warning-icon">⚠️</div>
            <div className="warning-message">{warningMessage}</div>
            <div className="warning-actions">
              <button className="btn-warning-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn-warning-proceed" onClick={handleProceed}>
                Export Anyway
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="export-buttons">
        <button className="btn-export btn-print" onClick={handlePrint}>
          🖨️ Print / Save as PDF
        </button>
        <button className="btn-export btn-copy" onClick={handleCopyText}>
          📋 Copy Resume as Text
        </button>
      </div>
    </div>
  )
}

export default ExportButtons
