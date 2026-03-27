---
layout: default
title: Publications & Code
---

<div class="main-content">
  <div class="publications-section">
    <h1>Publications & Code</h1>

    <!-- FILTER BUTTONS AND DROPDOWN -->
    <div class="filters-container">
      <div class="paper-filters">
        <span class="filter-label">Filter by research area:</span>
        <button class="filter-btn active" onclick="filterPapers('all')">All Papers</button>
        <button class="filter-btn" onclick="filterPapers('quantum-computing')">Quantum Computing</button>
        <button class="filter-btn" onclick="filterPapers('artificial-intelligence')">Artificial Intelligence</button>
        <button class="filter-btn" onclick="filterPapers('high-performance-computing')">High Performance Computing</button>
        <button class="filter-btn" onclick="filterPapers('medical-imaging')">Medical Imaging</button>
        <button class="filter-btn" onclick="filterPapers('data-science')">Data Science</button>
      </div>

      <div class="year-filter-container">
        <label for="year-select" class="filter-label">Filter by year:</label>
        <select id="year-select" class="year-select" onchange="filterByYear(this.value)">
          <option value="all">All Years</option>
          {% assign all_years = site.papers | map: "year" | uniq | sort | reverse %}
          {% for year in all_years %}
            <option value="{{ year }}">{{ year }}</option>
          {% endfor %}
        </select>
      </div>
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
// Store current filters
let currentAreaFilter = 'all';
let currentYearFilter = 'all';

function filterPapers(filter) {
  console.log('Filtering by area: ' + filter);
  currentAreaFilter = filter;
  
  // Update button styling
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Find and activate the clicked button
  event.target.classList.add('active');
  
  // Apply both filters
  applyFilters();
}

function filterByYear(year) {
  console.log('Filtering by year: ' + year);
  currentYearFilter = year;
  
  // Apply both filters
  applyFilters();
}

function applyFilters() {
  // Get all paper items and year groups
  const papers = document.querySelectorAll('.paper-item');
  const yearGroups = document.querySelectorAll('.papers-year-group');
  
  console.log('Applying filters - Area: ' + currentAreaFilter + ', Year: ' + currentYearFilter);
  
  // Loop through all papers
  papers.forEach(paper => {
    const areas = paper.getAttribute('data-areas') || '';
    const yearGroup = paper.closest('.papers-year-group');
    const year = yearGroup ? yearGroup.getAttribute('data-year').trim() : '';
    
    console.log('Paper year: "' + year + '", filter year: "' + currentYearFilter + '"');
    
    // Check if paper matches both filters
    let areaMatch = (currentAreaFilter === 'all') || areas.includes(currentAreaFilter);
    let yearMatch = (currentYearFilter === 'all') || (String(year) === String(currentYearFilter));
    
    console.log('Area match: ' + areaMatch + ', Year match: ' + yearMatch);
    
    if (areaMatch && yearMatch) {
      paper.style.display = 'block';
    } else {
      paper.style.display = 'none';
    }
  });
  
  // Hide year groups that have no visible papers
  yearGroups.forEach(group => {
    const visibleInGroup = Array.from(group.querySelectorAll('.paper-item')).filter(p => p.style.display !== 'none').length;
    if (visibleInGroup === 0) {
      group.style.display = 'none';
    } else {
      group.style.display = 'block';
    }
  });
}
</script>