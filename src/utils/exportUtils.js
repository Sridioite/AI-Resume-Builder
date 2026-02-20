// Generate plain text version of resume
export const generatePlainText = (resumeData) => {
  let text = ''

  // Name and Contact
  if (resumeData.personalInfo.name) {
    text += `${resumeData.personalInfo.name}\n`
    text += '='.repeat(resumeData.personalInfo.name.length) + '\n\n'
  }

  // Contact Information
  const contactParts = []
  if (resumeData.personalInfo.email) contactParts.push(resumeData.personalInfo.email)
  if (resumeData.personalInfo.phone) contactParts.push(resumeData.personalInfo.phone)
  if (resumeData.personalInfo.location) contactParts.push(resumeData.personalInfo.location)
  
  if (contactParts.length > 0) {
    text += contactParts.join(' | ') + '\n\n'
  }

  // Links
  if (resumeData.links.github || resumeData.links.linkedin) {
    const links = []
    if (resumeData.links.github) links.push(resumeData.links.github)
    if (resumeData.links.linkedin) links.push(resumeData.links.linkedin)
    text += links.join(' | ') + '\n\n'
  }

  // Summary
  if (resumeData.summary) {
    text += 'SUMMARY\n'
    text += '-------\n'
    text += resumeData.summary + '\n\n'
  }

  // Experience
  if (resumeData.experience.length > 0) {
    text += 'EXPERIENCE\n'
    text += '----------\n'
    resumeData.experience.forEach(exp => {
      if (exp.role) text += `${exp.role}\n`
      if (exp.company) text += `${exp.company}`
      if (exp.duration) text += ` | ${exp.duration}`
      text += '\n'
      if (exp.description) text += `${exp.description}\n`
      text += '\n'
    })
  }

  // Projects
  if (resumeData.projects.length > 0) {
    text += 'PROJECTS\n'
    text += '--------\n'
    resumeData.projects.forEach(proj => {
      if (proj.name) text += `${proj.name}\n`
      if (proj.description) text += `${proj.description}\n`
      if (proj.tech) text += `Technologies: ${proj.tech}\n`
      text += '\n'
    })
  }

  // Education
  if (resumeData.education.length > 0) {
    text += 'EDUCATION\n'
    text += '---------\n'
    resumeData.education.forEach(edu => {
      if (edu.school) text += `${edu.school}\n`
      if (edu.degree) text += `${edu.degree}`
      if (edu.year) text += ` | ${edu.year}`
      if (edu.location) text += ` | ${edu.location}`
      text += '\n\n'
    })
  }

  // Skills
  if (resumeData.skills) {
    text += 'SKILLS\n'
    text += '------\n'
    text += resumeData.skills + '\n\n'
  }

  return text.trim()
}
