---
name: "gpu-performance-llm"
title: "Efficient Fine-Grained GPU Performance Modeling for Distributed Deep Learning of LLM"
year: 2025
authors:
  - name: "Biyao Zhang"
    slug: "biyao-zhang"
  - name: "Mingkai Zheng"
  - name: "Debargha Ganguly"
    slug: "debargaha-ganguly"
  - name: "Xuecen Zhang"
  - name: "Vikash Singh"
    slug: "vikash-singh"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Zhao Zhang"

journal: ""
conference: "IEEE/ACM International Conference on High Performance Computing (SC25), December 17-20, 2025, Hyderabad, India"

# --- LINKS ---
doi: "10.1109/HiPC66333.2025.00012"
github: ""
arxiv: "2509.22832"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "HPC"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Training large language models is one of the most compute-intensive tasks in HPC, and predicting end-to-end training time for multi-billion parameter models across hundreds of GPUs is challenging due to complex interactions between transformer components, parallelism strategies, and multi-tier communication. This paper addresses this by decomposing LLMs into core computational primitives and modeling them with operator-level decomposition, lightweight hardware-aware prediction models for key operations, and an end-to-end prediction system integrating these across complex parallelization strategies. The resulting framework enables accurate distributed LLM training performance prediction without costly full-scale sampling.

bibtex: |
  @misc{zhang2025efficientfinegrainedgpuperformance,
        title={Efficient Fine-Grained GPU Performance Modeling for Distributed Deep Learning of LLM}, 
        author={Biyao Zhang and Mingkai Zheng and Debargha Ganguly and Xuecen Zhang and Vikash Singh and Vipin Chaudhary and Zhao Zhang},
        year={2025},
        eprint={2509.22832},
        archivePrefix={arXiv},
        primaryClass={cs.DC},
        url={https://arxiv.org/abs/2509.22832}, 
  }
---