---
name: "sam2-knee-segmentation"
title: "Novel Adaptation of Video Segmentation to 3D MRI: Efficient Zero-Shot Knee Segmentation with SAM2"
year: 2025
authors:
  - name: "Andrew Yu"
    slug: "andrew-yu"
  - name: "Mohsen Hariri"
    slug: "mohsen-hariri"
  - name: "Xuecen Zhang"
  - name: "Mingrui Yang"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Xiaojuan Li"

journal: ""
conference: "SPIE Medical Imaging 2025, February 16-20, 2025, San Diego, USA [Oral]"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2408.04762"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Medical Imaging"
  - "Artificial Intelligence"
  - "Computer Vision"

# --- CONTENT ---
abstract: |
  Medical image segmentation methods face the challenge of domain transfer, where performance degrades due to distribution shifts between source and target domains. This paper adapts SAM2, a general-purpose video segmentation model, for zero-shot single-prompt 3D knee MRI segmentation by treating volumetric slices as individual video frames and leveraging SAM2's memory mechanism to generate motion- and spatially-aware predictions across the volume. Experiments on the OAI-ZIB dataset demonstrate a Dice similarity coefficient of 0.9643 on tibia using only a single prompt and no task-specific training or fine-tuning.

bibtex: |
  @misc{yu2024noveladaptationvideosegmentation,
        title={Novel adaptation of video segmentation to 3D MRI: efficient zero-shot knee segmentation with SAM2}, 
        author={Andrew Seohwan Yu and Mohsen Hariri and Xuecen Zhang and Mingrui Yang and Vipin Chaudhary and Xiaojuan Li},
        year={2024},
        eprint={2408.04762},
        archivePrefix={arXiv},
        primaryClass={cs.CV},
        url={https://arxiv.org/abs/2408.04762}, 
  }
---