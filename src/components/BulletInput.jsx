import { useState, useEffect } from 'react'
import { validateBullet } from '../utils/bulletValidation'
import './BulletInput.css'

const BulletInput = ({ value, onChange, placeholder, rows = 3 }) => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (value && value.trim().length > 0) {
      const bulletSuggestions = validateBullet(value)
      setSuggestions(bulletSuggestions)
    } else {
      setSuggestions([])
    }
  }, [value])

  return (
    <div className="bullet-input-container">
      <textarea
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
      />
      {suggestions.length > 0 && (
        <div className="bullet-suggestions">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="bullet-suggestion">
              💡 {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BulletInput
