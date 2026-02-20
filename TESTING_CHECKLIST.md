# AI Resume Builder - Testing Checklist

## ✅ Feature Verification

### 1. Template Options (Classic, Modern, Minimal)
**Location:** `/builder` and `/preview`

**Test Steps:**
1. Navigate to http://localhost:5173/builder
2. Look for template buttons in the preview header
3. Click "Classic" - should see traditional serif font, centered name
4. Click "Modern" - should see sans-serif, bold typography
5. Click "Minimal" - should see ultra-clean Helvetica, uppercase name
6. Refresh page - selected template should persist

**Expected Result:**
- ✅ 3 template buttons visible
- ✅ Layout changes without losing content
- ✅ Template persists after refresh

---

### 2. Template Switching Changes Layout Without Losing Content
**Test Steps:**
1. Fill in name: "John Doe"
2. Add experience: "Built a web application"
3. Switch to "Modern" template
4. Verify name still shows "John Doe"
5. Verify experience still shows "Built a web application"
6. Switch to "Minimal" template
7. Content should remain unchanged

**Expected Result:**
- ✅ Content persists across template changes
- ✅ Only styling/layout changes
- ✅ Data and presentation are separate

---

### 3. Bullet Without Action Verb Shows Suggestion
**Location:** Experience and Projects sections

**Test Steps:**
1. Add new Experience entry
2. In description field, type: "worked on a project"
3. Look for inline suggestion below the textarea

**Expected Result:**
- ✅ Yellow suggestion box appears
- ✅ Shows: "💡 Start with a strong action verb."
- ✅ Input is not blocked

---

### 4. Bullet Without Numbers Shows 'Add Measurable Impact' Suggestion
**Test Steps:**
1. In Experience description, type: "Built a web application"
2. Look for inline suggestion

**Expected Result:**
- ✅ Yellow suggestion box appears
- ✅ Shows: "💡 Add measurable impact (numbers)."

**Test Fix:**
1. Change to: "Built a web application that increased efficiency by 40%"
2. Suggestion should disappear

---

### 5. Top 3 Improvements Section Under ATS Score
**Location:** Right panel in `/builder`

**Test Steps:**
1. Start with empty resume
2. Scroll to ATS Score section
3. Look below the score for "Top 3 Improvements"

**Expected Result:**
- ✅ Section titled "Top 3 Improvements" visible
- ✅ Shows numbered improvement items (1, 2, 3)
- ✅ Each has title and description
- ✅ Suggestions are actionable

**Example Improvements:**
- "Add More Projects" - Include at least 2 projects
- "Add Measurable Impact" - Include numbers/metrics
- "Expand Your Summary" - Write 40-120 words

---

## 🔧 Try to Break It

### Test 1: Rapid Template Switching
1. Click Classic → Modern → Minimal → Classic rapidly
2. Verify no errors in console
3. Verify content remains intact

### Test 2: Long Bullet Points
1. Type a very long description (500+ characters)
2. Verify suggestions still appear
3. Verify no layout breaks

### Test 3: Empty State
1. Clear all form fields
2. Verify preview shows placeholder text
3. Verify ATS score shows 0
4. Verify improvements show all suggestions

### Test 4: LocalStorage Persistence
1. Fill entire resume
2. Select "Modern" template
3. Close browser tab
4. Reopen http://localhost:5173/builder
5. Verify all data persists
6. Verify "Modern" template is still selected

---

## 🎯 All Checks Summary

- ✅ 3 template options (Classic, Modern, Minimal) visible
- ✅ Template switching changes layout without losing content
- ✅ Bullet without action verb shows suggestion
- ✅ Bullet without numbers shows 'Add measurable impact' suggestion
- ✅ "Top 3 Improvements" section under ATS score
- ✅ Template choice persists in localStorage
- ✅ Inline guidance is non-blocking
- ✅ Premium design maintained
- ✅ No flashy elements added
- ✅ All routes unchanged
