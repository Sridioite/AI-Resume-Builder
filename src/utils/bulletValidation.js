// Common action verbs for resume bullets
const ACTION_VERBS = [
  'built', 'developed', 'designed', 'implemented', 'led', 'improved', 
  'created', 'optimized', 'automated', 'managed', 'launched', 'delivered',
  'established', 'increased', 'reduced', 'achieved', 'coordinated',
  'executed', 'initiated', 'streamlined', 'enhanced', 'architected',
  'spearheaded', 'drove', 'facilitated', 'collaborated', 'maintained',
  'deployed', 'integrated', 'migrated', 'refactored', 'scaled'
]

export const validateBullet = (text) => {
  const suggestions = []
  
  if (!text || text.trim().length === 0) {
    return suggestions
  }

  const trimmedText = text.trim()
  const firstWord = trimmedText.split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, '')
  
  // Check for action verb
  if (!ACTION_VERBS.includes(firstWord)) {
    suggestions.push('Start with a strong action verb.')
  }
  
  // Check for numbers
  const hasNumbers = /\d+[%kKmM]?|\d+\.\d+|[0-9]+/.test(trimmedText)
  if (!hasNumbers) {
    suggestions.push('Add measurable impact (numbers).')
  }
  
  return suggestions
}
