# Elan Construction Corp — Website

A clean, responsive, bilingual (English/Spanish) one-page website for **Elan Construction Corp**, a siding & remodeling company in Mt Holly, NC.

## Business info
- **Address:** 501 Dutch Ave, Mt Holly, NC 28120
- **Phone:** +1 (980) 895-6776
- **Email:** constructionelan6@gmail.com

## Features
- Responsive design (mobile, tablet, desktop)
- Improved gold logo recreated as crisp SVG (`assets/logo.svg`, `assets/mark.svg`)
- Sections: Hero, Services, About, Why Us, Contact
- Click-to-call, click-to-email, and Google Maps location
- Contact form that opens the visitor's email app with details pre-filled
- One-click English ⟷ Spanish language toggle
- SEO basics: meta description, Open Graph tags, LocalBusiness structured data

## Files
```
index.html      Page structure and content
styles.css      Styling and responsive layout
script.js       Mobile menu, language toggle, contact form
assets/         SVG logo, mark/favicon
```

## Run locally
It's a static site — just open `index.html` in a browser, or serve it:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy (free options)
- **Netlify / Vercel:** drag-and-drop the folder, or connect this repo.
- **GitHub Pages:** Settings → Pages → deploy from this branch.

## Customize later
- **Photos:** swap the dark hero background and add a project gallery once real job photos are available.
- **Contact form backend:** the form currently opens the visitor's email app (`mailto`). To receive submissions directly in your inbox without that step, connect a free form service like [Formspree](https://formspree.io) — update the `form` handler in `script.js`.
- **Business hours / services:** edit the text in `index.html` and the matching Spanish strings in `script.js`.
