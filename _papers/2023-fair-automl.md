---
name: "fair-automl"
title: "Fix Fairness, Don't Ruin Accuracy: Performance Aware Fairness Repair using AutoML"
year: 2023
authors:
  - name: "Giang Nguyen"
  - name: "Sumon Biswas"
    slug: "sumon-biswas"
  - name: "Hridesh Rajan"
journal: ""
conference: "31st ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE)"

# --- LINKS ---
doi: "10.1145/3611643.3616257"
github: "giangnm58/Fair-AutoML"
arxiv: "2306.09297"
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Trustworthy AI"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Machine learning (ML) is increasingly being used in critical decision-making
  software, but incidents have raised questions about the fairness of ML
  predictions. To address this issue, new tools and methods are needed to
  mitigate bias in ML-based software. Previous studies have proposed bias
  mitigation algorithms that only work in specific situations and often result
  in a loss of accuracy. Our proposed solution is a novel approach that utilizes
  automated machine learning (AutoML) techniques to mitigate bias. Our approach
  includes two key innovations: a novel optimization function and a fairness-
  aware search space. By improving the default optimization function of AutoML
  and incorporating fairness objectives, we are able to mitigate bias with
  little to no loss of accuracy. Additionally, we propose a fairness-aware
  search space pruning method for AutoML to reduce computational cost and repair
  time. Our approach, built on the state-of-the-art Auto-Sklearn tool, is
  designed to reduce bias in real-world scenarios. In order to demonstrate the
  effectiveness of our approach, we evaluated our approach on four fairness
  problems and 16 different ML models, and our results show a significant
  improvement over the baseline and existing bias mitigation techniques. Our
  approach, Fair-AutoML, successfully repaired 60 out of 64 buggy cases, while
  existing bias mitigation techniques only repaired up to 44 out of 64 cases.
---
