---
# ==========================================================================
# PEAT AI LAB - PAPER TEMPLATE
# ==========================================================================
# INSTRUCTIONS:
# 1. Save this file in the _papers/ folder.
# 2. Name the file: "year-keyword.md" (e.g., 2024-diffusion-mri.md).
# ==========================================================================

name: "paper-slug"            # REQUIRED: Unique ID used for linking (e.g., "diffusion-mri")
title: "Full Title of the Paper"
year: 2024                    # REQUIRED: For chronological sorting
authors:                      # REQUIRED: List all authors in order
  - name: "Author Name"
    slug: "member-slug"       # Only add slug if they are a PEAT Lab member
  - name: "External Collaborator" # No slug for people outside the lab
journal: "Journal Name"       # Use this OR 'conference'
conference: ""                # Use this OR 'journal'

# --- LINKS ---
doi: ""                       # Just the ID (e.g., 10.1177/xxxx)
github: ""                    # Just the repo path (e.g., case-peatai/repo-name)
arxiv: ""                     # Just the ID (e.g., 2301.xxxx)
paper_page: ""                # Full URL to a custom project page (e.g. GitHub Pages)

# --- CATEGORIZATION ---
# These tags allow the paper to be filtered on the publications page.
# Options: "Artificial Intelligence", "HPC", "Medical Imaging", "Materials Science", "Trustworthy AI", "Computer Vision"
research_areas: 
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  A concise 3-4 sentence summary of the paper's methodology and impact. 
  This appears on the publication card and helps with SEO.
---