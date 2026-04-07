---
name: "100-longbench"
title: "100-LongBench: Are de facto Long-Context Benchmarks Literally Evaluating Long-Context Ability?"
year: 2025
authors:
  - name: "Wang Yang"
    slug: "wang-van-yang"
  - name: "Hongye Jin"
  - name: "Shaochen Zhong"
  - name: "Song Jiang"
  - name: "Qifan Wang"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Xiaotian Han"

journal: ""
conference: "63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025), July 27-August 1, 2025, Vienna, Austria"

# --- LINKS ---
doi: "10.18653/v1/2025.findings-acl.903"
github: ""
arxiv: "2505.19293"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Existing long-context evaluation benchmarks fail to separate long-context performance from a model's baseline ability, making cross-model comparisons unclear, and are typically constructed with fixed input lengths that limit applicability across models with different context windows. This paper introduces 100-LongBench, a length-controllable long-context benchmark with a novel metric that disentangles baseline knowledge from true long-context capability across multiple task categories. Experiments demonstrate that existing benchmarks significantly conflate baseline model strength with genuine long-context ability, revealing a widespread evaluation gap.

bibtex: |
  @misc{yang2025100longbenchfactolongcontextbenchmarks,
        title={100-LongBench: Are de facto Long-Context Benchmarks Literally Evaluating Long-Context Ability?}, 
        author={Wang Yang and Hongye Jin and Shaochen Zhong and Song Jiang and Qifan Wang and Vipin Chaudhary and Xiaotian Han},
        year={2025},
        eprint={2505.19293},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2505.19293}, 
  }
---