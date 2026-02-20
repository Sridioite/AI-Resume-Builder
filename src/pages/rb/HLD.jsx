import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect } from 'react'

const HLD = () => {
  const navigate = useNavigate()
  const { canAccessStep } = useProgress()

  useEffect(() => {
    if (!canAccessStep(4)) {
      navigate('/rb/01-problem')
    }
  }, [canAccessStep, navigate])

  const promptText = `Create a High-Level Design (HLD) for the AI Resume Builder.

Include:
- Component diagram
- Module breakdown
- API design and endpoints
- Data models and schemas
- User flow diagrams
- Integration architecture`

  return (
    <PremiumLayout
      stepNumber={4}
      stepTitle="Step 4: High-Level Design (HLD)"
      contextHeader="Break down the system into major components and define their interactions."
      nextRoute="/rb/05-lld"
      buildPanelContent={<BuildPanel stepNumber={4} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>High-Level Design</h2>
        <p>Define the major components and their interactions in your system.</p>
        
        <div className="instruction-box">
          <h3>What to define:</h3>
          <ul>
            <li>Core modules and components</li>
            <li>API endpoints and contracts</li>
            <li>Data models and relationships</li>
            <li>User journey flows</li>
            <li>Component communication patterns</li>
            <li>External service integrations</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A detailed HLD document with component diagrams, API specs, and data models.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default HLD
