// Validate resume before export
export const validateResumeForExport = (resumeData) => {
  const issues = []

  // Check for name
  if (!resumeData.personalInfo.name || resumeData.personalInfo.name.trim().length === 0) {
    issues.push('missing name')
  }

  // Check for at least one project or experience
  const hasExperience = resumeData.experience.length > 0
  const hasProjects = resumeData.projects.length > 0

  if (!hasExperience && !hasProjects) {
    issues.push('no experience or projects')
  }

  if (issues.length > 0) {
    return {
      isValid: false,
      message: 'Your resume may look incomplete.'
    }
  }

  return {
    isValid: true,
    message: ''
  }
}
