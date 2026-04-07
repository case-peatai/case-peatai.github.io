---
name: "vqe-parameters-reuse"
title: "Accelerating VQE Algorithms via Parameters and Measurement Reuse"
year: 2023
authors:
  - name: "Xinpeng Li"
    slug: "xinpeng-li"
  - name: "Ji Liu"
  - name: "Ethan Hansen"
  - name: "Shuai Xu"
  - name: "Paul Hovland"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "8th International Conference on Rebooting Computing (ICRC), December 2023, San Diego, CA"

# --- LINKS ---
doi: "10.1109/ICRC60800.2023.10386370"
github: ""
arxiv: ""
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Quantum Computing"
  - "HPC"

# --- CONTENT ---
abstract: |
  Variational Quantum Eigensolver algorithms require many quantum circuit executions to converge, creating significant overhead on current quantum hardware. This paper accelerates VQE by reusing parameters and measurement results across iterations, reducing the number of quantum circuit executions required for convergence without sacrificing solution quality. The approach is validated on standard molecular simulation benchmarks, demonstrating meaningful reduction in quantum resource requirements.

bibtex: |
  @INPROCEEDINGS{10386370,
    author={Li, Xinpeng and Liu, Ji and Hansen, Ethan H. and Xu, Shuai and Hovland, Paul and Chaudhary, Vipin},
    booktitle={2023 IEEE International Conference on Rebooting Computing (ICRC)}, 
    title={Accelerating VQE Algorithm via Parameters and Measurement Reuse}, 
    year={2023},
    volume={},
    number={},
    pages={1-5},
    keywords={Quantum algorithm;Scalability;Quantum chemistry;Task analysis;Optimization;Variational Quantum Eigensolvers;Combinatorial Optimization;Variational Quantum Algorithms},
    doi={10.1109/ICRC60800.2023.10386370}}
---