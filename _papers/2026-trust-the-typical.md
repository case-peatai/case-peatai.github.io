---
name: "trust-the-typical"
title: "Trust the Typical"
year: 2026
authors:
  - name: "Debargha Ganguly"
    slug: "debargaha-ganguly"
  - name: "Srihari Sankar"
    slug: "srihari-sankar"
  - name: "Biyao Zhang"
    slug: "biyao-zhang"
  - name: "Vikash Singh"
    slug: "vikash-singh"
  - name: "Kanan Gupta"
  - name: "Harshini Kavuru"
  - name: "Alan Luo"
    slug: "alan-luo"
  - name: "Weicong Chen"
    slug: "weicong-chen"
  - name: "Warren Morningstar"
  - name: "Raghu Machiraju"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "14th International Conference on Learning Representations (ICLR), April 23-27, 2026, Rio De Janeiro, Brazil"

# --- LINKS ---
doi: ""
github: ""
arxiv: "2602.04581"
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Trustworthy AI"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Current approaches to LLM safety rely on a brittle pattern of identifying and blocking known threats via guardrails. This paper introduces Trust The Typical (T3), a framework that reframes safety as an out-of-distribution detection problem, learning the distribution of acceptable prompts in a semantic space and flagging significant deviations as potential threats. Unlike prior methods, T3 requires no training on harmful examples yet achieves state-of-the-art performance across 18 benchmarks spanning toxicity, jailbreaking, multilingual harms, and over-refusal—reducing false positive rates by up to 40× relative to specialized safety models. A single model trained on safe English text transfers effectively to over 14 languages without retraining.

bibtex: |
  @inproceedings{
  ganguly2026trust,
  title={Trust The Typical},
  author={Debargha Ganguly and Sreehari Sankar and Biyao Zhang and Vikash Singh and Kanan Gupta and Harshini Kavuru and Alan Luo and Weicong Chen and Warren Richard Morningstar and Raghu Machiraju and Vipin Chaudhary},
  booktitle={The Fourteenth International Conference on Learning Representations},
  year={2026},
  url={https://openreview.net/forum?id=vfbeleLBWv}
  }
---