---
name: "approximate-quantum-circuit"
title: "Approximate Quantum Circuit Reconstruction"
year: 2022
authors:
  - name: "Daniel Chen"
  - name: "Betis Baheri"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Qiang Guan"
  - name: "Ning Xie"
  - name: "Shuai Xu"

journal: ""
conference: "IEEE International Conference on Quantum Computing and Engineering (QCE22), September 2022, Colorado, USA"

# --- LINKS ---
doi: "10.1109/QCE53715.2022.00073"
github: ""
arxiv: "2212.01270"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Quantum Computing"
  - "HPC"

# --- CONTENT ---
abstract: |
  Current and imminent quantum hardware lacks reliability due to noise and limited qubit counts, and quantum circuit cutting—which divides large circuits into smaller subcircuits—faces exponential classical post-processing overhead. This paper introduces approximate circuit reconstruction using a sampling-based method (MCMC) to probabilistically select high-probability bit strings during reconstruction, avoiding excessive calculations for the full probability distribution. Results show that this sampling-based post-processing holds great potential for fast and reliable circuit reconstruction in the NISQ era and beyond.

bibtex: |
  @misc{chen2022approximatequantumcircuitcutting,
        title={Approximate Quantum Circuit Cutting}, 
        author={Daniel Chen and Betis Baheri and Vipin Chaudhary and Qiang Guan and Ning Xie and Shuai Xu},
        year={2022},
        eprint={2212.01270},
        archivePrefix={arXiv},
        primaryClass={quant-ph},
        url={https://arxiv.org/abs/2212.01270}, 
  }
---