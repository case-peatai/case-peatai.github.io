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
name: "Yiren Lu"             # REQUIRED: Your name as it should appear
slug: "yiren-lu"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "researcher"            # REQUIRED: Options are "faculty" or "researcher"
level: "PHD"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "PhD Student"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "yiren.lu@case.edu"
personal_site: "https://yiren-lu.com/"             # URL to your personal site/portfolio or university directory
twitter: ""                   # Full URL
linkedin: "https://www.linkedin.com/in/yiren-lu-631798183/"                  # Full URL
google_scholar: "https://scholar.google.com/citations?user=8euSVtcAAAAJ"            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/yiren-lu.jpeg" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.
intro: |
  Yiren Lu is a Ph.D. student at the Computer and Data Sciences Department, Case Western Reserve University (CWRU). His research lies at the intersection of 3D computer vision and embodied AI, focusing on neural scene representations, 3D Gaussian Splatting, and geometry-aware perception. His research aims to develop interpretable spatial intelligence systems that bridge reconstruction and downstream tasks such as reasoning and long-horizon decision-making.
bio: |
  Before joining Case, Yiren received his M.S. in Computer Science and Engineering from University at Buffalo in 2024 under the supervision of Prof. Chen Wang and his B.Eng. degree in Computer Science from ShanghaiTech University in 2021 under the supervision of Prof. Sören Schwertfeger.
  He has also interned at Bosch Research North America as a Research Scientist Intern and at Tencent as an Applied Scientist Intern.

# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
research_summary: "My current research focuses on developing robust 3D visual representations that bridge geometric reconstruction, semantic understanding, and downstream decision-making. Traditionally, 3D reconstruction has been viewed primarily as a graphics or geometry problem, while reasoning and navigation have been studied separately in robotics. My work connects these areas by exploring how 3D scene representations can move beyond passive reconstruction to become active, useful computational structures for perception, memory, and reasoning in complex real-world environments."
# 'projects' appear in the Research tab. 
# 'related_papers' must match the 'name' field in your paper .md files.
projects:
  - name: "3D Gaussian Splatting as Memory for Downstream Reasoning and Decision Making"
    description: "A detailed description of the project goals and methods."
    related_papers:
      - "gsmem"
      - "splat2bev"
      - "segment-then-splat"
  - name: "Robust 3D & 4D Reconstruction for Complex Real-world Scenarios"
    description: "A detailed description of the project goals and methods."
    related_papers:
      - "bardgs"
      - "ngs"

# --- PUBLICATIONS ---
# List all paper slugs that should appear in your Publications tab.
papers:
  - "gsmem"
  - "splat2bev"
  - "segment-then-splat"
  - "ngs"
  - "bardgs"
  - "view-consistent-obj-removal"

# --- TEAM, MENTORS & COLLABORATORS ---
# mentors: For students, list your advisor's slug (e.g., ["vipin-chaudhary"])
# collaborators: List slugs of people you collaborate with inside the lab
mentors: ["yu-yin"]
collaborators: []

# --- ADDITIONAL INFO (Optional) ---
education:
  - "M.S. in Computer Science & Engineering, University at Buffalo, 2024"
  - "B.Eng. in Computer Science, ShanghaiTech University, 2021"
awards:
  - "Kevin J. Kranzusch Fellowship, 2025"
  - "Outstanding Graduate Research Award, 2024"
# teaching_interests: "List of subjects or courses."
---