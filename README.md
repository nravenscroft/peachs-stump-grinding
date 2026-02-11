# Peach's Stump Grinding — Website

Multi-page static site (HTML/CSS) modeled after the section flow of rvtechtogo.com, but for stump grinding.

## Pages
- `index.html` — Home (hero, service area, why us, process, gallery teaser, reviews teaser, CTA)
- `services.html` — Services + what we can handle + FAQ
- `gallery.html` — Project gallery (placeholder images)
- `reviews.html` — Reviews (placeholder until you add real ones)
- `contact.html` — Contact (form stub + click-to-call/text placeholders)

## Customize
- Update contact info in `site.config.js`.
- Swap images by replacing URLs in the page files.

## Run locally
Open `index.html` in a browser, or:

```bash
cd peachs-stump-grinding
python3 -m http.server 8080
```
Then visit http://localhost:8080

## Deploy
This can be deployed anywhere static hosting is supported (Netlify, Vercel static, Cloudflare Pages, GitHub Pages).
