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