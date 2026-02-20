// PDF Generation utility using browser print API
// This provides a better user experience than just window.print()

export const generatePDF = async (resumeElement) => {
  return new Promise((resolve, reject) => {
    try {
      // Store original body content
      const originalContents = document.body.innerHTML
      const originalTitle = document.title
      
      // Get the resume content
      const resumeContent = resumeElement.cloneNode(true)
      
      // Create a temporary container
      const printContainer = document.createElement('div')
      printContainer.className = 'pdf-print-container'
      printContainer.appendChild(resumeContent)
      
      // Replace body content with resume only
      document.body.innerHTML = ''
      document.body.appendChild(printContainer)
      document.title = 'Resume'
      
      // Add print-specific styles
      const style = document.createElement('style')
      style.textContent = `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          .pdf-print-container {
            width: 100%;
            height: 100%;
          }
          
          @page {
            size: letter;
            margin: 0.5in;
          }
        }
      `
      document.head.appendChild(style)
      
      // Trigger print dialog
      window.print()
      
      // Restore original content after a delay
      setTimeout(() => {
        document.body.innerHTML = originalContents
        document.title = originalTitle
        document.head.removeChild(style)
        
        // Re-initialize React (page will reload automatically)
        window.location.reload()
      }, 100)
      
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

// Alternative: Download as PDF using html2pdf.js (client-side only)
export const downloadAsPDF = async (resumeElement, filename = 'resume.pdf') => {
  try {
    // For now, we'll use the print method
    // In production, you could use libraries like jsPDF + html2canvas
    await generatePDF(resumeElement)
    return true
  } catch (error) {
    console.error('PDF generation failed:', error)
    return false
  }
}
