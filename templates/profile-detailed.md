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
name: "Full Name"             # REQUIRED: Your name as it should appear
slug: "first-last"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "researcher"            # REQUIRED: Options are "faculty" or "researcher"
level: "PHD"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "Your Title"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "user@case.edu"
personal_site: ""             # URL to your personal site/portfolio or university directory
twitter: ""                   # Full URL
linkedin: ""                  # Full URL
google_scholar: ""            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/your-name.avif" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.
intro: |
  A 1-2 sentence high-level summary of your current appointments and focus.
bio: |
  Your multi-paragraph professional biography.

# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
# 'papers' must match the filenames (slugs) of papers in the _papers/ folder.
research_summary: "Briefly describe your current research focus here."
papers:
  - "paper-slug-1"
  - "paper-slug-2"

# --- TEAM, MENTORS & COLLABORATORS ---
# mentors: For students, list your advisor's slug (e.g., ["vipin-chaudhary"])
# collaborators: List slugs of people you collaborate with inside the lab
mentors: ["vipin-chaudhary"]
collaborators: []

# --- ADDITIONAL INFO (Optional) ---
education:
  - "Degree, University, Year"
awards:
  - "Award Name, Year"
teaching_interests: "List of subjects or courses."
---