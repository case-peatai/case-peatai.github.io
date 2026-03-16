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
        {% include person-card-square.html person=person %}
      {% endfor %}
    </div>
  </div>
</div>