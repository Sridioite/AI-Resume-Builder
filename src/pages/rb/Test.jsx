import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect } from 'react'

const Test = () => {
  const navigate = useNavigate()
  const { canAccessStep } = useProgress()

  useEffect(() => {
    if (!canAccessStep(7)) {
      navigate('/rb/01-problem')
    }
  }, [canAccessStep, navigate])

  const promptText = `Create a comprehensive testing plan for the AI Resume Builder.

Include:
- Unit test cases
- Integration test scenarios
- User acceptance testing (UAT)
- Performance testing
- Security testing
- Bug tracking and resolution`

  return (
    <PremiumLayout
      stepNumber={7}
      stepTitle="Step 7: Testing"
      contextHeader="Test your application thoroughly to ensure quality and reliability."
      nextRoute="/rb/08-ship"
      buildPanelContent={<BuildPanel stepNumber={7} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>Testing Phase</h2>
        <p>Validate your application through comprehensive testing.</p>
        
        <div className="instruction-box">
          <h3>What to test:</h3>
          <ul>
            <li>Functional testing of all features</li>
            <li>AI content generation quality</li>
            <li>Cross-browser compatibility</li>
            <li>Mobile responsiveness</li>
            <li>Performance and load testing</li>
            <li>Security vulnerabilities</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A test report with test cases, results, and bug fixes documentation.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default Test
