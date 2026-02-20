# 🗺️ Where to Find Each Feature

## 🌐 Server URL
**http://localhost:5174/**

---

## 1️⃣ Template Options (Classic, Modern, Minimal)

### Location 1: Builder Page
```
http://localhost:5174/builder

Look at: RIGHT PANEL → Preview Header
You'll see: [Classic] [Modern] [Minimal] buttons
```

### Location 2: Preview Page
```
http://localhost:5174/preview

Look at: TOP OF PAGE (above resume)
You'll see: [Classic] [Modern] [Minimal] buttons
```

### What to Test:
1. Click "Classic" → See traditional serif font, centered name
2. Click "Modern" → See sans-serif, bold typography
3. Click "Minimal" → See Helvetica, uppercase name
4. Refresh page → Selected template persists

---

## 2️⃣ Template Switching Without Losing Content

### How to Test:
```
1. Go to: http://localhost:5174/builder
2. Fill in: Name = "John Doe"
3. Add: Experience = "Built a web app"
4. Click: "Modern" template button
5. Verify: Name still shows "John Doe"
6. Verify: Experience still shows "Built a web app"
7. Click: "Minimal" template button
8. Verify: All content still there
```

### What You'll See:
- Font changes
- Layout spacing changes
- Alignment changes
- BUT: All text content remains exactly the same

---

## 3️⃣ Bullet Without Action Verb → Shows Suggestion

### Location:
```
http://localhost:5174/builder

Look at: LEFT PANEL → Experience Section
Or: LEFT PANEL → Projects Section
```

### How to Test:
```
1. Click: "+ Add" button in Experience section
2. Fill in: Company = "Tech Corp"
3. Fill in: Role = "Developer"
4. In Description field, type: "worked on a project"
5. Look BELOW the textarea
```

### What You'll See:
```
┌─────────────────────────────────────────────┐
│ [Description textarea]                      │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 💡 Start with a strong action verb.        │ ← Yellow box
└─────────────────────────────────────────────┘
```

### To Make It Disappear:
Change text to: "Built a project" (starts with action verb)

---

## 4️⃣ Bullet Without Numbers → Shows 'Add Measurable Impact'

### Location:
Same as above (Experience or Projects description fields)

### How to Test:
```
1. In Description field, type: "Built a web application"
2. Look BELOW the textarea
```

### What You'll See:
```
┌─────────────────────────────────────────────┐
│ [Description textarea]                      │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 💡 Add measurable impact (numbers).        │ ← Yellow box
└─────────────────────────────────────────────┘
```

### To Make It Disappear:
Change text to: "Built a web application that increased efficiency by 40%"

### Both Suggestions Can Show Together:
If you type: "worked on project" (no action verb, no numbers)
You'll see BOTH suggestions:
```
┌─────────────────────────────────────────────┐
│ 💡 Start with a strong action verb.        │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ 💡 Add measurable impact (numbers).        │
└─────────────────────────────────────────────┘
```

---

## 5️⃣ Top 3 Improvements Section

### Location:
```
http://localhost:5174/builder

Look at: RIGHT PANEL → Below ATS Score
Scroll down if needed
```

### Visual Layout:
```
┌─────────────────────────────────────────────┐
│ ATS Readiness Score                         │
│                                             │
│        [Score Circle: 45/100]               │
│                                             │
│ [Progress Bar: ████░░░░░░]                  │
│                                             │
│ Suggestions to Improve                      │
│ • Add at least 2 projects                   │
│ • Add measurable impact (numbers)           │
└─────────────────────────────────────────────┘
┌─────────────────────────────────────────────┐
│ Top 3 Improvements                          │ ← THIS SECTION
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ [1] Add More Projects                   ││
│ │     Include at least 2 projects to...   ││
│ └─────────────────────────────────────────┘│
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ [2] Add Measurable Impact               ││
│ │     Include numbers, percentages...     ││
│ └─────────────────────────────────────────┘│
│                                             │
│ ┌─────────────────────────────────────────┐│
│ │ [3] Expand Your Summary                 ││
│ │     Write a more detailed summary...    ││
│ └─────────────────────────────────────────┘│
└─────────────────────────────────────────────┘
```

### What You'll See:
- Heading: "Top 3 Improvements"
- 3 numbered items with red circular badges (1, 2, 3)
- Each item has:
  - Bold title
  - Gray description text
- Light gray background boxes

### How It Changes:
- Start with empty resume → See 3 improvements
- Add 2 projects → "Add More Projects" disappears
- Add numbers to bullets → "Add Measurable Impact" disappears
- Complete all → Entire section disappears

---

## 🎯 Quick Test Path

### 5-Minute Complete Test:
```
1. Open: http://localhost:5174/builder

2. Test Templates:
   - Click "Modern" button (top right of preview)
   - Click "Minimal" button
   - Click "Classic" button
   ✅ Layout changes each time

3. Test Bullet Suggestions:
   - Click "+ Add" in Experience
   - Type: "worked on project"
   ✅ See 2 yellow suggestion boxes

4. Test Improvements:
   - Scroll down in right panel
   ✅ See "Top 3 Improvements" section with numbered items

5. Test Persistence:
   - Refresh page (F5)
   ✅ Template selection persists
   ✅ All form data persists
```

---

## 📱 Visual Indicators

### Template Buttons:
- **Inactive:** Gray border, gray text
- **Active:** Red background, white text
- **Hover:** Red border, red text

### Bullet Suggestions:
- **Color:** Light yellow background (#fff9e6)
- **Border:** Orange left border
- **Icon:** 💡 lightbulb emoji
- **Position:** Directly below textarea

### Improvement Panel:
- **Background:** White with light gray border
- **Numbers:** Red circles with white text
- **Layout:** Stacked vertically
- **Position:** Below ATS Score section

---

## 🔍 If You Don't See Something

### Template Buttons Not Visible?
- Make sure you're on /builder or /preview
- Look in the preview panel header (right side)
- Scroll up if needed

### Bullet Suggestions Not Showing?
- Make sure you're typing in Experience or Projects description
- Type at least a few words
- Suggestions only show when there's text

### Improvements Panel Not Visible?
- Scroll down in the right panel
- It's below the ATS Score section
- If resume is complete, panel won't show

---

## ✅ Success Criteria

You've successfully found all features when you can:

1. ✅ Click 3 different template buttons and see layout change
2. ✅ See yellow suggestion boxes when typing bullets
3. ✅ See "Top 3 Improvements" section with numbered items
4. ✅ Refresh page and see template choice persists
5. ✅ Switch templates without losing any form data

**All features are live and working at: http://localhost:5174/**
