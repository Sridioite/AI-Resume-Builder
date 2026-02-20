import { useResume } from '../../context/ResumeContext'
import Navigation from '../../components/Navigation'
import ResumePreview from '../../components/ResumePreview'
import TemplateSwitcher from '../../components/TemplateSwitcher'
import './Preview.css'

const Preview = () => {
  const { resumeData } = useResume()

  return (
    <div className="preview-page">
      <Navigation />
      
      <div className="preview-container">
        <div className="preview-template-switcher">
          <TemplateSwitcher />
        </div>
        <div className="preview-content">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  )
}

export default Preview
