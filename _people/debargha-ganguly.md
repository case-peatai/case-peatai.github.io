---
layout: profile
name: "Debargha Ganguly"
slug: "debargha-ganguly"
type: "researcher"
level: "PHD"
role: "PhD Student"

# --- CONTACT & SOCIALS ---
email: "debargha@case.edu"
personal_site: "https://debargha.com"
twitter: "https://twitter.com/Debargha_"
linkedin: "https://www.linkedin.com/in/debargha-ganguly/"
google_scholar: "https://scholar.google.com/citations?user=mzCrbIIAAAAJ&hl=en"

# --- PROFILE PHOTO ---
image: "/assets/images/debargha-ganguly.avif"               # TODO: rename your headshot to match

# --- BIOGRAPHY TABS ---
intro: |
  PhD student at Case Western Reserve University working on robust, reliable,
  and scalable AI. Collaborator with Microsoft Research, Google DeepMind, and
  Amazon Science.
bio: |
  I am a PhD student at Case Western Reserve University,
  advised by Dr. Vipin Chaudhary. My research focuses on building AI
  systems that are trustworthy in practice by combining representation learning, formal methods, 
  and principled uncertainty quantification.

  Much of my work has been shaped through collaborations with researchers at
  Microsoft Research, Google DeepMind, Amazon Science, and national
  laboratories, and several results have been deployed in production systems
  at scale.

# --- RESEARCH & PUBLICATIONS ---
research_summary: "Trustworthy AI: out-of-distribution detection, neurosymbolic reasoning, and uncertainty quantification for LLMs."

projects:
  - name: "Representation Typicality Estimation"
    description: "Estimating the typical set of a distribution in representation space to detect outliers and unsafe inputs. This line of work began with Forte (ICLR 2025), which uses self-supervised representations and manifold statistics for OOD detection, and extends to Trust The Typical (ICLR 2026), which reframes LLM safety as an OOD problem and integrates into vLLM with under 6% overhead. K4 operationalizes this for log anomaly detection of supercomputers."
    related_papers:
      - "forte-finding-outliers"
      - "trust-the-typical"
      - "k4-serve-streaming-log-anomaly-detection"
  - name: "Proof of Thought Ecosystem"
    description: "Bridging probabilistic LLM outputs with deterministic formal verification. Proof of Thought (NeurIPS'24 Workshop) translates LLM reasoning into First-Order Logic for theorem provers; Grammars of Formal Uncertainty (NeurIPS 2025) characterizes when LLM-generated formal artifacts can be trusted via PCFG-based uncertainty quantification."
    related_papers:
      - "proof-of-thought"
      - "grammars-uncertainty"

# --- PUBLICATIONS ---
# Leaving blank so the system auto-pulls all papers that list "debargha-ganguly" as an author.

# --- TEAM, MENTORS & COLLABORATORS ---
mentors: ["vipin-chaudhary"]
collaborators:
  - "alan-luo"
  - "andrew-yu"
  - "biyao-zhang"
  - "chaoda-song"
  - "mohsen-hariri"
  - "nahal-shahani"
  - "nengbo-wang"
  - "shouren-wang"
  - "srihari-sankar"
  - "vikash-singh"
  - "vinooth-kulkarni"
  - "wang-van-yang"
  - "weicong-chen"
  - "xinpeng-li"
  - "yanyan-zhang"
  - "yu-yin"
  - "yunlai-zhou"
  - "zahra-rahmani"

# --- ADDITIONAL INFO ---
education:
  - "PhD in Computer Science, Case Western Reserve University, Spring 2023 – present"
awards:
  - "Department Outstanding Graduate Research Award, Case Western Reserve University, 2024"
---
