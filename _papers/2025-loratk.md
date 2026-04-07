---
name: "loratk"
title: "LoRATK: LoRA Once, Backdoor Everywhere in the Share-and-Play Ecosystem"
year: 2025
authors:
  - name: "Hongyi Liu"
  - name: "Shaochen Zhong"
  - name: "Xinton Sun"
  - name: "Minghao Tian"
  - name: "Mohsen Hariri"
    slug: "mohsen-hariri"
  - name: "Zirui Liu"
  - name: "Ruixiang Tang"
  - name: "Zhimeng Jiang"
  - name: "Jiayi Yuan"
  - name: "Yu-Neng Chuan"
  - name: "Li Li"
  - name: "Soo-Hyun Choi"
  - name: "Rui Chen"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Xia Hu"

journal: ""
conference: "Findings of EMNLP 2025, November 5-9, 2025, Suzhou, China"

# --- LINKS ---
doi: "10.18653/v1/2025.findings-emnlp.1253"
github: ""
arxiv: "2403.00108"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Trustworthy AI"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Fine-tuning LLMs with LoRA has created a convenient share-and-play ecosystem where users download community-shared adapters to enhance base models, but this also introduces a new attack surface for distributing malicious LoRAs. This paper demonstrates that a backdoor LoRA can be trained once and then seamlessly merged in a training-free fashion with multiple task-enhancing LoRAs, retaining both malicious behavior and legitimate downstream capabilities. Such merged LoRAs are particularly dangerous because malicious intent is concealed behind improved downstream performance, creating strong incentive for voluntary adoption, and no safety measures exist to intervene during local deployment.

bibtex: |
  @misc{liu2025loratkloraoncebackdoor,
        title={LoRATK: LoRA Once, Backdoor Everywhere in the Share-and-Play Ecosystem}, 
        author={Hongyi Liu and Shaochen Zhong and Xintong Sun and Minghao Tian and Mohsen Hariri and Zirui Liu and Ruixiang Tang and Zhimeng Jiang and Jiayi Yuan and Yu-Neng Chuang and Li Li and Soo-Hyun Choi and Rui Chen and Vipin Chaudhary and Xia Hu},
        year={2025},
        eprint={2403.00108},
        archivePrefix={arXiv},
        primaryClass={cs.CR},
        url={https://arxiv.org/abs/2403.00108}, 
  }
---