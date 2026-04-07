---
name: "knowledge-graphs-intersection"
title: "Knowledge Graphs Can be Learned with Just Intersection Features"
year: 2024
authors:
  - name: "Duy Le"
  - name: "Shaochen Zhong"
  - name: "Zirui Liu"
  - name: "Shuai Xu"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"
  - name: "Kaixiong Zhou"
  - name: "Zhaozhuo Xu"

journal: ""
conference: "41st International Conference on Machine Learning (ICML), July 21, 2024, Vienna, Austria"

# --- LINKS ---
doi: ""
github: ""
arxiv: ""
openreview: ""
paper_page: "https://proceedings.mlr.press/v235/le24c.html"

# --- CATEGORIZATION ---
research_areas:
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Demonstrates that knowledge graph completion can be effectively learned using only intersection features, providing a simpler and more efficient representation approach.

bibtex: |
  @InProceedings{pmlr-v235-le24c,
    title =          {Knowledge Graphs Can be Learned with Just Intersection Features},
    author =       {Le, Duy and Zhong, Shaochen and Liu, Zirui and Xu, Shuai and Chaudhary, Vipin and Zhou, Kaixiong and Xu, Zhaozhuo},
    booktitle =          {Proceedings of the 41st International Conference on Machine Learning},
    pages =          {26199--26214},
    year =          {2024},
    editor =          {Salakhutdinov, Ruslan and Kolter, Zico and Heller, Katherine and Weller, Adrian and Oliver, Nuria and Scarlett, Jonathan and Berkenkamp, Felix},
    volume =          {235},
    series =          {Proceedings of Machine Learning Research},
    month =          {21--27 Jul},
    publisher =    {PMLR},
    pdf =          {https://raw.githubusercontent.com/mlresearch/v235/main/assets/le24c/le24c.pdf},
    url =          {https://proceedings.mlr.press/v235/le24c.html},
    abstract =          {Knowledge Graphs (KGs) are potent frameworks for knowledge representation and reasoning. Nevertheless, KGs are inherently incomplete, leaving numerous uncharted relationships and facts awaiting discovery. Deep learning methodologies have proven effective in enhancing KG completion by framing it as a link prediction task, where the goal is to discern the validity of a triple comprising a head, relation, and tail. The significance of structural information in assessing the validity of a triple within a KG is well-established. However, quantifying this structural information poses a challenge. We need to pinpoint the metric that encapsulates the structural information of a triple and smoothly incorporate this metric into the link prediction learning process. In this study, we recognize the critical importance of the intersection among the $k$-hop neighborhoods of the head, relation, and tail when determining the validity of a triple. To address this, we introduce a novel randomized algorithm designed to efficiently generate intersection features for candidate triples. Our experimental results demonstrate that a straightforward fully-connected network leveraging these intersection features can surpass the performance of established KG embedding models and even outperform graph neural network baselines. Additionally, we highlight the substantial training time efficiency gains achieved by our network trained on intersection features.}
  }
---