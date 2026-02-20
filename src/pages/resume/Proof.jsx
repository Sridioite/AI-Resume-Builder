import Navigation from '../../components/Navigation'
import './Proof.css'

const Proof = () => {
  return (
    <div className="proof-page-resume">
      <Navigation />
      
      <div className="proof-container">
        <div className="proof-content-resume">
          <h1 className="proof-title">Proof of Work</h1>
          <p className="proof-subtitle">
            This section will contain your resume artifacts and submission proof.
          </p>
          
          <div className="proof-placeholder">
            <div className="placeholder-icon">📄</div>
            <h2>Coming Soon</h2>
            <p>Upload your resume artifacts and track your submissions here.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proof
