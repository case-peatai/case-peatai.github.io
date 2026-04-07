---
name: "focused-convolutions"
title: "An Automated Approach for Improving the Inference Latency and Energy Efficiency of Pretrained CNNs by Removing Irrelevant Pixels with Focused Convolutions"
year: 2024
authors:
  - name: "Caleb Tung"
  - name: "Nicholas Eliopoulos"
  - name: "Purvish Jajal"
  - name: "Gowri Ramshankar"
  - name: "Chen-Yun Yang"
  - name: "Nicholas Synovic"
  - name: "Xuecen Zhang"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "George K. Thiruvathukal"
  - name: "Yung-Hsiang Lu"

journal: ""
conference: "29th Asia and South Pacific Design Automation Conference (ASP-DAC 2024), January 2024, South Korea"

# --- LINKS ---
doi: "10.1109/ASP-DAC58780.2024.10473884"
github: ""
arxiv: "2310.07782"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "Computer Vision"

# --- CONTENT ---
abstract: |
  Computer vision CNNs achieve high accuracy but face ever-increasing energy and computation requirements, and making them more energy-efficient typically requires costly retraining. This paper proposes an automated method to improve the inference latency and energy efficiency of pretrained CNNs without retraining, by inserting a threshold layer that identifies irrelevant image regions and replacing subsequent convolutional layers with focused convolutions that ignore those regions entirely. The approach saves inference latency by up to 25% and energy costs by up to 22% on popular pretrained CNNs including ResNet, VGG, and ConvNeXt, with little to no accuracy loss.

bibtex: |
  @misc{tung2023automatedapproachimprovinginference,
        title={An automated approach for improving the inference latency and energy efficiency of pretrained CNNs by removing irrelevant pixels with focused convolutions}, 
        author={Caleb Tung and Nicholas Eliopoulos and Purvish Jajal and Gowri Ramshankar and Chen-Yun Yang and Nicholas Synovic and Xuecen Zhang and Vipin Chaudhary and George K. Thiruvathukal and Yung-Hsiang Lu},
        year={2023},
        eprint={2310.07782},
        archivePrefix={arXiv},
        primaryClass={cs.CV},
        url={https://arxiv.org/abs/2310.07782}, 
  }
---