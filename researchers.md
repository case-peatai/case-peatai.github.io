---
layout: default
title: Researchers
---

<div class="main-content">
  <div class="people-section">
    <h1>Researchers</h1>
    
    <div class="people-grid researchers">
      {% assign researchers = site.people | where: "type", "researcher" %}
      {% for person in researchers %}
        {% include person-card-circular.html person=person %}
      {% endfor %}
    </div>
  </div>
</div>