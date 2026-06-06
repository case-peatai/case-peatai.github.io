---
layout: profile               # REQUIRED: Do not change this
name: "Biyao Zhang"             # REQUIRED: Your name as it should appear
slug: "biyao-zhang"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "researcher"            # REQUIRED: Options are "faculty" or "researcher"
level: "PHD"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "PhD Student"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "biyao.zhang@case.edu"
# personal_site: ""             # URL to your personal site/portfolio or university directory
# twitter: ""                   # Full URL
linkedin: "https://www.linkedin.com/in/biyao-zhang-954303120"                  # Full URL
# google_scholar: ""            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/biyao-zhang.avif" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.
intro: |
  My research focuses on performance modeling of large-scale AI computing systems, predicting the time and energy costs of LLM distributed training and inference workloads on HPC clusters.
bio: |
  I am a researcher working at the intersection of AI systems and high-performance computing. My work investigates how large-scale AI applications consume time and energy, with a particular focus on LLM distributed training and inference on GPU clusters. Through profiling and performance analysis techniques, I develop models that help understand and optimize the efficiency of these systems at scale. 

# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
research_summary: "Performance modeling of large-scale AI applications."
# 'projects' appear in the Research tab. 
# 'related_papers' must match the 'name' field in your paper .md files.
projects:
  - name: "ICICLE: Intelligent CI with Computational Learning in the Environment"
    description: "A multi-institutional AI cyberinfrastructure project that democratizes AI by building trustworthy, transparent, and reproducible edge-to-HPC systems across food, agriculture, and ecology domains."
    related_papers:
      - "gpu-performance-llm"

mentors: ["vipin-chaudhary"]
collaborators: 
  - "debargha-ganguly"
  - "vikash-singh"
  - "mohsen-hariri"
  - "weicong-wang"
---
