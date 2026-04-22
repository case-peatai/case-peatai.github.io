---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "bardgs"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "BARD-GS: Blur-Aware Reconstruction of Dynamic Scenes via Gaussian Splatting"
year: 2025                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Yiren Lu"
    slug: "yiren-lu"       # Only add slug if they are a PEAT Lab member
  - name: "Yunlai Zhou"
  - name: "Disheng Liu"
  - name: "Tuo Liang"
  - name: "Yu Yin" # No slug for people outside the lab
journal: ""                   # Use this OR 'conference'
conference: "CVPR"                # Use this OR 'journal'

# --- LINKS ---
doi: ""                       # Just the ID (e.g., 10.1177/xxxx)
github: ""                    # Just the repo path (e.g., case-peatai/repo-name)
arxiv: "2503.15835"                     # Just the ID (e.g., 2301.xxxx)
paper_page: "https://yiren-lu.com/project_pages/BARD-GS/"                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "Computer Vision"
  - "3D Reconstruction"

# --- CONTENT ---
abstract: |
  3D Gaussian Splatting (3DGS) has shown remarkable potential for static scene reconstruction, and recent advancements have extended its application to dynamic scenes. However, the quality of reconstructions depends heavily on high-quality input images and precise camera poses, which is not that trivial to fulfill in the real-world scenarios. Capturing dynamic scenes with handheld monocular cameras, for instance, typically involves simultaneous movement of both the camera and objects within a single exposure. This combined motion frequently results in image blur that existing methods cannot adequately handle. To address these challenges, we introduce BARD-GS, a novel approach for robust dynamic scene reconstruction that effectively handles blurry inputs and imprecise camera poses. BARD-GS comprises two main components: 1) camera motion deblurring and 2) object motion deblurring. By explicitly decomposing motion blur into camera motion blur and object motion blur and modeling them separately, we achieve significantly improved rendering results in dynamic regions. In addition, we collect a real-world motion blur dataset of dynamic scenes to evaluate our approach. Extensive experiments demonstrate that BARD-GS effectively reconstructs high-quality dynamic scenes under realistic conditions, significantly outperforming existing methods.
---