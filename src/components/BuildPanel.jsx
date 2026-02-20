import { useState } from 'react'
import { useProgress } from '../context/ProgressContext'

const BuildPanel = ({ stepNumber, promptText }) => {
  const { saveArtifact, isStepComplete } = useProgress()
  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadStatus, setUploadStatus] = useState('')

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText)
    alert('Copied to clipboard!')
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
    setUploadStatus('')
  }

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('error')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      saveArtifact(stepNumber, {
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        uploadDate: new Date().toISOString(),
        data: e.target.result
      })
      setUploadStatus('success')
    }
    reader.readAsDataURL(selectedFile)
  }

  return (
    <>
      <h3>Build Panel</h3>
      
      <div className="build-panel-section">
        <h4>1. Copy This Into Lovable</h4>
        <textarea 
          className="lovable-textarea" 
          value={promptText}
          readOnly
        />
        <button className="btn-copy" onClick={handleCopy}>
          📋 Copy Prompt
        </button>
      </div>

      <div className="build-panel-section">
        <h4>2. Build in Lovable</h4>
        <div className="build-instruction">
          Paste the prompt into Lovable.dev and let it generate your solution. Once complete, take a screenshot or export the result.
        </div>
      </div>

      <div className="build-panel-section">
        <h4>3. Upload Artifact</h4>
        <div className="artifact-upload">
          <label>
            {isStepComplete(stepNumber) ? '✓ Artifact Uploaded' : 'Choose file (screenshot, PDF, etc.)'}
          </label>
          <input 
            type="file" 
            onChange={handleFileChange}
            accept="image/*,.pdf,.txt,.md"
            disabled={isStepComplete(stepNumber)}
          />
          <button 
            className={`btn-upload ${!selectedFile || isStepComplete(stepNumber) ? 'disabled' : ''}`}
            onClick={handleUpload}
            disabled={!selectedFile || isStepComplete(stepNumber)}
          >
            {isStepComplete(stepNumber) ? '✓ Uploaded' : 'Upload Artifact'}
          </button>
          
          {uploadStatus === 'success' && (
            <div className="upload-status success">
              ✓ Artifact uploaded successfully! You can now proceed to the next step.
            </div>
          )}
          
          {uploadStatus === 'error' && (
            <div className="upload-status error">
              ✗ Please select a file to upload.
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BuildPanel
