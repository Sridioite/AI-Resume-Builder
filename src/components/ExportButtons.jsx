import { useState } from 'react'
import { generatePlainText } from '../utils/exportUtils'
import { validateResumeForExport } from '../utils/validationUtils'
import './ExportButtons.css'

const ExportButtons = ({ resumeData }) => {
  const [showWarning, setShowWarning] = useState(false)
  const [warningMessage, setWarningMessage] = useState('')
  const [pendingAction, setPendingAction] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const showToastNotification = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  const handleDownloadPDF = () => {
    const validation = validateResumeForExport(resumeData)
    
    if (!validation.isValid) {
      // Show warning and store the action to execute later
      setWarningMessage(validation.message)
      setPendingAction(() => () => {
        // Trigger print dialog
        window.print()
        // Show toast after a short delay
        setTimeout(() => {
          showToastNotification('PDF generation ready! Use "Save as PDF" in the print dialog.')
        }, 500)
      })
      setShowWarning(true)
    } else {
      // If valid, execute immediately
      window.print()
      setTimeout(() => {
        showToastNotification('PDF generation ready! Use "Save as PDF" in the print dialog.')
      }, 500)
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
          showToastNotification('Resume copied to clipboard!')
        }).catch(() => {
          showToastNotification('Failed to copy to clipboard.')
        })
      })
      setShowWarning(true)
    } else {
      // If valid, execute immediately
      const plainText = generatePlainText(resumeData)
      navigator.clipboard.writeText(plainText).then(() => {
        showToastNotification('Resume copied to clipboard!')
      }).catch(() => {
        showToastNotification('Failed to copy to clipboard.')
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

      {showToast && (
        <div className="export-toast">
          <span className="toast-icon">✓</span>
          <span className="toast-message">{toastMessage}</span>
        </div>
      )}
      
      <div className="export-buttons">
        <button className="btn-export btn-download" onClick={handleDownloadPDF}>
          📥 Download PDF
        </button>
        <button className="btn-export btn-copy" onClick={handleCopyText}>
          📋 Copy Resume as Text
        </button>
      </div>

      <div className="export-hint">
        💡 Tip: In the print dialog, select "Save as PDF" and enable "Background graphics" for best results.
      </div>
    </div>
  )
}

export default ExportButtons
