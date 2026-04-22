---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "splat2bev"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "Reconstruction Matters: Learning Geometry-Aligned BEV Representation through 3D Gaussian Splatting"
year: 2026                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Yiren Lu"
    slug: "yiren-lu"       # Only add slug if they are a PEAT Lab member
  - name: "Xin Ye"
  - name: "Burhaneddin Yaman"
  - name: "Jingru Luo"
  - name: "Zhexiao Xiong"
  - name: "Liu Ren"
  - name: "Yu Yin" # No slug for people outside the lab
journal: ""                   # Use this OR 'conference'
conference: "arXiv"                # Use this OR 'journal'

# --- LINKS ---
doi: ""                       # Just the ID (e.g., 10.1177/xxxx)
github: ""                    # Just the repo path (e.g., case-peatai/repo-name)
arxiv: "2603.19193"                     # Just the ID (e.g., 2301.xxxx)
paper_page: "https://yiren-lu.com/project_pages/Splat2BEV/"                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "Computer Vision"
  - "Autonomous Driving"

# --- CONTENT ---
abstract: |
  Bird's-Eye-View (BEV) perception serves as a cornerstone for autonomous driving, offering a unified spatial representation that fuses surrounding-view images to enable reasoning for various downstream tasks, such as semantic segmentation, 3D object detection, and motion prediction. However, most existing BEV perception frameworks adopt an end-to-end training paradigm, where image features are directly transformed into the BEV space and optimized solely through downstream task supervision. This formulation treats the entire perception process as a black box, often lacking explicit 3D geometric understanding and interpretability, leading to suboptimal performance. In this paper, we claim that an explicit 3D representation matters for accurate BEV perception, and we propose Splat2BEV, a Gaussian Splatting-assisted framework for BEV tasks. Splat2BEV aims to learn BEV feature representations that are both semantically rich and geometrically precise. We first pre-train a Gaussian generator that explicitly reconstructs 3D scenes from multi-view inputs, enabling the generation of geometry-aligned feature representations. These representations are then projected into the BEV space to serve as inputs for downstream tasks. Extensive experiments on nuScenes and argoverse dataset demonstrate that Splat2BEV achieves state-of-the-art performance and validate the effectiveness of incorporating explicit 3D reconstruction into BEV perception.
---