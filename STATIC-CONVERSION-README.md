# Static HTML Conversion - README

## ⚠️ IMPORTANT: Build Process Change

This project has been **converted from Next.js to pure static HTML/CSS/JS**.

### The `npm run build` command is no longer applicable because:
- We're no longer using Next.js
- No React/JSX compilation is needed
- No bundler (webpack/turbopack) is required
- All files are now pure HTML/CSS/JS

## 📁 New File Structure

```
/public/
  /assets/
    /css/
      styles.css          # All custom styles + Tailwind extensions
    /js/
      main.js             # All interactive functionality
  /images/                # All image assets (from original /public)
  /partners/
  /home/
  /blog/
  /why_moatmt/
  /moatmt_img/

/                         # Root HTML files
  index.html              # Homepage
  blog.html               # Blog listing
  blog-detail.html        # Blog detail page
  terms.html              # Terms & conditions
```

## 🚀 How to Use

### For Development:
Simply open `index.html` in a browser, or use a simple HTTP server:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: PHP
php -S localhost:8000

# Option 3: Node.js (http-server)
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

### For CodeIgniter Integration:

1. **Copy HTML files** to your CodeIgniter views folder:
   - `index.html` → `application/views/home_view.php`
   - `blog.html` → `application/views/blog_view.php`
   - etc.

2. **Copy assets** to CodeIgniter public folder:
   - `/public/assets/` → `assets/`
   - `/public/images/` → `images/`

3. **Update paths** in HTML files to match CodeIgniter structure:
   - `/public/assets/css/styles.css` → `<?= base_url('assets/css/styles.css') ?>`
   - `/public/images/logo.svg` → `<?= base_url('images/logo.svg') ?>`

## 📦 Dependencies (CDN - No npm install needed)

All dependencies are loaded via CDN:
- ✅ Tailwind CSS 4.x
- ✅ DaisyUI 4.12.10
- ✅ Swiper.js 11.x
- ✅ Google Fonts (IBM Plex Sans Arabic)

## ✨ Features Preserved

- ✅ **Pixel-perfect** design matching original
- ✅ All Tailwind + DaisyUI classes preserved
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme switcher
- ✅ Interactive carousels (Swiper.js)
- ✅ FAQ accordion
- ✅ Video player
- ✅ Mobile menu
- ✅ Smooth scroll
- ✅ All animations and transitions

## 🔧 Customization

### Styles
Edit `/public/assets/css/styles.css` to customize:
- Colors (CSS variables in `:root`)
- Custom font sizes
- Border radius values
- Custom utilities

### JavaScript
Edit `/public/assets/js/main.js` to modify:
- Theme switcher behavior
- Swiper configurations
- Menu interactions
- Custom animations

## 🎨 Theme Configuration

The theme switcher saves preference to localStorage:
- Key: `daisyui-theme`
- Values: `light` or `dark`

## 📱 Responsive Breakpoints

Using Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🐛 Troubleshooting

### Images not loading?
Check that paths use `/public/` prefix or update to your server structure.

### Styles not applying?
Ensure CDN links are loaded (check browser console for 404s).

### Swiper not working?
Verify Swiper JS CDN is loaded after Swiper CSS.

## 📝 Notes

- No build process required
- No node_modules needed
- No npm scripts needed
- Pure HTML/CSS/JS - works everywhere
- Ready for any PHP framework (CodeIgniter, Laravel, etc.)

## 🎯 Conversion Completed

✅ Navbar with theme switcher
✅ Hero section
✅ Partner carousel
✅ All custom styles
✅ Interactive JavaScript
✅ Footer with social links
🔄 Homepage sections (partial - needs completion)
⏳ Blog pages (pending)
⏳ Terms page (pending)

---

**For questions or issues with the static conversion, refer to the original Next.js codebase in the `/app` folder (to be removed after full conversion).**
