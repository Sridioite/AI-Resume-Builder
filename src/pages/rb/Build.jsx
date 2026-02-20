import { useNavigate } from 'react-router-dom'
import { useProgress } from '../../context/ProgressContext'
import PremiumLayout from '../../components/PremiumLayout'
import BuildPanel from '../../components/BuildPanel'
import { useEffect } from 'react'

const Build = () => {
  const navigate = useNavigate()
  const { canAccessStep } = useProgress()

  useEffect(() => {
    if (!canAccessStep(6)) {
      navigate('/rb/01-problem')
    }
  }, [canAccessStep, navigate])

  const promptText = `Build the AI Resume Builder application.

Create a functional resume builder with:
- User authentication
- Resume template selection
- AI-powered content suggestions
- Real-time preview
- Export to PDF functionality
- Responsive design

Tech stack: React, Node.js, OpenAI API (or similar)`

  return (
    <PremiumLayout
      stepNumber={6}
      stepTitle="Step 6: Build"
      contextHeader="Implement the AI Resume Builder application based on your designs."
      nextRoute="/rb/07-test"
      buildPanelContent={<BuildPanel stepNumber={6} promptText={promptText} />}
    >
      <div className="step-content">
        <h2>Build Phase</h2>
        <p>Time to bring your designs to life! Build the actual application.</p>
        
        <div className="instruction-box">
          <h3>What to build:</h3>
          <ul>
            <li>Frontend UI components</li>
            <li>Backend API services</li>
            <li>AI integration for content generation</li>
            <li>Database setup and migrations</li>
            <li>Authentication system</li>
            <li>Resume templates and styling</li>
          </ul>
        </div>

        <div className="instruction-box">
          <h3>Deliverable:</h3>
          <p>A working prototype of the AI Resume Builder with core features implemented.</p>
        </div>
      </div>
    </PremiumLayout>
  )
}

export default Build
