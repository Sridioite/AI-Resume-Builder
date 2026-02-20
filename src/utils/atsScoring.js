// ATS Scoring - Deterministic scoring system

const ACTION_VERBS = [
  'built', 'led', 'designed', 'improved', 'developed', 'created', 'managed',
  'implemented', 'launched', 'optimized', 'increased', 'reduced', 'achieved',
  'delivered', 'established', 'executed', 'generated', 'initiated', 'streamlined'
]

export const calculateATSScore = (resumeData) => {
  let score = 0
  const suggestions = []

  // +10 if name provided
  if (resumeData.personalInfo.name && resumeData.personalInfo.name.trim()) {
    score += 10
  } else {
    suggestions.push('Add your name (+10 points)')
  }

  // +10 if email provided
  if (resumeData.personalInfo.email && resumeData.personalInfo.email.trim()) {
    score += 10
  } else {
    suggestions.push('Add your email address (+10 points)')
  }

  // +10 if summary > 50 chars
  if (resumeData.summary && resumeData.summary.trim().length > 50) {
    score += 10
  } else {
    suggestions.push('Add a professional summary (50+ characters) (+10 points)')
  }

  // +15 if at least 1 experience entry with bullets
  if (resumeData.experience.length > 0 && 
      resumeData.experience.some(exp => exp.description && exp.description.trim())) {
    score += 15
  } else {
    suggestions.push('Add work experience with description (+15 points)')
  }

  // +10 if at least 1 education entry
  if (resumeData.education.length > 0) {
    score += 10
  } else {
    suggestions.push('Add education information (+10 points)')
  }

  // +10 if at least 5 skills added
  const totalSkills = (resumeData.skills?.technical?.length || 0) +
                      (resumeData.skills?.soft?.length || 0) +
                      (resumeData.skills?.tools?.length || 0)
  if (totalSkills >= 5) {
    score += 10
  } else {
    suggestions.push(`Add ${5 - totalSkills} more skills (+10 points)`)
  }

  // +10 if at least 1 project added
  if (resumeData.projects.length > 0) {
    score += 10
  } else {
    suggestions.push('Add at least one project (+10 points)')
  }

  // +5 if phone provided
  if (resumeData.personalInfo.phone && resumeData.personalInfo.phone.trim()) {
    score += 5
  } else {
    suggestions.push('Add phone number (+5 points)')
  }

  // +5 if LinkedIn provided
  if (resumeData.links.linkedin && resumeData.links.linkedin.trim()) {
    score += 5
  } else {
    suggestions.push('Add LinkedIn profile (+5 points)')
  }

  // +5 if GitHub provided
  if (resumeData.links.github && resumeData.links.github.trim()) {
    score += 5
  } else {
    suggestions.push('Add GitHub profile (+5 points)')
  }

  // +10 if summary contains action verbs
  if (resumeData.summary) {
    const summaryLower = resumeData.summary.toLowerCase()
    const hasActionVerb = ACTION_VERBS.some(verb => summaryLower.includes(verb))
    if (hasActionVerb) {
      score += 10
    } else {
      suggestions.push('Use action verbs in summary (built, led, designed, etc.) (+10 points)')
    }
  }

  // Cap at 100
  score = Math.min(score, 100)

  // Determine rating
  let rating = 'Needs Work'
  let color = '#d32f2f' // Red
  if (score >= 71) {
    rating = 'Strong Resume'
    color = '#2e7d32' // Green
  } else if (score >= 41) {
    rating = 'Getting There'
    color = '#f57c00' // Amber
  }

  return {
    score,
    rating,
    color,
    suggestions: suggestions.slice(0, 5) // Top 5 suggestions
  }
}
