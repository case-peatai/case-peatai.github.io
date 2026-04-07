---
name: "golden-circuit-cutting"
title: "Online Detection of Golden Circuit Cutting Points"
year: 2023
authors:
  - name: "Daniel Chen"
  - name: "Ethan Hansen"
  - name: "Xinpeng Li"
    slug: "xinpeng-li"
  - name: "Aaron Orenstein"
  - name: "Vinooth Kulkarni"
    slug: "vinooth-kulkarni"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Qiang Guan"
  - name: "Ji Liu"
  - name: "Yang Zhang"
  - name: "Shuai Xu"

journal: ""
conference: "IEEE International Conference on Quantum Computing and Engineering (QCE23), September 2023, Seattle, Washington, USA"

# --- LINKS ---
doi: "10.1109/SCI68648.2025.11333863"
github: ""
arxiv: "2308.10153"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Quantum Computing"
  - "HPC"

# --- CONTENT ---
abstract: |
  Quantum circuit cutting enables large circuits to run on small quantum devices, but reconstructing measurement statistics requires computational resources that grow exponentially with the number of cuts. This paper introduces the concept of a golden cutting point—circuit structures that induce negligible basis components during reconstruction, allowing those downstream computations to be avoided entirely. A hypothesis-testing scheme is proposed for online detection of golden cutting points, with robustness results for low-probability test failures, and demonstrated applicability on Qiskit's Aer simulator achieving reduced wall time from identifying and avoiding obsolete measurements.

bibtex: |
  @misc{chen2023onlinedetectiongoldencircuit,
        title={Online Detection of Golden Circuit Cutting Points}, 
        author={Daniel T. Chen and Ethan H. Hansen and Xinpeng Li and Aaron Orenstein and Vinooth Kulkarni and Vipin Chaudhary and Qiang Guan and Ji Liu and Yang Zhang and Shuai Xu},
        year={2023},
        eprint={2308.10153},
        archivePrefix={arXiv},
        primaryClass={quant-ph},
        url={https://arxiv.org/abs/2308.10153}, 
  }
---