---
name: "dont-pass-k"
title: "Don't Pass@k: A Bayesian Framework for Large Language Model Evaluation"
year: 2026
authors:
  - name: "Mohsen Hariri"
    slug: "mohsen-hariri"
  - name: "Amirhossein Samandar"
  - name: "Michael Hinczewski"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "14th International Conference on Learning Representations (ICLR), April 23-27, 2026, Rio De Janeiro, Brazil"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2510.04265"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "Trustworthy AI"

# --- CONTENT ---
abstract: |
  Pass@k is widely used to report LLM reasoning performance but often yields unstable and misleading rankings, especially when trial counts are limited and compute is constrained. This paper proposes a principled Bayesian evaluation framework that replaces Pass@k with posterior estimates of a model's underlying success probability and credible intervals, using a Dirichlet prior to give closed-form expressions for posterior mean and uncertainty under any weighted rubric. Empirically, on AIME'24/'25, HMMT'25, and BrUMO'25, the Bayesian approach achieves faster convergence and greater rank stability than Pass@k, enabling reliable model comparisons at far smaller sample counts. The framework also naturally extends to graded, rubric-based evaluations, making uncertainty explicit.

bibtex: |
  @inproceedings{
  hariri2026dont,
  title={Don{\textquoteright}t Pass@\$k\$: A Bayesian Framework for Large Language Model Evaluation},
  author={Mohsen Hariri and Amirhossein Samandar and Michael Hinczewski and Vipin Chaudhary},
  booktitle={The Fourteenth International Conference on Learning Representations},
  year={2026},
  url={https://openreview.net/forum?id=PTXi3Ef4sT}
  }
---