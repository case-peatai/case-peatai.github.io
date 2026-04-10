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
name: "Kutay Tasci"             # REQUIRED: Your name as it should appear
slug: "kutay-tasci"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "researcher"            # REQUIRED: Options are "faculty" or "researcher"
level: "PHD"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "PhD Student"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "kutay.tasci@case.edu"
personal_site: "https://kutaytasci.github.io/"             # URL to your personal site/portfolio or university directory
twitter: ""                   # Full URL
linkedin: "https://www.linkedin.com/in/tasci-kutay/"                  # Full URL
google_scholar: "https://scholar.google.com/citations?user=2pOTHCkAAAAJ&hl=en"            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/KUTAY-TASCI.avif" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.
intro:
  Kutay Tasci is a Ph.D. student in Computer and Data Sciences at Case Western Reserve University, where he conducts research on high-performance computing systems for AI/ML workloads, with a focus on graph neural networks, geometric deep learning, and sparse/irregular computations.
bio:
  Kutay Tasci is a Ph.D. student in the Department of Computer and Data Sciences at Case Western Reserve University. His research focuses on the design of efficient parallel and distributed algorithms for emerging AI and machine learning workloads, particularly those involving sparse and irregular computation patterns. His current interests span graph neural networks (GNNs), geometric deep learning, sparse attention mechanisms, and high-performance computing (HPC) systems.

  Prior to his doctoral studies, he received his B.S. in Computer Engineering from Hacettepe University and his M.S. in Computer Engineering from Bilkent University. During his graduate research, he worked on large-scale sparse kernels, distributed graph neural network training, and communication-efficient algorithms for HPC systems. His previous work explored sparse matrix operations, hypergraph-based partitioning methods, and communication bottlenecks in distributed-memory architectures, contributing to projects supported by national and international research initiatives including TUBITAK and EuroHPC.

  More broadly, his work lies at the intersection of machine learning systems, scientific computing, and performance optimization. He is particularly interested in developing scalable methods that improve the efficiency of modern AI models on heterogeneous computing architectures, with the long-term goal of enabling larger, faster, and more practical machine learning systems for both industrial and scientific applications.

# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
research_summary: "My research focuses on developing efficient parallel and distributed methods for sparse and irregular AI/ML workloads, with particular emphasis on graph neural networks, geometric deep learning, sparse attention, and high-performance computing systems."
# 'projects' appear in the Research tab. 
# 'related_papers' must match the 'name' field in your paper .md files.
projects:
  - name: "Efficient Geometric Graph Neural Networks"
    description: "My thesis work focuses on improving the efficiency and scalability of geometric graph neural networks (GNNs) for scientific machine learning applications. This research studies the computational and systems challenges of geometric message passing, with emphasis on designing methods that reduce redundant computation, improve memory efficiency, and better utilize modern GPU architectures. The broader goal is to enable faster and more scalable training and inference for geometric deep learning models used in domains such as molecular modeling, materials science, and physical simulation."
    related_papers:
      - "decomposed-geometric-gnn-message-passing"

  - name: "Sparse Attention and Long-Context Transformer Optimization"
    description: "This research focuses on improving the efficiency of block-sparse attention implementations for long-context transformer models. In particular, I study how token and block reordering techniques can transform irregular sparse attention patterns into hardware-friendly layouts that reduce the number of active blocks and improve GPU execution efficiency. The broader goal is to make sparse transformer inference more practical and scalable for large language models and other long-sequence learning workloads."


# --- PUBLICATIONS ---
# List all paper slugs that should appear in your Publications tab.
papers:
  - "alternative-decomposed-message-passing-for-efficient-geometric-gnns"
  - "transforming-temporal-dynamic-graphs-into-time-series-data-for-solving-event-detection-problems"

# --- TEAM, MENTORS & COLLABORATORS ---
# mentors: For students, list your advisor's slug (e.g., ["vipin-chaudhary"])
# collaborators: List slugs of people you collaborate with inside the lab
mentors: ["sanmukh-kuppannagari"]
collaborators: []

# --- ADDITIONAL INFO (Optional) ---
education:
  - "Ph.D. in Computer and Data Sciences, Case Western Reserve University, 2024–2028 (expected)"
  - "M.S. in Computer Engineering, Bilkent University, 2021–2024"
  - "B.S. in Computer Engineering, Hacettepe University, 2017–2021"

awards:
  - "Swanger Graduate Fellowship, 2024"
  - "5G and Beyond Joint Graduate Support Program (ICTA), 2022"
  - "Bilkent University Comprehensive Scholarship, 2021"
  - "METU IEEE Hackathon – 1st Place, 2020"

teaching_interests: "High-performance computing, parallel and distributed systems, machine learning systems, graph neural networks, and large-scale AI."