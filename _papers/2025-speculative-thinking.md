---
name: "speculative-thinking"
title: "Speculative Thinking: Enhancing Small-Model Reasoning with Large Model Guidance at Inference Time"
year: 2025
authors:
  - name: "Van Yang"
    slug: "wang-van-yang"
  - name: "Xiang Yue"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Xiaotian Han"

journal: ""
conference: "Conference on Language Modeling (COLM), October 7-10, 2025, Montreal, Canada"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2504.12329"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Recent advances in post-training enhance model reasoning but require costly training pipelines and produce inefficient, overly lengthy outputs. This paper introduces Speculative Thinking, a training-free framework enabling large reasoning models to guide smaller ones during inference at the reasoning level—distinct from token-level speculative decoding—by identifying structural cues such as paragraph breaks followed by reflective phrases where small models struggle and delegating those steps to a larger model. The method significantly boosts smaller model reasoning accuracy while shortening output length, offering an efficient inference-time paradigm that preserves the small model's compute efficiency.

bibtex: |
  @misc{yang2025speculativethinkingenhancingsmallmodel,
        title={Speculative Thinking: Enhancing Small-Model Reasoning with Large Model Guidance at Inference Time}, 
        author={Wang Yang and Xiang Yue and Vipin Chaudhary and Xiaotian Han},
        year={2025},
        eprint={2504.12329},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2504.12329}, 
  }
---