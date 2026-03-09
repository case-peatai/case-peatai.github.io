---
layout: default
title: Faculty
---

<div class="main-content">
  <div class="people-section">
    <h1>Faculty</h1>
    <div class="people-grid faculty">
      {% assign faculty = site.people | where: "type", "faculty" %}
      {% for person in faculty %}
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