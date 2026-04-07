---
name: "causalrag"
title: "CausalRAG: Integrating Causal Graphs into Retrieval-Augmented Generation"
year: 2025
authors:
  - name: "Nengbo Wang"
  - name: "Xiaotian Han"
  - name: "Jagdip Singh"
  - name: "Jing Ma"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025), July 27-August 1, 2025, Vienna, Austria"

# --- LINKS ---
doi: "10.18653/v1/2025.findings-acl.1165"
github: ""
arxiv: "2503.19878"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Traditional RAG systems face critical limitations including disrupted contextual integrity from text chunking and over-reliance on semantic similarity for retrieval. This paper proposes CausalRAG, a novel framework that incorporates causal graphs into the retrieval process, constructing and tracing cause-effect relationships to preserve contextual continuity and improve retrieval precision. Evaluated against regular RAG and graph-based RAG approaches across multiple metrics including answer faithfulness and context precision, CausalRAG demonstrates consistent superiority, showing that causal grounding is a promising direction for knowledge-intensive tasks.

bibtex: |
  @misc{wang2025causalragintegratingcausalgraphs,
        title={CausalRAG: Integrating Causal Graphs into Retrieval-Augmented Generation}, 
        author={Nengbo Wang and Xiaotian Han and Jagdip Singh and Jing Ma and Vipin Chaudhary},
        year={2025},
        eprint={2503.19878},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2503.19878}, 
  }
---