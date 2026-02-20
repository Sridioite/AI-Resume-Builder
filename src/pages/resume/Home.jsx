import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-headline">Build a Resume That Gets Read.</h1>
        <p className="home-subtext">
          Create a professional, ATS-optimized resume in minutes. 
          Stand out from the crowd and land your dream job.
        </p>
        <button 
          className="home-cta"
          onClick={() => navigate('/builder')}
        >
          Start Building
        </button>
      </div>
    </div>
  )
}

export default Home
