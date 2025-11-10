# ⚡ QUICK REFERENCE CARD

## Deploy in 5 Minutes (Recommended)

1. Go to: https://app.netlify.com/drop
2. Drag `index.html` into the box
3. Get your live URL
4. Done! 🎉

Optional: Connect your domain in Netlify settings → Domain management

---

## Common Tasks

### Change Email Addresses
**Find:** `hello@localedgesolutions.ai`
**Replace with:** your actual email
**Locations:** All CTA buttons and mailto: links

### Change Phone Number
**Currently:** No phone number shown
**Add it:** Search for "Questions? Email" near the bottom
**Format:** `(555) 123-4567`

### Update Founder Photos
**Replace files:**
- `images/ben-headshot.jpg` 
- `images/brian-headshot.png`

**Keep:** Same filenames, or update HTML img src paths

### Change Brand Color
**Find in CSS:**
```css
--teal: #14b8a6;
--teal-light: #5eead4;
--teal-dark: #0d9488;
```
**Replace with:** Your brand colors in hex format

### Add More Testimonials
**Location:** Search for `<div class="testimonial">`
**Copy:** One complete testimonial div
**Paste:** Before the closing `</div>` of testimonials
**Update:** Carousel dots count to match

### Edit Services
**Location:** Search for `<div class="solution-card">`
**Edit:** The three service descriptions
**Keep:** The scroll-reveal classes for animations

---

## File Structure

```
📁 local-edge-website-package/
├── 📄 index.html                    ← The complete website
├── 📄 README.md                     ← Full instructions (start here)
├── 📄 MESSAGE-TO-SEND.txt          ← Copy/paste message for brother-in-law
├── 📄 QUICK-REFERENCE.md           ← This file
├── 📁 images/
│   ├── 🖼️ ben-headshot.jpg
│   ├── 🖼️ brian-headshot.png
│   ├── 🖼️ hero-portal.png
│   ├── 🖼️ transformation-bg.png
│   └── 🖼️ portal-accent.png
└── 📁 docs/
    └── 📄 LOVABLE-DEPLOYMENT.md    ← Lovable.dev specific guide
```

---

## Testing Checklist

Before going live, test:
- ✅ Desktop view (Chrome, Firefox, Safari)
- ✅ Mobile view (iPhone, Android)
- ✅ Tablet view (iPad)
- ✅ All CTA buttons go to correct email
- ✅ Mobile menu opens/closes
- ✅ FAQ accordion expands
- ✅ Testimonial carousel auto-rotates
- ✅ Smooth scroll on anchor links
- ✅ Counter animations trigger on scroll

---

## Domain Setup (After Netlify Deploy)

1. **In Netlify:**
   - Click site → Domain settings
   - Add custom domain: `www.localedgesolutions.ai`
   - Follow their SSL setup (automatic)

2. **In Your Domain Registrar:**
   - Update A record to Netlify's IP
   - Or use CNAME record
   - (Netlify shows exact DNS records you need)

3. **Wait:** DNS changes take 5 min - 48 hours (usually under 1 hour)

---

## Troubleshooting

**Site looks broken after deploy:**
- Check if images loaded (might need to reupload)
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

**Mobile menu not working:**
- JavaScript may not have loaded
- Check browser console for errors

**Animations not smooth:**
- This is normal on old devices
- Works great on modern phones/computers

**Cursor effect missing:**
- Only shows on desktop with mouse
- Intentionally hidden on mobile/touch devices

---

## Get Help

**Deployment issues:** 
- Netlify docs: https://docs.netlify.com
- Their support is AMAZING and free

**Content updates:**
- Just edit the HTML file directly
- Search for the text you want to change
- Save and redeploy

**Need bigger changes:**
- Consider hiring a web developer
- Or use Lovable.dev to rebuild (see docs/LOVABLE-DEPLOYMENT.md)

---

## Important Notes

⚠️ **SAVE THIS PACKAGE:** Keep all these files backed up!

📧 **UPDATE EMAILS:** Don't forget to change placeholder emails

🔒 **SSL:** Netlify provides free SSL (https://) automatically

📊 **Analytics:** Add Google Analytics code before `</body>` tag

---

**Questions?** Read the full README.md or email ben@localedgesolutions.ai

**Ready to launch?** Deploy to Netlify now! It's free and takes 5 minutes! 🚀
