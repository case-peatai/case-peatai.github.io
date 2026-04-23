---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "2026-ipdps"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "Achieving Low Latency Inference on High Resolution Images by Exploiting Sparsity in Vision Transformers"
year: 2024                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Changxin Li"
    slug: "changxin-li"       # Only add slug if they are a PEAT Lab member
  - name: "Sanmukh Kuppannagari" # No slug for people outside the lab
    slug: "sanmukh-kuppannagari"
# journal: "Journal Name"       # Use this OR 'conference'
conference: "40th IEEE International Parallel & Distributed Processing Symposium (IPDPS)"                # Use this OR 'journal'

# --- LINKS ---
doi: "https://doi.org/10.5281/zenodo.18688333"                       # Just the ID (e.g., 10.1177/xxxx)
github: "KLab-AI3/ipdps-26_vit"                    # Just the repo path (e.g., case-peatai/repo-name)
# arxiv: ""                     # Just the ID (e.g., 2301.xxxx)
# paper_page: "https://github.com/KLab-AI3/ipdps-26_vit"                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "HPC"

# --- CONTENT ---
abstract: |
  This paper presents a tile-aware sparse attention scheduling framework for improving the efficiency of structured sparse vision transformers on GPUs. The method represents attention masks as adjacency matrices, applies structure-aware reordering to expose dense computation blocks, and uses offline profiling with Integer Linear Programming (ILP) to select optimal tile shapes under hardware constraints. Integrated into models such as Vision Longformer, RegionViT, and DynamicViT, the framework achieves up to 2.1× end-to-end latency speedup over fixed-tile FlashAttention. The results show that aligning sparse attention computation with both sparsity structure and GPU characteristics can substantially improve inference efficiency.
---


