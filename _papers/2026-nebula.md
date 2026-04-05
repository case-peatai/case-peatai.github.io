---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "2026-nebula"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "NEBULA: Do We Evaluate Vision-Language-Action Agents Correctly?"
year: 2026                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Jierui Peng"
    slug: "jerry-peng"       # Only add slug if they are a PEAT Lab member
  - name: "Yanyan Zhang" # No slug for people outside the lab
    slug: "yanyan-zhang"
  - name: "Tuo Liang"
    slug: "tuo-liang"
journal: "arXiv preprint arXiv:2510.16263"       # Use this OR 'conference'
conference: ""                # Use this OR 'journal'

# --- LINKS ---
doi: ""                       # Just the ID (e.g., 10.1177/xxxx)
github: "https://github.com/JerryPeng0201/NEBULA"                    # Just the repo path (e.g., case-peatai/repo-name)
arxiv: "https://arxiv.org/abs/2510.16263"                     # Just the ID (e.g., 2301.xxxx)
paper_page: ""                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  This paper introduces NEBULA, a unified ecosystem for evaluating Vision-Language-Action (VLA) agents beyond coarse end-task success metrics. It proposes a novel dual-axis evaluation framework that combines fine-grained capability tests for skill-specific diagnosis with systematic stress tests to measure robustness under real-world perturbations. In addition, NEBULA standardizes fragmented embodied AI datasets through a unified data format and API, enabling reproducible cross-dataset training and benchmarking. Experimental results reveal that state-of-the-art VLA models exhibit significant hidden weaknesses in critical capabilities such as spatial reasoning and dynamic adaptation, highlighting the need for more interpretable and reliability-aware evaluation.  [oai_citation:0‡ICLR_2026_Nebula_Final.pdf](sediment://file_000000002e8c722f8ce2ecef4cc5af26)
---