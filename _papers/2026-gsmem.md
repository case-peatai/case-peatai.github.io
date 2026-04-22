---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "gsmem"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "GSMem: 3D Gaussian Splatting as Persistent Spatial Memory for Zero-Shot Embodied Exploration and Reasoning"
year: 2026                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Yiren Lu"
    slug: "yiren-lu"       # Only add slug if they are a PEAT Lab member
  - name: "Yi Du"
  - name: "Disheng Liu"
  - name: "Yunlai Zhou"
  - name: "Chen Wang"
  - name: "Yu Yin" # No slug for people outside the lab
journal: ""                   # Use this OR 'conference'
conference: "arXiv"                # Use this OR 'journal'

# --- LINKS ---
doi: ""                       # Just the ID (e.g., 10.1177/xxxx)
github: ""                    # Just the repo path (e.g., case-peatai/repo-name)
arxiv: "2603.19137"                     # Just the ID (e.g., 2301.xxxx)
paper_page: "https://yiren-lu.com/project_pages/GSMem/"                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "Computer Vision"
  - "Embodied AI"

# --- CONTENT ---
abstract: |
  Effective embodied exploration requires agents to accumulate and retain spatial knowledge over time. However, existing scene representations, such as discrete scene graphs or static view-based snapshots, lack post-hoc re-observability. If an initial observation misses a target, the resulting memory omission is often irrecoverable. To bridge this gap, we propose GSMem, a zero-shot embodied exploration and reasoning framework built upon 3D Gaussian Splatting (3DGS). By explicitly parameterizing continuous geometry and dense appearance, 3DGS serves as a persistent spatial memory that endows the agent with Spatial Recollection: the ability to render photorealistic novel views from optimal, previously unoccupied viewpoints. To operationalize this, GSMem employs a retrieval mechanism that simultaneously leverages parallel object-level scene graphs and semantic-level language fields. This complementary design robustly localizes target regions, enabling the agent to “hallucinate” optimal views for high-fidelity Vision-Language Model (VLM) reasoning. Furthermore, we introduce a hybrid exploration strategy that combines VLM-driven semantic scoring with a 3DGS-based coverage objective, balancing task-aware exploration with geometric coverage. Extensive experiments on embodied question answering and lifelong navigation demonstrate the robustness and effectiveness of our framework.
---