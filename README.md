# PEAT AI Lab Website

Center for Performant, Embodied, Agentic & Trustworthy AI at Case Western Reserve University.

## Tech Stack
SSG: Jekyll
Styling: Sass (SCSS)
Deployment: GitHub Pages (case-peatai.github.io) 

## Quick Start
This site is built with **Jekyll**.
1. Ensure you have Ruby and Bundler installed.
2. Run `bundle install`.
3. Start the local server: `bundle exec jekyll serve`.
4. View at `http://localhost:4000`.

---

## Adding Lab Members
The site uses a Jekyll Collection called `people`. Profiles are generated automatically from Markdown files.

### 1. Create the File
Add a new file to the `_people/` directory named `firstname-lastname.md`.

### 2. Fill the Front Matter
Copy and paste this template. All fields are **optional** and will only display if populated.

```yaml
---
layout: profile
name: "Full Name"
type: "faculty" # Options: faculty, researcher
role: "Your Title <br> Secondary Line"
image: "/assets/images/your-photo.avif"
email: "user@case.edu"
phone: "216.xxx.xxxx"
office: "Building Room"
google_scholar: "URL_TO_SCHOLAR_PROFILE"
funding: "Total funding amount or statement"
research_areas:
  - "Area 1"
  - "Area 2"
research_summary: "A short paragraph about your current work."
teaching_interests: "List of classes or subjects."
education:
  - "Degree, University, Year"
awards:
  - "Award Name, Year"
students:
  - "slug-of-student-1"
  - "slug-of-student-2"
---
Your full bio or personal statement goes here. It will appear above the Research/Students tabs.
