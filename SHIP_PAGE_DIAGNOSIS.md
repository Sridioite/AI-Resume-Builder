# Ship Page Diagnosis

## Issue: "Ship page is not working"

### Root Cause
The Ship page (Step 8) has a **navigation guard** that prevents access until Step 7 (Test) is completed.

### How It Works
```javascript
useEffect(() => {
  if (!canAccessStep(8)) {
    navigate('/rb/01-problem')  // Redirects to step 1 if step 7 not complete
  }
}, [canAccessStep, navigate])
```

### Why You Can't Access Ship Page
- `canAccessStep(8)` checks if step 7 is complete
- Step 7 is complete only when an artifact is uploaded via BuildPanel
- If step 7 is not complete, you get redirected to `/rb/01-problem`

### Solution
To access the Ship page, you must:

1. Navigate to `/rb/07-test`
2. Complete the BuildPanel workflow:
   - Copy the prompt
   - Build in Lovable
   - Upload an artifact (screenshot, PDF, etc.)
3. Once artifact is uploaded, the "Next Step →" button becomes active
4. Click "Next Step →" to go to Ship page

### Verification Steps
1. Open browser console (F12)
2. Check localStorage: `localStorage.getItem('rb_artifacts')`
3. Verify step 7 has data: `JSON.parse(localStorage.getItem('rb_artifacts'))['7']`
4. If step 7 has data, Ship page should be accessible

### Quick Fix (For Testing Only)
If you want to bypass the guard temporarily for testing:

```javascript
// In Ship.jsx, comment out the navigation guard:
// useEffect(() => {
//   if (!canAccessStep(8)) {
//     navigate('/rb/01-problem')
//   }
// }, [canAccessStep, navigate])
```

**Note:** This is NOT recommended for production. The guard ensures users follow the proper workflow.
