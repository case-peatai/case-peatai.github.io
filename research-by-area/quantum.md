---
layout: default
title: Quantum Computing Research
---

<div class="main-content">
  <div class="research-area-section">
    <h1>Quantum Computing</h1>
    
    <p class="area-description">
      Our research in quantum computing focuses on developing practical algorithms, optimization techniques, 
      and software tools to accelerate the transition from NISQ (Noisy Intermediate-Scale Quantum) devices 
      to fault-tolerant quantum computers.
    </p>

    {% assign quantum_papers = site.papers | where_exp: "paper", "paper.research_areas contains 'Quantum Computing'" | sort: "year" | reverse %}
    
    {% if quantum_papers.size > 0 %}
    <div class="papers-list">
      {% for paper in quantum_papers %}
      <div class="paper-item">
        {% include research-paper-card.html paper=paper %}
      </div>
      {% endfor %}
    </div>
    {% else %}
    <p>No papers found in this research area yet.</p>
    {% endif %}

  </div>
</div>

<style>
  .research-area-section {
    max-width: 900px;
    margin: 0 auto;
  }

  .area-description {
    font-size: 1.05rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
    padding: 20px;
    background: #f9f9f9;
    border-left: 4px solid var(--cwru-blue);
    border-radius: 0 4px 4px 0;
  }

  .papers-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .paper-item {
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>