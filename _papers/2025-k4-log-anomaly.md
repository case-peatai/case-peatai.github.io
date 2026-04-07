---
name: "k4-log-anomaly"
title: "K4: Online Log Anomaly Detection via Unsupervised Typicality Learning"
year: 2025
authors:
  - name: "Weicong Chen"
    slug: "weicong-chen"
  - name: "Vikash Singh"
    slug: "vikash-singh"
  - name: "Zahra Rahmani"
    slug: "zahra-rahmani"
  - name: "Debargha Ganguly"
    slug: "debargaha-ganguly"
  - name: "Mohsen Hariri"
    slug: "mohsen-hariri"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "IEEE/ACM International Conference on High Performance Computing (SC25), December 17-20, 2025, Hyderabad, India"

# --- LINKS ---
doi: "10.1109/HiPC66333.2025.00019"
github: ""
arxiv: "2507.20051"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Trustworthy AI"
  - "HPC"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Existing log anomaly detection methods are often slow, dependent on error-prone parsing, and use unrealistic evaluation protocols. This paper introduces K4 (Knowing the Unknown by Knowing only the Known), a fully unsupervised, parser-independent framework that transforms arbitrary log embeddings into compact four-dimensional descriptors—Precision, Recall, Density, Coverage—using efficient k-nearest neighbor statistics. Under a realistic online chunk-based evaluation protocol, K4 achieves state-of-the-art AUROC of 0.995–0.999 across HDFS, BGL, and Thunderbird datasets, with training under 4 seconds and inference as low as 4 μs.

bibtex: |
  @misc{chen2025k4onlineloganomaly,
        title={$K^4$: Online Log Anomaly Detection Via Unsupervised Typicality Learning}, 
        author={Weicong Chen and Vikash Singh and Zahra Rahmani and Debargha Ganguly and Mohsen Hariri and Vipin Chaudhary},
        year={2025},
        eprint={2507.20051},
        archivePrefix={arXiv},
        primaryClass={cs.LG},
        url={https://arxiv.org/abs/2507.20051}, 
  }
---