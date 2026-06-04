# GrowthLab Agency — Deployment Guide

> **You don't need coding skills to deploy this.** Follow the steps below and your website will be live in under 30 minutes.

---

## Step 1 — Customize Your Website Content

Before deploying, update these files with your real information:

### Your Business Details
Open `src/lib/utils.js` and update:
- `name` — Your agency name
- `tagline` — Your tagline
- `email` — Your contact email
- `phone` — Your phone number
- `address` — Your city/address
- `url` — Your domain (e.g. `https://www.yourdomain.com`)
- `social` — Your social media profile URLs

### Google Analytics
Open `src/app/layout.js` and replace `G-XXXXXXXXXX` with your real Google Analytics Measurement ID.
*(Get this from analytics.google.com → Admin → Data Streams → Web → Measurement ID)*

### Google Search Console
In `src/app/layout.js`, replace `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` with your actual verification code.
*(Get this from search.google.com/search-console → Add Property → HTML tag method)*

---

## Step 2 — Deploy to Vercel (Recommended — Free)

Vercel is made by the same team as Next.js. It's the easiest way to deploy.

### Option A: Deploy via GitHub (Recommended)

1. **Create a GitHub account** at github.com (free)
2. **Create a new repository** called `growthlab-agency`
3. **Upload all files** from the `growthlab-agency` folder to that repository
4. **Go to vercel.com** and sign up with your GitHub account
5. Click **"Add New Project"** → select your repository
6. Vercel auto-detects Next.js — click **"Deploy"**
7. Your site is live in ~2 minutes at a free `.vercel.app` URL

### Option B: Deploy via Vercel CLI

If you're comfortable with a terminal:
```bash
npm install -g vercel
cd growthlab-agency
npm install
vercel
```

---

## Step 3 — Connect Your Custom Domain

1. In Vercel dashboard, go to your project → **Settings → Domains**
2. Click **"Add Domain"** and enter your domain (e.g. `growthlabagency.com`)
3. Vercel will give you DNS records to add
4. Log into your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
5. Find **DNS Settings** and add the records Vercel provides:
   - **A Record**: `@` → Vercel's IP
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
6. Wait 10–60 minutes for DNS to propagate
7. Your site is live at your domain with free HTTPS!

---

## Step 4 — Set Up the Contact Form

The contact form currently simulates a submission. To make it actually send emails, pick one:

### Formspree (Easiest — No code needed)
1. Go to formspree.io and create a free account
2. Create a new form → copy your form endpoint URL
3. Open `src/components/ui/ContactForm.jsx`
4. Replace the `await new Promise(...)` line with:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
if (!response.ok) throw new Error('Failed')
```

### EmailJS (Also free, no backend)
Follow EmailJS docs at emailjs.com for setup instructions.

---

## Step 5 — Add Your Real Images

Replace placeholder images by searching for free images on:
- **Unsplash** (unsplash.com) — High quality, free
- **Pexels** (pexels.com) — Free commercial use

To swap images:
- Portfolio images: edit `src/data/portfolio.js` → change the `image` URLs
- Blog images: edit `src/data/blog.js` → change the `image` URLs
- Team/testimonial avatars: edit `src/data/testimonials.js`

---

## Step 6 — Submit to Google Search Console

1. Go to search.google.com/search-console
2. Add your domain as a property
3. Verify ownership (HTML tag method — paste code into `layout.js`)
4. Submit your sitemap: enter `https://yourdomain.com/sitemap.xml`
5. Google will start crawling your site within a few days

---

## Folder Structure Reference

```
growthlab-agency/
├── src/
│   ├── app/                    # All pages
│   │   ├── page.js             # Home page
│   │   ├── services/           # Services page
│   │   ├── reels-engagement/   # Reels page
│   │   ├── about/              # About Us
│   │   ├── blog/               # Blog listing + single posts
│   │   ├── contact/            # Contact page
│   │   ├── portfolio/          # Portfolio/Case Studies
│   │   ├── testimonials/       # Testimonials
│   │   ├── faq/                # FAQ
│   │   ├── layout.js           # Site-wide layout (SEO, fonts)
│   │   ├── sitemap.js          # Auto-generated sitemap
│   │   └── robots.js           # Robots.txt
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   └── ui/                 # Reusable components
│   ├── data/                   # ← EDIT THESE to update content
│   │   ├── services.js         # Your services
│   │   ├── testimonials.js     # Client reviews
│   │   ├── portfolio.js        # Case studies
│   │   ├── blog.js             # Blog posts
│   │   └── faq.js              # FAQ questions
│   ├── lib/
│   │   └── utils.js            # ← Main config (name, contact, etc.)
│   └── styles/
│       └── globals.css         # Global styles
├── package.json
├── next.config.js
├── tailwind.config.js
└── DEPLOYMENT_GUIDE.md         # This file
```

---

## Need Help?

If you get stuck at any point, you can:
1. Ask your developer for help with the GitHub/terminal steps
2. Reach out to Vercel support (vercel.com/support)
3. Search "how to deploy Next.js to Vercel" on YouTube — there are many free tutorials

**Most non-technical users find Vercel's drag-and-drop deployment the easiest path.**
