import { useResume } from '../../context/ResumeContext'
import Navigation from '../../components/Navigation'
import ResumePreview from '../../components/ResumePreview'
import TemplatePicker from '../../components/TemplatePicker'
import ExportButtons from '../../components/ExportButtons'
import './Preview.css'

const Preview = () => {
  const { resumeData } = useResume()

  return (
    <div className="preview-page">
      <Navigation />
      
      <div className="preview-container">
        <div className="preview-controls no-print">
          <TemplatePicker />
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
