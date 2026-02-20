import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect } from 'react'

const Market = () => {
  const navigate = useNavigate()
  const { canAccessStep } = useProgress()

  useEffect(() => {
    if (!canAccessStep(2)) {
      navigate('/rb/01-problem')
    }
  }, [canAccessStep, navigate])

  const promptText = `Create a market research analysis for an AI Resume Builder.

Include:
- Competitive landscape analysis
- Market size and opportunity
- Unique value proposition
- Target market segments
- Go-to-market strategy`

  return (
    <PremiumLayout
      stepNumber={2}
      stepTitle="Step 2: Market Research"
      contextHeader="Analyze the market landscape, identify competitors, and define your unique positioning."
      nextRoute="/rb/03-architecture"
      buildPanelContent={<BuildPanel stepNumber={2} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>Market Analysis</h2>
        <p>Research the competitive landscape and identify your market opportunity.</p>
        
        <div className="instruction-box">
          <h3>What to research:</h3>
          <ul>
            <li>Who are the main competitors?</li>
            <li>What features do they offer?</li>
            <li>What gaps exist in the market?</li>
            <li>What's your unique value proposition?</li>
            <li>What's the total addressable market?</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A comprehensive market research document with competitive analysis and positioning strategy.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default Market
