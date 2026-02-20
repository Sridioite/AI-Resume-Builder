// ATS Scoring v1 - Deterministic scoring system

export const calculateATSScore = (resumeData) => {
  let score = 0
  const suggestions = []

  // 1. Summary length (40-120 words) = +15
  const summaryWords = resumeData.summary.trim().split(/\s+/).filter(w => w.length > 0).length
  if (summaryWords >= 40 && summaryWords <= 120) {
    score += 15
  } else if (summaryWords < 40 && summaryWords > 0) {
    suggestions.push('Write a stronger summary (40–120 words).')
  } else if (summaryWords === 0) {
    suggestions.push('Add a professional summary.')
  }

  // 2. At least 2 projects = +10
  if (resumeData.projects.length >= 2) {
    score += 10
  } else {
    suggestions.push('Add at least 2 projects.')
  }

  // 3. At least 1 experience entry = +10
  if (resumeData.experience.length >= 1) {
    score += 10
  } else {
    suggestions.push('Add work experience.')
  }

  // 4. Skills list has ≥ 8 items = +10
  const allSkills = [
    ...resumeData.skills.technical,
    ...resumeData.skills.soft,
    ...resumeData.skills.tools
  ]
  if (allSkills.length >= 8) {
    score += 10
  } else {
    suggestions.push('Add more skills (target 8+).')
  }

  // 5. GitHub or LinkedIn link exists = +10
  if (resumeData.links.github || resumeData.links.linkedin) {
    score += 10
  } else {
    suggestions.push('Add GitHub or LinkedIn link.')
  }

  // 6. Any experience/project bullet contains a number = +15
  const hasNumbers = [...resumeData.experience, ...resumeData.projects].some(item => {
    const text = item.description || ''
    return /\d+[%kKmM]?|\d+\.\d+|[0-9]+/.test(text)
  })
  if (hasNumbers) {
    score += 15
  } else if (resumeData.experience.length > 0 || resumeData.projects.length > 0) {
    suggestions.push('Add measurable impact (numbers) in bullets.')
  }

  // 7. Education section has complete fields = +10
  const hasCompleteEducation = resumeData.education.some(edu => 
    edu.school && edu.degree && edu.year
  )
  if (hasCompleteEducation) {
    score += 10
  } else if (resumeData.education.length > 0) {
    suggestions.push('Complete education details (school, degree, year).')
  } else {
    suggestions.push('Add education information.')
  }

  // Cap at 100
  score = Math.min(score, 100)

  // Return top 3 suggestions
  return {
    score,
    suggestions: suggestions.slice(0, 3)
  }
}
