---
name: "irrelevant-pixels"
title: "Irrelevant Pixels are Everywhere: Find and Exclude Them for More Efficient Computer Vision"
year: 2022
authors:
  - name: "Caleb Tung"
  - name: "Abhinav Goel"
  - name: "Xiao Hu"
  - name: "E. S. Amobi"
  - name: "George K. Thiruvathukal"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Yung-Hsiang Lu"

journal: ""
conference: "IEEE International Conference on Artificial Intelligence Circuits and Systems (AICAS 2022), June 13-15, 2022, Incheon, Korea"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2207.10741"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "Computer Vision"

# --- CONTENT ---
abstract: |
  CNNs are compute-intensive because they indiscriminately compute features on all pixels of an input image, yet many pixels are irrelevant to the vision task at hand. This paper demonstrates through analysis of three popular computer vision datasets that approximately 48% of pixels are irrelevant, and proposes the focused convolution—a drop-in CNN replacement that operates only on relevant pixels identified by an area of interest mask. On an embedded device, the approach achieves no loss in accuracy while reducing inference latency, energy consumption, and multiply-add count by approximately 45%.

bibtex: |
  @misc{tung2022irrelevantpixelseverywhereexclude,
        title={Irrelevant Pixels are Everywhere: Find and Exclude Them for More Efficient Computer Vision}, 
        author={Caleb Tung and Abhinav Goel and Xiao Hu and Nicholas Eliopoulos and Emmanuel Amobi and George K. Thiruvathukal and Vipin Chaudhary and Yung-Hsiang Lu},
        year={2022},
        eprint={2207.10741},
        archivePrefix={arXiv},
        primaryClass={cs.CV},
        url={https://arxiv.org/abs/2207.10741}, 
  }
---