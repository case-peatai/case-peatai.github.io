---
name: "ranking-reasoning-llms-test-time-scaling"
title: "Ranking Reasoning LLMs under Test-Time Scaling"
year: 2026
authors:
  - name: "Mohsen Hariri"
    slug: "mohsen-hariri"
  - name: "Michael Hinczewski"
  - name: "Jing Ma"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "ACL 2026 Main"

doi: ""
github: "mohsenhariri/scorio"
arxiv: "2603.10960"
openreview: ""
paper_page: ""

research_areas:
  - "Artificial Intelligence"
  - "Trustworthy AI"

abstract: |
  This paper studies how to rank reasoning large language models when evaluation
  uses multiple stochastic samples per prompt under test-time scaling. It
  formalizes dense benchmark ranking in this repeated-trial setting and
  introduces Scorio, a library that implements Bayesian, paired-comparison,
  psychometric, voting, and spectral ranking methods. Across twenty reasoning
  models and four Olympiad-style math benchmarks, the study shows that many
  full-trial rankings closely match a Bayesian gold standard while low-budget
  methods can be less stable. The results provide practical guidance for
  reliable model ranking under both high- and low-budget evaluation settings.

bibtex: |
  @inproceedings{hariri2026ranking,
    title={Ranking Reasoning LLMs under Test-Time Scaling},
    author={Mohsen Hariri and Michael Hinczewski and Jing Ma and Vipin Chaudhary},
    booktitle={ACL 2026 Main},
    year={2026},
    url={https://arxiv.org/abs/2603.10960}
  }
---
