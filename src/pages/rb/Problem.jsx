import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'

const Problem = () => {
  const promptText = `Create a problem statement analysis for an AI Resume Builder application.

Include:
- Target user personas
- Key pain points in current resume building process
- Market gap analysis
- Problem validation data`

  return (
    <PremiumLayout
      stepNumber={1}
      stepTitle="Step 1: Problem Definition"
      contextHeader="Define the core problem that AI Resume Builder solves. Identify user pain points and validate the problem space."
      nextRoute="/rb/02-market"
      buildPanelContent={<BuildPanel stepNumber={1} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>Problem Statement</h2>
        <p>In this step, you'll define the problem that your AI Resume Builder will solve.</p>
        
        <div className="instruction-box">
          <h3>What to focus on:</h3>
          <ul>
            <li>Who are your target users?</li>
            <li>What challenges do they face with current resume builders?</li>
            <li>Why is AI the right solution?</li>
            <li>What makes this problem worth solving?</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A clear problem statement document that articulates the user pain points and validates the need for an AI-powered solution.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default Problem
