---
name: "grammars-uncertainty"
title: "Grammars of Formal Uncertainty: When to Trust LLMs in Automated Reasoning Tasks"
year: 2025
authors:
  - name: "Debargha Ganguly"
    slug: "debargha-ganguly"
  - name: "Vikash Singh"
    slug: "vikash-singh"
  - name: "Sreehari Sankar"
  - name: "Biyao Zhang"
    slug: "biyao-zhang"
  - name: "Xuecen Zhang"
  - name: "Srinivasan Iyengar"
  - name: "Xiaotian Han"
  - name: "Amit Sharma"
  - name: "Shivkumar Kalyanaraman"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "39th Conference on Neural Information Processing Systems (NeurIPS 2025), December 2025"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2505.20047"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "Trustworthy AI"

# --- CONTENT ---
abstract: |
  Large language models show remarkable promise for automated reasoning by generating formal specifications, but a fundamental tension exists between their probabilistic nature and the deterministic guarantees required by formal verification. This paper comprehensively investigates failure modes and uncertainty quantification in LLM-generated formal artifacts, revealing that SMT-based autoformalization has highly domain-specific accuracy impacts ranging from +34.8% on logical tasks to −44.5% on factual ones. A probabilistic context-free grammar (PCFG) framework is introduced to model LLM outputs and yield a refined uncertainty taxonomy, finding that uncertainty signals are task-dependent—for example, grammar entropy for logic achieves AUROC > 0.93.

bibtex: |
  @misc{ganguly2025grammarsformaluncertaintytrust,
        title={Grammars of Formal Uncertainty: When to Trust LLMs in Automated Reasoning Tasks}, 
        author={Debargha Ganguly and Vikash Singh and Sreehari Sankar and Biyao Zhang and Xuecen Zhang and Srinivasan Iyengar and Xiaotian Han and Amit Sharma and Shivkumar Kalyanaraman and Vipin Chaudhary},
        year={2025},
        eprint={2505.20047},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2505.20047}, 
  }
---