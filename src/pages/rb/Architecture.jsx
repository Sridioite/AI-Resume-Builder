import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect } from 'react'

const Architecture = () => {
  const navigate = useNavigate()
  const { canAccessStep } = useProgress()

  useEffect(() => {
    if (!canAccessStep(3)) {
      navigate('/rb/01-problem')
    }
  }, [canAccessStep, navigate])

  const promptText = `Design the system architecture for an AI Resume Builder.

Include:
- System architecture diagram
- Technology stack selection
- AI/ML components and models
- Data flow architecture
- Integration points (APIs, databases)
- Scalability considerations`

  return (
    <PremiumLayout
      stepNumber={3}
      stepTitle="Step 3: System Architecture"
      contextHeader="Design the overall system architecture and select your technology stack."
      nextRoute="/rb/04-hld"
      buildPanelContent={<BuildPanel stepNumber={3} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>System Architecture</h2>
        <p>Design the high-level architecture of your AI Resume Builder system.</p>
        
        <div className="instruction-box">
          <h3>What to design:</h3>
          <ul>
            <li>Frontend architecture (React, Vue, etc.)</li>
            <li>Backend services and APIs</li>
            <li>AI/ML model integration</li>
            <li>Database design</li>
            <li>Authentication and security</li>
            <li>Deployment infrastructure</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A system architecture diagram with technology stack decisions and rationale.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default Architecture
