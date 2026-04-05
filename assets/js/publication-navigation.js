/**
 * Navigate to a specific publication from related papers links
 * Switches to publications tab and scrolls to the paper
 * @param {string} paperSlug - The paper slug/name
 */
function goToPublication(paperSlug) {
  // 1. Switch to publications tab
  const publicationsTab = document.getElementById('publications');
  const publicationsBtn = Array.from(document.querySelectorAll('.tab-btn')).find(
    btn => btn.textContent.trim() === 'Publications'
  );

  if (publicationsBtn && publicationsTab) {
    // Trigger the tab click
    publicationsBtn.click();

    // 2. Wait for tab to switch and then scroll to paper
    setTimeout(() => {
      // Find the paper item by data-paper-slug attribute
      let paperItem = publicationsTab.querySelector(
        `.paper-item[data-paper-slug="${paperSlug}"]`
      );

      if (paperItem) {
        // Calculate exact scroll position: element position minus 50px offset
        const elementPosition = paperItem.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 50;

        // Scroll directly to the offset position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Add a subtle highlight effect
        paperItem.style.boxShadow = '0 0 20px rgba(0, 61, 130, 0.3)';
        
        // Remove highlight after 2 seconds
        setTimeout(() => {
          paperItem.style.boxShadow = '';
        }, 2000);
      } else {
        console.warn(`Paper not found: ${paperSlug}`);
        // Fallback: just scroll to publications tab if paper not found
        publicationsTab.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}

/**
 * Toggles the visibility of the BibTeX popup and handles the copy function
 * @param {string} paperName - The unique slug of the paper
 */
function toggleBibtex(paperName) {
    const bibContainer = document.getElementById(`bib-${paperName}`);
    
    // Toggle the display
    if (bibContainer.style.display === "none" || bibContainer.style.display === "") {
        // Close any other open BibTeX containers first (optional but recommended)
        document.querySelectorAll('.bibtex-container').forEach(el => el.style.display = 'none');
        
        bibContainer.style.display = "block";
    } else {
        bibContainer.style.display = "none";
    }
}

/**
 * Copies the BibTeX text to the clipboard
 * @param {string} paperName - The unique slug of the paper
 */
function copyBibtex(paperName) {
    const bibCode = document.querySelector(`#bib-${paperName} code`).innerText;
    const button = document.querySelector(`#bib-${paperName} .copy-button`);
    
    navigator.clipboard.writeText(bibCode).then(() => {
        // Visual feedback that it worked
        const originalText = button.innerHTML;
        button.innerHTML = "Copied!";
        button.classList.add('copy-success');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copy-success');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}