---
name: "winner-take-all"
title: "Winner-Take-All Column Row Sampling for Memory Efficient Adaptation of Language Model"
year: 2023
authors:
  - name: "Zirui Liu"
  - name: "Guanchu Wang"
  - name: "Shaochen Zhong"
  - name: "Zhaozhuo Xu"
  - name: "Daochen Zha"
  - name: "Ruixiang Tang"
  - name: "Zhimeng Jiang"
  - name: "Kaixiong Zhou"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Shuai Xu"
  - name: "Xia Hu"

journal: ""
conference: "37th Conference on Neural Information Processing Systems (NeurIPS 2023), December 2023"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2305.15265"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Fine-tuning large pre-trained language models has become increasingly difficult due to extensive memory usage, with the primary bottleneck being the storage of activation feature maps needed for gradient computation. This paper proposes WTA-CRS (Winner-Take-All Column-Row Sampling), a new family of unbiased estimators for matrix products with reduced variance that only requires storing sub-sampled activations for gradient calculation, applied during the backward pass to maintain unbiased gradient estimation. Applied to LLM fine-tuning, WTA-CRS significantly reduces activation memory requirements while maintaining training convergence, enabling adaptation of large models on hardware that would otherwise lack sufficient memory.

bibtex: |
  @misc{liu2024winnertakeallcolumnrowsampling,
        title={Winner-Take-All Column Row Sampling for Memory Efficient Adaptation of Language Model}, 
        author={Zirui Liu and Guanchu Wang and Shaochen Zhong and Zhaozhuo Xu and Daochen Zha and Ruixiang Tang and Zhimeng Jiang and Kaixiong Zhou and Vipin Chaudhary and Shuai Xu and Xia Hu},
        year={2024},
        eprint={2305.15265},
        archivePrefix={arXiv},
        primaryClass={cs.LG},
        url={https://arxiv.org/abs/2305.15265}, 
  }
---