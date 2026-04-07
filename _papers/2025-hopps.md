---
name: "hopps"
title: "HOPPS: Hardware-Aware Optimal Phase Polynomial Synthesis with Blockwise Optimization for Quantum Circuits"
year: 2025
authors:
  - name: "Xinpeng Li"
    slug: "xinpeng-li"
  - name: "Ji Liu"
  - name: "Shuai Xu"
  - name: "Paul Hovland"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "IEEE/ACM International Conference on High Performance Computing (SC25), December 17-20, 2025, Hyderabad, India"

# --- LINKS ---
doi: "10.1109/HiPC66333.2025.00010"
github: ""
arxiv: "2511.18770"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Quantum Computing"
  - "HPC"

# --- CONTENT ---
abstract: |
  Blocks composed of CNOT and Rz gates are ubiquitous in modern quantum applications such as QAOA ansatzes and quantum adders, but after compilation they often exhibit large CNOT counts or depths that lower fidelity. This paper introduces HOPPS, a SAT-based hardware-aware optimal phase polynomial synthesis algorithm that generates CNOT/Rz blocks with CNOT count or depth optimality under hardware topology constraints. To address scalability for large circuits, an iterative blockwise optimization strategy partitions large circuits into smaller blocks and optimally refines each—achieving CNOT count reductions up to 50% and depth reductions up to 57.1% when used as a peephole optimizer.

bibtex: |
  @misc{li2025hoppshardwareawareoptimalphase,
        title={HOPPS: Hardware-Aware Optimal Phase Polynomial Synthesis with Blockwise Optimization for Quantum Circuits}, 
        author={Xinpeng Li and Ji Liu and Shuai Xu and Paul Hovland and Vipin Chaudhary},
        year={2025},
        eprint={2511.18770},
        archivePrefix={arXiv},
        primaryClass={quant-ph},
        url={https://arxiv.org/abs/2511.18770}, 
  }
---