// Paper Filtering Module
// Handles filtering logic for papers across the site
// Usage: Call initPaperFilters(options) after DOM is loaded

const PaperFilters = {
  /**
   * Initialize paper filtering for a container
   * @param {Object} options - Configuration options
   * @param {string} options.containerId - ID of the container holding papers and filters
   * @param {string} options.paperSelector - CSS selector for individual paper items (default: '.paper-item')
   * @param {string} options.filterSelector - CSS selector for filter buttons (default: '.filter-btn')
   * @param {string} options.yearGroupSelector - CSS selector for year groups (default: '.papers-year-group')
   * @param {string} options.autoPopulateFilters - Whether to auto-generate filter buttons (default: false)
   * @param {string} options.filterButtonsContainer - Container where to add auto-generated buttons (required if autoPopulateFilters true)
   */
  init: function(options = {}) {
    const {
      containerId = null,
      paperSelector = '.paper-item',
      filterSelector = '.filter-btn',
      yearGroupSelector = '.papers-year-group',
      autoPopulateFilters = false,
      filterButtonsContainer = null
    } = options;

    // Get the container
    const container = containerId 
      ? document.getElementById(containerId)
      : document.body;

    // Get all paper elements
    const papers = container.querySelectorAll(paperSelector);

    // Auto-populate filters if requested
    if (autoPopulateFilters && filterButtonsContainer && papers.length > 0) {
      this.generateFilterButtons(papers, filterButtonsContainer);
    }

    // Get all filter buttons
    const buttons = container.querySelectorAll(filterSelector);

    // Attach click handlers to buttons
    buttons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        PaperFilters.applyFilter(filter, container, {
          paperSelector,
          yearGroupSelector,
          filterSelector
        });
        
        // Update active button
        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });

    console.log(`Paper filtering initialized for: ${containerId || 'document'}`);
  },

  /**
   * Generate filter buttons from unique research areas in papers
   * @param {NodeList} papers - Paper elements to scan for areas
   * @param {string} containerSelector - Container to append buttons to
   */
  generateFilterButtons: function(papers, containerSelector) {
    const container = typeof containerSelector === 'string' 
      ? document.querySelector(containerSelector)
      : containerSelector;

    if (!container) {
      console.error('Filter buttons container not found');
      return;
    }

    // Collect all unique research areas
    const areas = new Set();
    
    papers.forEach(paper => {
      const areasAttr = paper.getAttribute('data-areas') || '';
      const areaList = areasAttr.split('|').filter(area => area.trim());
      areaList.forEach(area => areas.add(area));
    });

    // Create buttons for each area
    const sortedAreas = Array.from(areas).sort();
    
    sortedAreas.forEach(area => {
      const button = document.createElement('button');
      button.className = 'filter-btn';
      button.setAttribute('data-filter', area);
      button.textContent = this.slugToTitle(area);
      container.appendChild(button);
    });
  },

  /**
   * Apply a filter and show/hide papers accordingly
   * @param {string} filter - The filter to apply (slug format)
   * @param {HTMLElement} container - Container to search within
   * @param {Object} selectors - CSS selectors for elements
   */
  applyFilter: function(filter, container, selectors = {}) {
    const {
      paperSelector = '.paper-item',
      yearGroupSelector = '.papers-year-group'
    } = selectors;

    const papers = container.querySelectorAll(paperSelector);

    console.log(`Filtering by: ${filter}`);

    papers.forEach(paper => {
      const areas = paper.getAttribute('data-areas') || '';

      if (filter === 'all' || areas.includes(filter)) {
        paper.style.display = 'block';
      } else {
        paper.style.display = 'none';
      }
    });

    // Hide year groups with no visible papers (only if year groups exist)
    const yearGroups = container.querySelectorAll(yearGroupSelector);
    if (yearGroups.length > 0) {
      yearGroups.forEach(group => {
        const visibleInGroup = group.querySelectorAll(paperSelector + '[style="display: block"]').length;
        group.style.display = visibleInGroup > 0 ? 'block' : 'none';
      });
    }
  },

  /**
   * Convert slug format to title case
   * @param {string} slug - Slug (e.g., "quantum-computing")
   * @returns {string} Title (e.g., "Quantum Computing")
   */
  slugToTitle: function(slug) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
};

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if there are papers on this page
  if (document.querySelector('.paper-item')) {
    console.log('Papers detected on page');
  }
});