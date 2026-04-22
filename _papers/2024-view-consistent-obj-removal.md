---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "view-consistent-obj-removal"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "View-Consistent Object Removal in Radiance Fields"
year: 2024                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Yiren Lu"
    slug: "yiren-lu"       # Only add slug if they are a PEAT Lab member
  - name: "Jing Ma"
  - name: "Yu Yin" # No slug for people outside the lab
journal: ""                   # Use this OR 'conference'
conference: "ACM Multimedia (MM)"                # Use this OR 'journal'

# --- LINKS ---
doi: ""                       # Just the ID (e.g., 10.1177/xxxx)
github: ""                    # Just the repo path (e.g., case-peatai/repo-name)
arxiv: "2408.02100"                     # Just the ID (e.g., 2301.xxxx)
paper_page: "https://yiren-lu.com/project_pages/View-consistent_Object_Removal_in_Radiance_Fields/"                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "Computer Vision"
  - "3D Reconstruction"
  - "3D Editing"

# --- CONTENT ---
abstract: |
  Radiance Fields (RFs) have emerged as a crucial technology for 3D scene representation, enabling the synthesis of novel views with remarkable realism. However, as RFs become more widely used, the need for effective editing techniques that maintain coherence across different perspectives becomes evident. Current methods primarily depend on per-frame 2D image inpainting, which often fails to maintain consistency across views, thus compromising the realism of edited RF scenes. In this work, we introduce a novel RF editing pipeline that significantly enhances consistency by requiring the inpainting of only a single reference image. This image is then projected across multiple views using a depth-based approach, effectively reducing the inconsistencies observed with per-frame inpainting. However, projections typically assume photometric consistency across views, which is often impractical in real-world settings. To accommodate realistic variations in lighting and viewpoint, our pipeline adjusts the appearance of the projected views by generating multiple directional variants of the inpainted image, thereby adapting to different photometric conditions. Additionally, we present an effective and robust multi-view object segmentation approach as a valuable byproduct of our pipeline. Extensive experiments demonstrate that our method significantly surpasses existing frameworks in maintaining content consistency across views and enhancing visual quality.
---