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
name: "Yuting Shao"             # REQUIRED: Your name as it should appear
slug: "yuting-shao"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "researcher"            # REQUIRED: Options are "faculty" or "researcher"
level: "PHD"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "PhD Student"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "yxs1432@case.edu"
personal_site: ""             # URL to your personal site/portfolio or university directory
twitter: ""                   # Full URL
linkedin: ""                  # Full URL
google_scholar: ""            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/yuting-shao.jpg" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.
intro: |
  Ph.D. student in Computer Science at Case Western Reserve University, researching Large Language Models (LLMs) and Spatial AI, with a focus on spatial reasoning, planning, and embodied intelligence.
bio: |
  Yuting Shao is a Ph.D. student in Computer Science at Case Western Reserve University. She worked on Explainable AI (XAI) and wearable human-computer interaction (HCI) during her master’s studies. Her current research explores the integration of Large Language Models (LLMs) with spatial perception and reasoning systems for embodied AI and robotics.

# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
research_summary: "My research focuses on Large Language Models (LLMs) and Spatial AI, exploring spatial reasoning, planning, multimodal understanding, and the application of LLMs in embodied and real-world interactive environments."
# 'projects' appear in the Research tab. 
# 'related_papers' must match the 'name' field in your paper .md files.

projects:
  - name: "Surgical Assistance Robot"
    description: "Training AI models for surgical-assistance robots to recognize, classify, and organize surgical instruments after procedures using spatial perception, multimodal understanding, and robotic manipulation data."
#    related_papers:
#      - "paper-slug-1"
#      - "paper-slug-2"

# --- PUBLICATIONS ---
# If you want to manually specify which papers appear on your profile, list their slugs here. 
# Otherwise, all papers that list your slug in the 'authors' field will automatically be pulled in.
# Note: I recommend leaving this blank and letting the system pull in all your papers, unless you have a specific reason to curate the list. 
# This way, you won't have to update your profile every time you publish a new paper.

#papers:
#  - "paper-slug-1"
#  - "paper-slug-2"

# --- TEAM, MENTORS & COLLABORATORS ---
# mentors: For students, list your advisor's slug (e.g., ["vipin-chaudhary"])
# collaborators: List slugs of people you collaborate with inside the lab
mentors: ["vipin-chaudhary"]
collaborators: ["chaoda-song"]

# --- ADDITIONAL INFO (Optional) ---
education:
  - "Ph.D. in Computer and Data Sciences, Case Western Reserve University, current"
  - "M.S. in Human-Computer Interaction, Rochester Institute of Technology, 2023"
  - "M.S. in Computer Science, Stevens Institute of Technology, 2020"
  - "B.S. in in Software Engineering, Dalian University of Foreign Languages, 2017"
---