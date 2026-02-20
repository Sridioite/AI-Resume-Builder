# 🚀 Template System - Quick Start

## What's New

You now have a complete template selection system with visual previews and color customization!

---

## 🎯 Quick Test (2 minutes)

### 1. Go to Builder Page
```
http://localhost:5174/builder
```

### 2. Find Template Picker
Scroll to the preview panel on the right. You'll see:
- **Template** section with 3 visual thumbnails
- **Color Theme** section with 5 colored circles

### 3. Try Templates
Click each template thumbnail:
- **Classic** - Traditional with serif fonts and horizontal rules
- **Modern** - Two-column with colored sidebar
- **Minimal** - Clean and spacious

Watch the resume preview update instantly! ✨

### 4. Try Colors
Click each color circle:
- Teal (default)
- Navy
- Burgundy
- Forest
- Charcoal

See the accent color change throughout the resume! 🎨

### 5. Test Persistence
1. Select Modern template + Navy color
2. Refresh the page
3. Your choices are saved! ✅

### 6. Test Export
1. Go to `/preview` page
2. Click "Print / Save as PDF"
3. See the toast notification! 🎉

---

## 📍 Where to Find It

### Builder Page (`/builder`)
- Template picker at top of preview panel
- Above ATS Score section
- Shows template thumbnails + color circles

### Preview Page (`/preview`)
- Template picker at top
- Above export buttons
- Same functionality as builder

---

## 🎨 Template Comparison

| Feature | Classic | Modern | Minimal |
|---------|---------|--------|---------|
| Layout | Single column | Two column | Single column |
| Font | Serif (Georgia) | Sans-serif | Sans-serif |
| Borders | Horizontal rules | None | None |
| Sidebar | No | Yes (colored) | No |
| Header | Left-aligned | Left-aligned | Centered |
| Spacing | Standard | Compact | Generous |
| Best For | Traditional jobs | Creative roles | Tech/Design |

---

## 🎯 Color Guide

| Color | Vibe | Best For |
|-------|------|----------|
| Teal | Fresh, modern | Tech, startups |
| Navy | Professional | Corporate, finance |
| Burgundy | Bold, creative | Design, marketing |
| Forest | Natural, calm | Environmental, education |
| Charcoal | Minimal, serious | Legal, consulting |

---

## ✅ Quick Checklist

Test these features:

- [ ] Template thumbnails visible
- [ ] Active template has blue border + checkmark
- [ ] Clicking template changes layout
- [ ] Color circles visible
- [ ] Active color has checkmark
- [ ] Clicking color changes accent color
- [ ] Choices persist after refresh
- [ ] Toast shows on PDF export
- [ ] Print dialog opens correctly

---

## 🐛 Troubleshooting

### Templates not showing?
- Clear localStorage: `localStorage.clear(); location.reload();`
- Check browser console for errors

### Colors not changing?
- Refresh the page
- Check if CSS variable is set: `getComputedStyle(document.documentElement).getPropertyValue('--resume-accent-color')`

### Toast not appearing?
- Check browser console
- Ensure ExportButtons component is loaded

---

## 📚 More Info

See `TEMPLATE_SYSTEM_COMPLETE.md` for:
- Detailed feature list
- Technical implementation
- Complete testing guide
- Responsive behavior
- Print/PDF details

---

## 🎉 You're All Set!

The template system is fully functional. Start customizing your resume with different layouts and colors!

**Enjoy!** ✨
