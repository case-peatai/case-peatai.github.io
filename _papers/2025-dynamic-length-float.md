---
name: "dynamic-length-float"
title: "70% Size, 100% Accuracy: Lossless LLM Compression for Efficient GPU Inference via Dynamic-Length Float"
year: 2025
authors:
  - name: "Tianyi Zhang"
  - name: "Mohsen Hariri"
    slug: "mohsen-hariri"
  - name: "Shaochen Zhong"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Yang Sui"
  - name: "Xia Hu"
  - name: "Anshumali Shrivastava"

journal: ""
conference: "39th Conference on Neural Information Processing Systems (NeurIPS 2025), December 2025"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2504.11651"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "HPC"

# --- CONTENT ---
abstract: |
  Large-scale AI models have grown rapidly in size, creating significant challenges for deployment on resource-constrained hardware. This paper introduces Dynamic-Length Float (DFloat11), a lossless compression framework that reduces LLM size by 30% while preserving outputs that are bit-for-bit identical to the original model, exploiting the low entropy in BFloat16 weight representations through entropy coding and dynamic-length encodings. A custom GPU kernel enables fast online decompression, and experiments on Llama 3.3, Qwen 3, and Mistral 3 validate 30% size reduction with 2.3–46.2× higher throughput than CPU offloading—notably enabling lossless inference of Llama 3.1 405B on a single 8×80GB GPU node.

bibtex: |
  @misc{zhang202670size100accuracy,
        title={70% Size, 100% Accuracy: Lossless LLM Compression for Efficient GPU Inference via Dynamic-Length Float (DFloat11)}, 
        author={Tianyi Zhang and Mohsen Hariri and Shaochen Zhong and Vipin Chaudhary and Yang Sui and Xia Hu and Anshumali Shrivastava},
        year={2026},
        eprint={2504.11651},
        archivePrefix={arXiv},
        primaryClass={cs.LG},
        url={https://arxiv.org/abs/2504.11651}, 
  }
---