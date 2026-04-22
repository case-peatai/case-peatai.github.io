---
name: "quantize-what-counts"
title: "Quantize What Counts: More for Keys, Less for Values"
year: 2026
authors:
  - name: "Mohsen Hariri"
    slug: "mohsen-hariri"
  - name: "Alan Luo"
  - name: "Weicong Chen"
  - name: "Shaochen Zhong"
  - name: "Tianyi Zhang"
  - name: "Qifan Wang"
  - name: "Xia Hu"
  - name: "Xiaotian Han"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "ACL 2026 Findings"

doi: ""
github: "mohsenhariri/spectral-kv"
arxiv: "2502.15075"
openreview: ""
paper_page: "https://mohsenhariri.github.io/papers/2025-10-20-more-keys-less-values.html"

research_areas:
  - "Artificial Intelligence"
  - "HPC"

abstract: |
  This work studies asymmetric KV-cache quantization for large language models
  and shows that key tensors carry more information than value tensors. The
  analysis motivates allocating more bits and stronger outlier handling to keys
  than to values, instead of quantizing both sides identically. Experiments show
  that key-favored bit allocation preserves much more accuracy at the same
  memory budget. The paper provides both theoretical motivation and practical
  guidance for more efficient LLM inference.

bibtex: |
  @inproceedings{hariri2026quantize,
    title={Quantize What Counts: More for Keys, Less for Values},
    author={Mohsen Hariri and Alan Luo and Weicong Chen and Shaochen Zhong and Tianyi Zhang and Qifan Wang and Xia Hu and Xiaotian Han and Vipin Chaudhary},
    booktitle={ACL 2026 Findings},
    year={2026},
    url={https://arxiv.org/abs/2502.15075}
  }
---
