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

## Contributing Content
To maintain the site without manual data entry for every member, we use a template-based system. **Do not edit the code directly unless authorized.**

### Adding/Updating Your Profile
Lab member profiles are generated automatically from Markdown files in the `_people/` directory.

1. **Get a Template**: Go to the `/templates` folder in this repository.
2. **Choose Your Version**: 
   * `profile-basic.md`: Use this for a quick setup with just essential contact info and your research focus.
   * `profile-detailed.md`: Use this for a full profile including a detailed biography, papers, and professional awards.
3. **Fill & Rename**: Fill in your data between the quotes. Save the file as `firstname-lastname.md`.
4. **Submit**: Email your filled `.md` file and a high-quality profile photo to the site lead.

### Adding Publications
If you have a new paper to feature:
1. Create a new Markdown file in the `_papers/` directory.
2. Ensure the `name:` field in the paper's front matter matches the slug you use in your profile's `papers:` list.

---

## Guidelines
* **Slugs**: Always use lowercase with hyphens for slugs (e.g., `vipin-chaudhary`).
* **Images**: All profile photos should be placed in `assets/images/`.
* **External Links**: Use the `personal_site:` field for your CWRU directory or personal portfolio.