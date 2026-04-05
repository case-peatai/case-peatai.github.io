---
# ==========================================================================
# PEAT AI LAB - PROFILE TEMPLATE (DETAILED)
# ==========================================================================
# INSTRUCTIONS: 
# 1. Fill in the values between the quotes. 
# 2. Delete rows you don't need (most are optional).
# 3. Save this file as "yourname-yourlastname.md"
# ==========================================================================

layout: profile               # REQUIRED: Do not change this
name: "Jierui Peng"             # REQUIRED: Your name as it should appear
slug: "jierui-peng"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "researcher"            # REQUIRED: Options are "faculty" or "researcher"
level: "PHD"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "PhD Student"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "jxp1146@case.edu"
personal_site: "https://jerrypeng.com/"             # URL to your personal site/portfolio or university directory
twitter: ""                   # Full URL
linkedin: "https://www.linkedin.com/in/jierui-peng/"                  # Full URL
google_scholar: "https://scholar.google.com/citations?user=7CLFLX0AAAAJ&hl=en"            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/jerry-peng.png" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.
intro: |
  PhD student in Computer Science at Case Western Reserve University, working on embodied AI at the intersection of computer vision and machine learning, with a focus on world modeling and real-time intelligent systems. Research Assistant at University Hospitals, exploring clinically grounded AI for perception, reasoning, and decision-making in real-world environments.
bio: |
  I am a PhD student in Computer Science at Case Western Reserve University, working at the intersection of embodied AI, computer vision, and machine learning. My work focuses on building intelligent systems that can perceive, reason, and act in the real world, with an emphasis on embodied AI, world modeling, and efficient real-time inference. I am a member of the VU Lab, co-advised by Prof. Vipin Chaudhary and Prof. Yu Yin. I am also a Research Assistant at University Hospitals, supervised by Dr. Sanjay Rajagopalan.

  I am particularly interested in bridging the gap between high-level understanding and real-world execution. My research explores how structured reasoning, language grounding, and causal understanding can be leveraged to build embodied systems that are more reliable, interpretable, and generalizable.

# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
research_summary: "My research focuses on embodied AI, aiming to bridge the gap between high-level understanding and real-world execution. I develop systems that integrate structured reasoning, language grounding, and world modeling to enable efficient, interpretable, and generalizable perception–action pipelines in real-world environments."
# 'projects' appear in the Research tab. 
# 'related_papers' must match the 'name' field in your paper .md files.
projects:
  - name: "NEBULA: Diagnostic and Robust Evaluation for Vision-Language-Action Systems"
    description: "This project introduces NEBULA, a unified ecosystem for evaluating Vision-Language-Action (VLA) agents through a dual-axis framework that disentangles capability and robustness. It addresses the limitations of traditional end-task success metrics by proposing fine-grained capability tests with controlled variable isolation and systematic stress tests for reliability assessment. In addition, NEBULA provides a standardized data format, unified API, and large-scale aggregated dataset to enable reproducible cross-dataset training and benchmarking, revealing critical failure modes in modern embodied agents."
    related_papers:
      - "2026-nebula"
  
  - name: "CLAIRE: Causally Explainable AI for EKG-based Risk Prediction"
    description: "This project presents CLAIRE, a causally explainable AI framework for predicting mortality and major adverse cardiovascular events (MACE) from structured EKG data. The system integrates large language models with structured clinical features to enable both high predictive performance and interpretable reasoning. A two-stage pipeline combines end-to-end prediction with feature attribution and causal graph generation, linking EKG abnormalities to physiological mechanisms. The framework achieves strong accuracy while providing clinically validated explanations, bridging the gap between black-box prediction and mechanistic understanding in medical AI."
    related_papers:
      - "claire-ekg-causal-ai"

  - name: "RT-LTP: Real-Time Latent Trajectory Prediction with Efficient Online Adaptation"
    description: "This project proposes RT-LTP, an efficient trajectory prediction framework designed for real-time online learning under distribution shift. The method reformulates trajectory forecasting as a latent-space alignment problem, predicting future motion in a compact, semantically consistent latent space. It incorporates a lightweight low-rank adaptation module to enable fast test-time learning without full model updates, significantly reducing optimization latency. The approach improves both prediction accuracy and computational efficiency, enabling robust deployment in high-speed dynamic environments such as autonomous driving."
    related_papers:
      - "rt-ltp-2026"

# --- PUBLICATIONS ---
# List all paper slugs that should appear in your Publications tab.
papers:
  - "rt-ltp-2026"
  - "claire-ekg-causal-ai"
  - "2026-nebula"

# --- TEAM, MENTORS & COLLABORATORS ---
# mentors: For students, list your advisor's slug (e.g., ["vipin-chaudhary"])
# collaborators: List slugs of people you collaborate with inside the lab
mentors: ["vipin-chaudhary", "yu-yin"]
collaborators: ["yanyan-zhang", "tuo-liang"]

# --- ADDITIONAL INFO (Optional) ---
education:
  - "B.S., Brandeis University, 2021"
  - "M.S., New York University, 2023"
  - "Ph.D., Case Western Reserve University, current"
---