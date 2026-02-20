import { useResume } from '../../context/ResumeContext'
import Navigation from '../../components/Navigation'
import ResumePreview from '../../components/ResumePreview'
import TemplateSwitcher from '../../components/TemplateSwitcher'
import ExportButtons from '../../components/ExportButtons'
import './Preview.css'

const Preview = () => {
  const { resumeData } = useResume()

  return (
    <div className="preview-page">
      <Navigation />
      
      <div className="preview-container">
        <div className="preview-controls no-print">
          <TemplateSwitcher />
          <ExportButtons resumeData={resumeData} />
        </div>
        <div className="preview-content">
          <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  )
}

export default Preview
