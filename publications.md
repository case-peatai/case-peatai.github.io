---
layout: default
title: Publications & Code
---

<div class="main-content">
  <div class="publications-section">
    <h1>Publications & Code</h1>

    <!-- FILTER BUTTONS -->
    <div class="paper-filters">
      <span class="filter-label">Filter by research area:</span>
      <button class="filter-btn active" onclick="filterPapers('all')">All Papers</button>
      <button class="filter-btn" onclick="filterPapers('quantum-computing')">Quantum Computing</button>
      <button class="filter-btn" onclick="filterPapers('artificial-intelligence')">Artificial Intelligence</button>
      <button class="filter-btn" onclick="filterPapers('high-performance-computing')">High Performance Computing</button>
      <button class="filter-btn" onclick="filterPapers('medical-imaging')">Medical Imaging</button>
      <button class="filter-btn" onclick="filterPapers('data-science')">Data Science</button>
    </div>

    <!-- PAPERS GROUPED BY YEAR -->
    {% assign papers_by_year = site.papers | sort: "year" | reverse | group_by: "year" %}
    
    {% for year_group in papers_by_year %}
    <div class="papers-year-group" data-year="{{ year_group.name }}">
      <h2 class="year-heading">{{ year_group.name }}</h2>
      
      <div class="papers-list">
        {% assign sorted_papers = year_group.items | sort: "title" %}
        {% for paper in sorted_papers %}
        
        <div class="paper-item" data-areas="{% for area in paper.research_areas %}{{ area | slugify }}|{% endfor %}">
          {% include research-paper-card.html paper=paper %}
        </div>
        
        {% endfor %}
      </div>
    </div>
    {% endfor %}

  </div>
</div>

<script>
function filterPapers(filter) {
  console.log('Filtering by: ' + filter);
  
  // Update button styling
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Find and activate the clicked button
  event.target.classList.add('active');
  
  // Get all paper items and year groups
  const papers = document.querySelectorAll('.paper-item');
  const yearGroups = document.querySelectorAll('.papers-year-group');
  
  // Loop through all papers
  papers.forEach(paper => {
    const areas = paper.getAttribute('data-areas');
    
    // Show or hide based on filter
    if (filter === 'all') {
      paper.classList.remove('hidden-paper');
    } else if (areas.includes(filter)) {
      paper.classList.remove('hidden-paper');
    } else {
      paper.classList.add('hidden-paper');
    }
  });
  
  // Hide year groups that have no visible papers
  yearGroups.forEach(group => {
    const visiblePapers = group.querySelectorAll('.paper-item:not(.hidden-paper)').length;
    if (visiblePapers === 0) {
      group.classList.add('hidden-year-group');
    } else {
      group.classList.remove('hidden-year-group');
    }
  });
}
</script>

<style>
.hidden-paper {
  display: none !important;
}

.hidden-year-group {
  display: none !important;
}
</style>