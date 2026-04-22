---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "segment-then-splat"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "Segment then Splat: Unified 3D Open-Vocabulary Segmentation via Gaussian Splatting"
year: 2025                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Yiren Lu"
    slug: "yiren-lu"       # Only add slug if they are a PEAT Lab member
  - name: "Yunlai Zhou"
  - name: "Yiran Qiao"
  - name: "Chaoda Song"
  - name: "Tuo Liang"
  - name: "Jing Ma"
  - name: "Huan Wang"
  - name: "Yu Yin" # No slug for people outside the lab
journal: ""                   # Use this OR 'conference'
conference: "NeurIPS"                # Use this OR 'journal'

# --- LINKS ---
doi: ""                       # Just the ID (e.g., 10.1177/xxxx)
github: ""                    # Just the repo path (e.g., case-peatai/repo-name)
arxiv: "2503.22204"                     # Just the ID (e.g., 2301.xxxx)
paper_page: "https://yiren-lu.com/project_pages/Segment-then-Splat/"                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "Computer Vision"
  - "3D Reconstruction"
  - "3D Scene Understanding"

# --- CONTENT ---
abstract: |
  Open-vocabulary querying in 3D space is crucial for enabling more intelligent perception in applications such as robotics, autonomous systems, and augmented reality. However, most existing methods rely on 2D pixel-level parsing, leading to multi-view inconsistencies and poor 3D object retrieval. Moreover, they are limited to static scenes and struggle with dynamic scenes due to the complexities of motion modeling. In this paper, we propose Segment-then-Splat, a 3D-aware open vocabulary segmentation approach for both static and dynamic scenes based on Gaussian Splatting. Segment-then-Splat reverses the long established approach of segmentation after reconstruction by dividing Gaussians into distinct object sets before reconstruction. Once the reconstruction is complete, the scene is naturally segmented into individual objects, achieving true 3D segmentation. This approach not only eliminates Gaussian-object misalignment issues in dynamic scenes but also accelerates the optimization process, as it eliminates the need for learning a separate language field. After optimization, a CLIP embedding is assigned to each object to enable open-vocabulary querying. Extensive experiments on various datasets demonstrate the effectiveness of our proposed method in both static and dynamic scenarios.
---