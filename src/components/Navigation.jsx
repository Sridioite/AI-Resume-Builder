import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="top-nav">
      <div className="nav-brand">AI Resume Builder</div>
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/builder" 
          className={`nav-link ${isActive('/builder') ? 'active' : ''}`}
        >
          Builder
        </Link>
        <Link 
          to="/preview" 
          className={`nav-link ${isActive('/preview') ? 'active' : ''}`}
        >
          Preview
        </Link>
        <Link 
          to="/proof" 
          className={`nav-link ${isActive('/proof') ? 'active' : ''}`}
        >
          Proof
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
