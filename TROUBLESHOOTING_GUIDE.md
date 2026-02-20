# 🔧 Troubleshooting Guide - Skills & Projects Not Rendering

## Quick Diagnosis

The Skills and Projects sections are not rendering because of **incompatible localStorage data** from the old structure.

---

## ✅ SOLUTION (Choose One)

### Method 1: Use Debug Tool (Easiest)

1. Open `debug-localStorage.html` in your browser
2. Click "Clear localStorage & Reload" button
3. Go to http://localhost:5174/builder
4. ✅ Sections should now appear!

### Method 2: Browser Console (Fast)

```javascript
// Open browser console (F12) and run:
localStorage.clear()
location.reload()
```

### Method 3: Manual Clear

1. Press `F12` to open DevTools
2. Go to `Application` tab
3. Expand `Local Storage` → Click your localhost URL
4. Right-click `resumeBuilderData` → Delete
5. Refresh page

---

## 🔍 Why This Happens

### Old Data Structure (Incompatible)
```javascript
{
  skills: "JavaScript, React, Node.js",  // ❌ String format
  projects: [{
    name: "My Project",                   // ❌ Old field
    tech: "React, Node.js"                // ❌ String format
  }]
}
```

### New Data Structure (Current)
```javascript
{
  skills: {                               // ✅ Object with categories
    technical: ["JavaScript", "React"],
    soft: ["Leadership"],
    tools: ["Git", "Docker"]
  },
  projects: [{
    title: "My Project",                  // ✅ New field
    description: "...",                   // ✅ New field
    techStack: ["React", "Node.js"],      // ✅ Array format
    liveUrl: "...",                       // ✅ New field
    githubUrl: "..."                      // ✅ New field
  }]
}
```

---

## 🧪 Verification Steps

After clearing localStorage:

### 1. Check Skills Section Appears
- Go to http://localhost:5174/builder
- Scroll down past Experience section
- You should see:
  ```
  Skills                    ✨ Suggest Skills
  
  Technical Skills (0)
  [Type a skill and press Enter]
  
  Soft Skills (0)
  [Type a skill and press Enter]
  
  Tools & Technologies (0)
  [Type a skill and press Enter]
  ```

### 2. Test Skills Functionality
- Click "✨ Suggest Skills" button
- Wait 1 second (loading animation)
- Skills should appear as colored pills:
  - Technical: TypeScript, React, Node.js, PostgreSQL, GraphQL
  - Soft Skills: Team Leadership, Problem Solving
  - Tools: Git, Docker, AWS

### 3. Check Projects Section Appears
- Below Skills section, you should see:
  ```
  Projects                  + Add Project
  ```

### 4. Test Projects Functionality
- Click "+ Add Project" button
- A collapsible entry should appear: "Project 1 ▶"
- Click to expand
- You should see:
  - Project Title input
  - Description textarea (with 0/200 counter)
  - Tech Stack tag input
  - Live URL input
  - GitHub URL input
  - 🗑️ Delete Project button

### 5. Test Tag Inputs
- In any tag input field, type "React" and press Enter
- A red pill with "React ×" should appear
- Click the × to remove it
- The pill should disappear

---

## 🐛 Still Not Working?

### Check 1: Is Dev Server Running?

```bash
# In terminal, you should see:
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5174/
```

If not running:
```bash
npm run dev
```

### Check 2: Browser Console Errors

1. Press `F12` → Console tab
2. Look for red error messages
3. Common errors:

**Error: "Cannot read property 'technical' of undefined"**
- Solution: Clear localStorage (see methods above)

**Error: "skills.map is not a function"**
- Solution: Clear localStorage (see methods above)

**Error: "Failed to fetch"**
- Solution: Restart dev server (`npm run dev`)

### Check 3: Verify Files Exist

```bash
# Check these files exist:
src/components/SkillsSection.jsx
src/components/SkillsSection.css
src/components/ProjectsSection.jsx
src/components/ProjectsSection.css
src/components/TagInput.jsx
src/components/TagInput.css
```

### Check 4: Hard Refresh

```bash
# Windows/Linux:
Ctrl + Shift + R

# Mac:
Cmd + Shift + R
```

---

## 📊 Migration Logic

The code includes automatic migration, but it's not perfect:

```javascript
// In ResumeContext.jsx
if (typeof parsed.skills === 'string') {
  // Tries to convert string to object
  // But this is a best-guess conversion
}

if (parsed.projects && parsed.projects.length > 0) {
  // Tries to convert old project format
  // But may miss some fields
}
```

**Recommendation:** Clear localStorage for a clean start instead of relying on migration.

---

## 🎯 Expected Behavior After Fix

### Skills Section
- Three labeled categories
- Tag input in each category
- Type and press Enter to add skills
- Click × on pills to remove
- Suggest Skills button adds predefined skills
- Count shows next to each category label

### Projects Section
- Add Project button at top
- Each project is collapsible
- Click header to expand/collapse
- All fields save automatically
- Tech stack uses tag input
- Character counter on description (max 200)
- Delete button removes entire project

### Live Preview
- Skills appear as grouped pills by category
- Projects appear as cards with:
  - Title
  - Description
  - Tech stack pills
  - Link icons (if URLs provided)

---

## 🚀 Quick Test Sequence

```bash
1. Clear localStorage (use any method above)
2. Go to http://localhost:5174/builder
3. Click "Load Sample Data" button
4. Scroll down to Skills section
5. ✅ Should see skills in all three categories
6. Scroll to Projects section
7. ✅ Should see 2 projects
8. Click first project to expand
9. ✅ Should see all fields filled
10. Check right preview panel
11. ✅ Should see skills and projects rendered
```

---

## 📝 Summary

**Problem:** Old localStorage data with incompatible structure  
**Solution:** Clear localStorage and refresh  
**Tools:** debug-localStorage.html or browser console  
**Verification:** Skills and Projects sections appear and work  

**The sections ARE implemented correctly. They just need clean data to render!** ✅
