---
name: "crowdsourced-model-fairness"
title: "Do the Machine Learning Models on a Crowd Sourced Platform Exhibit Bias? An Empirical Study on Model Fairness"
year: 2020
authors:
  - name: "Sumon Biswas"
    slug: "sumon-biswas"
  - name: "Hridesh Rajan"
journal: ""
conference: "28th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE)"

# --- LINKS ---
doi: "10.1145/3368089.3409704"
github: "sumonbis/ML-Fairness"
arxiv: "2005.12379"
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Trustworthy AI"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Machine learning models are increasingly being used in important decision-
  making software such as approving bank loans, recommending criminal
  sentencing, hiring employees, and so on. It is important to ensure the
  fairness of these models so that no discrimination is made based on protected
  attribute (e.g., race, sex, age) while decision making. Algorithms have been
  developed to measure unfairness and mitigate them to a certain extent. In this
  paper, we have focused on the empirical evaluation of fairness and mitigations
  on real-world machine learning models. We have created a benchmark of 40 top-
  rated models from Kaggle used for 5 different tasks, and then using a
  comprehensive set of fairness metrics, evaluated their fairness. Then, we have
  applied 7 mitigation techniques on these models and analyzed the fairness,
  mitigation results, and impacts on performance. We have found that some model
  optimization techniques result in inducing unfairness in the models. On the
  other hand, although there are some fairness control mechanisms in machine
  learning libraries, they are not documented. The mitigation algorithm also
  exhibit common patterns such as mitigation in the post-processing is often
  costly (in terms of performance) and mitigation in the pre-processing stage is
  preferred in most cases. We have also presented different trade-off choices of
  fairness mitigation decisions. Our study suggests future research directions
  to reduce the gap between theoretical fairness aware algorithms and the
  software engineering methods to leverage them in practice.
---
