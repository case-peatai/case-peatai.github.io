---
name: "kv-cache-compression"
title: "KV Cache Compression, But What Must We Give in Return? A Comprehensive Benchmark of Long Context Capable Approaches"
year: 2024
authors:
  - name: "Jiayi Yuan"
  - name: "Hongyi Liu"
  - name: "Shaochen Zhong"
  - name: "Yu-Neng Chuang"
  - name: "Songchen Li"
  - name: "Guanchu Wang"
  - name: "Duy Le"
  - name: "Hongye Jin"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Zhaozhuo Xu"
  - name: "Zirui Liu"
  - name: "Xia Hu"

journal: ""
conference: "Findings of EMNLP 2024, November 12-16, 2024, Miami, USA"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2407.01527"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "HPC"

# --- CONTENT ---
abstract: |
  Long-context capability is critical for LLMs, but transformer architectures face significant challenges due to growing KV cache size and the complexity of attending to extended inputs. This paper provides a comprehensive taxonomy and benchmark evaluation of 10+ state-of-the-art approaches across seven long-context task categories—including KV cache quantization, token dropping, prompt compression, linear-time sequence models, and hybrid architectures—evaluated in a unified, aligned environment. The work reveals numerous previously unknown phenomena and offers a practical workbench and insights for the future development of long-context-capable LLMs.

bibtex: |
  @misc{yuan2024kvcachecompressionreturn,
        title={KV Cache Compression, But What Must We Give in Return? A Comprehensive Benchmark of Long Context Capable Approaches}, 
        author={Jiayi Yuan and Hongyi Liu and Shaochen Zhong and Yu-Neng Chuang and Songchen Li and Guanchu Wang and Duy Le and Hongye Jin and Vipin Chaudhary and Zhaozhuo Xu and Zirui Liu and Xia Hu},
        year={2024},
        eprint={2407.01527},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2407.01527}, 
  }
---