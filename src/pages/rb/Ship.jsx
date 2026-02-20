import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect, useState } from 'react'

const Ship = () => {
  const navigate = useNavigate()
  const { canAccessStep, isStepComplete } = useProgress()
  const [showAccessDenied, setShowAccessDenied] = useState(false)

  useEffect(() => {
    if (!canAccessStep(8)) {
      setShowAccessDenied(true)
      const timer = setTimeout(() => {
        navigate('/rb/07-test')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [canAccessStep, navigate])

  if (showAccessDenied) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#F7F6F3',
        fontFamily: 'Georgia, serif',
        color: '#8B0000',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Step 8 Locked</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Complete Step 7 (Test) first by uploading an artifact.
        </p>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          Redirecting to Step 7...
        </p>
      </div>
    )
  }

  const promptText = `Prepare the AI Resume Builder for deployment.

Include:
- Deployment strategy
- Production environment setup
- CI/CD pipeline configuration
- Monitoring and logging setup
- Documentation (README, API docs)
- Launch checklist`

  return (
    <PremiumLayout
      stepNumber={8}
      stepTitle="Step 8: Ship"
      contextHeader="Deploy your application and prepare for launch."
      nextRoute="/rb/proof"
      buildPanelContent={<BuildPanel stepNumber={8} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>Deployment Phase</h2>
        <p>Get your application ready for production and deploy it to the world!</p>
        
        <div className="instruction-box">
          <h3>What to prepare:</h3>
          <ul>
            <li>Production environment configuration</li>
            <li>Domain and hosting setup</li>
            <li>SSL certificates</li>
            <li>Database backups and migrations</li>
            <li>Monitoring and analytics</li>
            <li>User documentation</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A deployed, live application with complete documentation and monitoring in place.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default Ship
