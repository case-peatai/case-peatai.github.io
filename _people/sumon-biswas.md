---
layout: profile               # REQUIRED: Do not change this
name: "Sumon Biswas"             # REQUIRED: Your name as it should appear
slug: "sumon-biswas"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "faculty"            # REQUIRED: Options are "faculty" or "researcher"
level: "STAFF"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "Assistant Professor"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "sumon@case.edu"
personal_site: "https://sumonbis.github.io/"             # URL to your personal site/portfolio or university directory
twitter: "https://x.com/sumonbis"                   # Full URL
linkedin: "https://www.linkedin.com/in/sumonb"                  # Full URL
google_scholar: "https://scholar.google.com/citations?hl=en&tzom=240&user=SD5GRJ4AAAAJ"            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/sumon-biswas.jpeg" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.
intro: |
  Sumon Biswas is a tenure-track Assistant Professor in the Department of Computer and Data Sciences at Case Western Reserve University. His research lies at the intersection of software engineering and AI, with a focus on responsible AI, fairness, safety, and large language models.
bio: |
  Sumon Biswas is an Assistant Professor of Computer and Data Sciences at Case Western Reserve University. He received Ph.D. in Computer Science from Iowa State University and completed Postdoc at Carnegie Mellon University. His research interests are in the intersection of Software Engineering (SE) and Artificial Intelligence (AI), focusing on the area of responsible AI Engineering. He combines formal and empirical approaches to design, verify, and analyze responsible AI systems. His work spans algorithmic fairness, safety, and long-term risks in ML-enabled systems. Recent work focuses on large language models and coding agents, with emphasis on formal verification and neuro-symbolic design.

# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
research_summary: "My research focuses at the intersection of Software Engineering and AI, with a focus on responsible AI engineering. I combine formal verification and empirical methods to design, verify, and analyze AI-enabled systems, spanning algorithmic fairness, safety, and sustainability. Recent work investigates large language models and coding agents, with an emphasis on their safety, reliability, and trustworthiness."
# 'projects' appear in the Research tab. 
# 'related_papers' must match the 'name' field in your paper .md files.
projects:
  - name: "Long-Term Risks in ML Systems"
    description: "This project investigates how feedback loops and deployment dynamics in machine learning systems can create harmful long-term effects, and develops methods to analyze and mitigate those risks before and after deployment."
    related_papers:
      - "safe-ml-feedback-loops"
      - "fairsense"
  - name: "Design and Architecture of Data Science Pipelines"
    description: "This project studies the structure, design, and real-world evolution of data science pipelines, including how preprocessing, modeling, training, and evaluation stages interact in practice."
    related_papers:
      - "data-science-pipelines"
  - name: "Neural Network Verification"
    description: "This project develops formal methods for verifying fairness properties of neural networks, with emphasis on modular reasoning and analysis for specific subpopulations."
    related_papers:
      - "fairify"
  - name: "Causal Fairness in Machine Learning Pipelines"
    description: "This project investigates how fairness properties compose across pipeline components and uses causal reasoning to understand, diagnose, and improve fairness in end-to-end machine learning workflows."
    related_papers:
      - "fair-preprocessing"
      - "ensemble-fairness"
  - name: "Fairness Engineering in ML Models"
    description: "This project examines fairness issues in real-world machine learning systems and develops practical techniques for fairness analysis, debugging, and performance-aware repair."
    related_papers:
      - "crowdsourced-model-fairness"
      - "fair-automl"
  - name: "AI-Assisted Software Quality and Technical Debt"
    description: "This project studies technical debt and quality risks in AI-assisted software engineering, including self-admitted technical debt in machine learning software and the effects of prompt engineering on code-generating assistants."
    related_papers:
      - "ml-technical-debt"
      - "copilot-todo-comments"

# --- PUBLICATIONS ---
# List all paper slugs that should appear in your Publications tab.
papers:
  - "fairsense"
  - "copilot-todo-comments"
  - "fairify"
  - "ensemble-fairness"
  - "fair-automl"
  - "safe-ml-feedback-loops"
  - "data-science-pipelines"
  - "ml-technical-debt"
  - "fair-preprocessing"
  - "crowdsourced-model-fairness"

# --- TEAM, MENTORS & COLLABORATORS ---
# mentors: For students, list your advisor's slug (e.g., ["vipin-chaudhary"])
# collaborators: List slugs of people you collaborate with inside the lab
mentors: []
collaborators: []

# --- ADDITIONAL INFO (Optional) ---
education:
  - "Postdoc, Carnegie Mellon University, 2024"
  - "Ph.D. in Computer Science, Iowa State University, 2022"
  - "M.S. in Computer Science, Iowa State University, 2021"

awards:

teaching_interests: "Responsible AI Engineering; Software Engineering"
---
