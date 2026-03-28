---
layout: default
title: Researchers
---

<div class="main-content">
  <div class="people-section">
    <h1>Researchers</h1>
    
    <div class="paper-filters" style="margin-bottom: 30px;">
      <span class="filter-label">Filter by Level:</span>
      <button class="filter-btn active" onclick="filterResearchers('all', this)">All</button>
      <button class="filter-btn" onclick="filterResearchers('PHD', this)">PhD Students</button>
      <button class="filter-btn" onclick="filterResearchers('MS', this)">MS Students</button>
      <button class="filter-btn" onclick="filterResearchers('UG', this)">Undergraduates</button>
      <button class="filter-btn" onclick="filterResearchers('STAFF', this)">Staff</button>
    </div>

    <div class="people-grid researchers" id="researchers-grid">
      {% assign researchers = site.people | where: "type", "researcher" %}
      {% for person in researchers %}
        <div class="person-item" data-level="{{ person.level }}">
          {% include person-card-circular.html person=person %}
        </div>
      {% endfor %}
      
      {% assign students = site.people | where: "type", "student" %}
      {% for person in students %}
        <div class="person-item" data-level="{{ person.level }}">
          {% include person-card-circular.html person=person %}
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<script>
function filterResearchers(level, btnElement) {
  // 1. Update button styling
  const buttons = document.querySelectorAll(".paper-filters .filter-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  // 2. Filter the grid
  const items = document.querySelectorAll(".person-item");
  items.forEach((item) => {
    const itemLevel = item.getAttribute("data-level");
    
    if (level === "all" || itemLevel === level) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
</script>