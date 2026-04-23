---
name: "fairsense"
title: "FairSense: Long-Term Fairness Analysis of ML-Enabled Systems"
year: 2025
authors:
  - name: "Yining She"
  - name: "Sumon Biswas"
    slug: "sumon-biswas"
  - name: "Christian Kästner"
  - name: "Eunsuk Kang"
journal: ""
conference: "47th International Conference on Software Engineering (ICSE)"

# --- LINKS ---
doi: "10.1109/ICSE55347.2025.00159"
github: "cmu-soda/FairSense"
arxiv: "2501.01665"
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Trustworthy AI"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Algorithmic fairness of machine learning (ML) models has raised significant
  concern in the recent years. Many testing, verification, and bias mitigation
  techniques have been proposed to identify and reduce fairness issues in ML
  models. The existing methods are model-centric and designed to detect fairness
  issues under static settings. However, many ML-enabled systems operate in a
  dynamic environment where the predictive decisions made by the system impact
  the environment, which in turn affects future decision-making. Such a self-
  reinforcing feedback loop can cause fairness violations in the long term, even
  if the immediate outcomes are fair. In this paper, we propose a simulation-
  based framework called FairSense to detect and analyze long-term unfairness in
  ML-enabled systems. Given a fairness requirement, FairSense performs Monte-
  Carlo simulation to enumerate evolution traces for each system configuration.
  Then, FairSense performs sensitivity analysis on the space of possible
  configurations to understand the impact of design options and environmental
  factors on the long-term fairness of the system. We demonstrate FairSense's
  potential utility through three real-world case studies: Loan lending, opioids
  risk scoring, and predictive policing.
---
