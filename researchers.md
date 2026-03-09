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
        <a href="{{ person.url | relative_url }}" class="person-card">
          <div class="image-wrapper">
            <img src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          </div>
          <div class="person-info">
            <h3>{{ person.name }}</h3>
            <p>{{ person.role }}</p>
          </div>
        </a>
      {% endfor %}
    </div>
  </div>
</div>