import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect } from 'react'

const Ship = () => {
  const navigate = useNavigate()
  const { canAccessStep } = useProgress()

  useEffect(() => {
    if (!canAccessStep(8)) {
      navigate('/rb/01-problem')
    }
  }, [canAccessStep, navigate])

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
