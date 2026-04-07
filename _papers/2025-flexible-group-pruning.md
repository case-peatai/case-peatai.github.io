---
name: "flexible-group-pruning"
title: "Flexible Group Count Enables Hassle-Free Structured Pruning"
year: 2025
authors:
  - name: "Jiamu Zhang"
  - name: "Shaochen Zhong"
  - name: "Andrew Ye"
  - name: "Zirui Liu"
  - name: "Sebastian Zhao"
  - name: "Kaixiong Zhou"
  - name: "Li Li"
  - name: "Soo-Hyun Choi"
  - name: "Rui Chen"
  - name: "Xia Hu"
  - name: "Shuai Xu"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), June 11-15, 2025, Nashville, USA"

# --- LINKS ---
doi: "10.1109/CVPR52734.2025.00453"
github: ""
arxiv: ""
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"
  - "Computer Vision"

# --- CONTENT ---
abstract: |
  Densely structured pruning methods maintain pruned models in a fully dense format, allowing immediate compression benefits, but existing grouped kernel pruning approaches introduce dynamic operations that add complications or impose limitations such as requiring expensive clustering schemes or custom architecture support. This paper argues that making Conv2d group count flexible under an integral optimization is the best practice for grouped kernel pruning, leveraging its ideal alignment with grouped convolution infrastructure. The resulting one-shot, post-train, data-agnostic method is more performant, adaptive, and user-friendly than its predecessors, requiring little to no hyperparameter tuning or handcrafted criteria.

bibtex: |
  @INPROCEEDINGS{11094192,
    author={Zhang, Jiamu and Zhong, Shaochen and Ye, Andrew and Liu, Zirui and Zhao, Sebastian and Zhou, Kaixiong and Li, Li and Choi, Soo-Hyun and Chen, Rui and Hu, Xia and Xu, Shuai and Chaudhary, Vipin},
    booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, 
    title={Flexible Group Count Enables Hassle-Free Structured Pruning}, 
    year={2025},
    volume={},
    number={},
    pages={4807-4818},
    keywords={Computer vision;Limiting;Costs;Convolution;Computer architecture;Pattern recognition;Kernel;Tuning;Optimization;Best practices;pruning;structure pruning;convolutional neural networks;model compression;grouped kernel pruning;efficient deep learning;hassle-free},
    doi={10.1109/CVPR52734.2025.00453}}
---