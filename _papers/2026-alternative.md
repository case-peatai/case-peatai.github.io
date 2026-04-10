---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "alternative-decomposed-message-passing-for-efficient-geometric-gnns"
title: "Alternative Decomposed Message Passing for Efficient Geometric GNNs"
year: 2026
authors:
  - name: "Kutay Tasci"
    slug: "kutay-tasci"
  - name: "Sanmukh Kuppannagari"

journal: ""
conference: "IEEE IPDPS 2026 Workshops (GrAPL)"

# --- LINKS ---
doi: ""
github: ""
arxiv: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "HPC"

# --- CONTENT ---
abstract:
  This paper proposes an alternative decomposed message-passing framework for improving the efficiency of geometric graph neural networks. Instead of relying on concatenation-based message generation, the method decomposes node-, edge-, and angle-level transformations into reusable components, reducing redundant computation and memory overhead while preserving algebraic equivalence. The framework is designed for efficient GPU execution and serves as a drop-in replacement for representative architectures such as EGNN and CHGNet. Experimental results show up to 2x training speedup and 60% end-to-end memory reduction with no loss in accuracy across diverse geometric learning workloads.
---