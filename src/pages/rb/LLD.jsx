import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect } from 'react'

const LLD = () => {
  const navigate = useNavigate()
  const { canAccessStep } = useProgress()

  useEffect(() => {
    if (!canAccessStep(5)) {
      navigate('/rb/01-problem')
    }
  }, [canAccessStep, navigate])

  const promptText = `Create a Low-Level Design (LLD) for the AI Resume Builder.

Include:
- Detailed class diagrams
- Function signatures and interfaces
- Algorithm specifications
- Database schema with constraints
- State management design
- Error handling strategies`

  return (
    <PremiumLayout
      stepNumber={5}
      stepTitle="Step 5: Low-Level Design (LLD)"
      contextHeader="Define the detailed implementation specifications for each component."
      nextRoute="/rb/06-build"
      buildPanelContent={<BuildPanel stepNumber={5} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>Low-Level Design</h2>
        <p>Create detailed specifications for implementation-ready components.</p>
        
        <div className="instruction-box">
          <h3>What to specify:</h3>
          <ul>
            <li>Class structures and interfaces</li>
            <li>Function signatures and parameters</li>
            <li>Algorithm pseudocode</li>
            <li>Database tables and indexes</li>
            <li>State management patterns</li>
            <li>Error handling and validation</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A comprehensive LLD document with implementation-ready specifications.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default LLD
