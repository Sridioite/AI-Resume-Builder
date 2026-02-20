import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider')
  }
  return context
}

export const ProgressProvider = ({ children }) => {
  const [artifacts, setArtifacts] = useState(() => {
    const saved = localStorage.getItem('rb_artifacts')
    return saved ? JSON.parse(saved) : {}
  })

  const [proofData, setProofData] = useState(() => {
    const saved = localStorage.getItem('rb_proof_data')
    return saved ? JSON.parse(saved) : {
      lovableLink: '',
      githubLink: '',
      deployLink: ''
    }
  })

  useEffect(() => {
    localStorage.setItem('rb_artifacts', JSON.stringify(artifacts))
  }, [artifacts])

  useEffect(() => {
    localStorage.setItem('rb_proof_data', JSON.stringify(proofData))
  }, [proofData])

  const saveArtifact = (step, data) => {
    setArtifacts(prev => ({
      ...prev,
      [step]: data
    }))
  }

  const getArtifact = (step) => {
    return artifacts[step]
  }

  const isStepComplete = (step) => {
    return !!artifacts[step]
  }

  const canAccessStep = (stepNumber) => {
    if (stepNumber === 1) return true
    return isStepComplete(stepNumber - 1)
  }

  const updateProofData = (field, value) => {
    setProofData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <ProgressContext.Provider value={{
      artifacts,
      saveArtifact,
      getArtifact,
      isStepComplete,
      canAccessStep,
      proofData,
      updateProofData
    }}>
      {children}
    </ProgressContext.Provider>
  )
}
