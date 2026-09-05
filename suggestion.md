# Portfolio Improvement Suggestions

## Overall Rating: 7.5 / 10 → Target: 9 / 10

---

## ✅ Fixed & Completed

### 1. Hardcoded EmailJS Credentials — FIXED
Credentials moved from `Contact.jsx` to `.env` using Vite env vars.
`.env` added to `.gitignore`. `.env.example` created for reference.

> ⚠️ Your old keys (`service_6e81197`, `vGyvHNpbS_ximT6EO`) were already in Git history.
> **Rotate them now** at https://dashboard.emailjs.com

### 2. No Loading State on Contact Form — FIXED
Added `isSubmitting` state. Button now shows "Sending..." and is disabled during submission to prevent double-sends.

### 3. CSS Keyframes Injected via `useEffect` — FIXED
`gridPulse` and `dotPulse` keyframes moved to `src/assets/css/index.css`.
`useEffect` in `Hero.jsx` now only calls `Prism.highlightAll()`.

### 4. `eslint-disable` Comments — FIXED
Removed `/* eslint-disable no-unused-vars */` from `Hero.jsx` and `App.jsx` by fixing the actual unused imports.

### 5. Missing `aria-label` / `aria-hidden` on Icons — FIXED
Added `aria-hidden="true"` to all decorative Font Awesome and Lucide icons.
Added `aria-label` to all external links (Resume, Contact Me).
Added `aria-label` to all form inputs.

### 6. 404 Not Found Page — FIXED
Added a `NotFound` component and `<Route path="*">` fallback in `App.jsx`.

### 7. SEO Meta Tags — FIXED
Added to `index.html`:
- `<meta name="description">`, `<meta name="keywords">`, `<meta name="author">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card tags

---

## 🔴 Still Needs Attention

### 8. Rotate Exposed EmailJS Keys
Even though keys are now in `.env`, the old values were committed to Git and are in the history.
1. Go to https://dashboard.emailjs.com
2. Regenerate your Public Key
3. Update `.env` with the new values

### 9. Vulnerable Dependencies
Run the following to audit and update packages:

```bash
pnpm audit
pnpm update
```

Key packages to update:
| Package | Severity | Issue |
|---|---|---|
| `postcss` | Critical | Path traversal / file read |
| `rollup` | Critical | Arbitrary file write |
| `react-router-dom` | High | XSS in RSC redirect |
| `nanoid` | High | Infinite loop / DoS |
| `ajv` | High | ReDoS vulnerability |
| `tar-fs` | High | Path traversal on extraction |
| `browserslist` | High | Unbounded memory growth |
| `minimatch` | High | ReDoS vulnerability |

---

## 🟢 Nice to Have (Not Yet Done)

### 10. Typo in Folder Name
`src/pages/EditionalExperience/` should be renamed to `src/pages/AdditionalExperience/`.
Requires updating the import in `App.jsx` as well.

### 11. Add GitHub Links to Projects
Currently project cards only have live preview links.
Adding GitHub repo links would strengthen the portfolio for technical recruiters.

### 12. Extract Shared Resume Button Component
The "Get Resume" button is duplicated in `Hero.jsx` and `Contact.jsx`.
Extract it into `src/components/ResumeButton.jsx`.

### 13. Lazy Module Import in `tailwind.config.js`
A `require()` call inside the `plugins` array is technically a lazy import.
Move it to the top of the file:

```js
const tailwindAnimate = require("tailwindcss-animate");
// ...
plugins: [tailwindAnimate],
```

---

## ✅ Already Good (No Changes Needed)

- Responsive design across all breakpoints
- Smooth animations with Framer Motion and Magic UI
- Form validation on the contact form
- `rel="noopener noreferrer"` on all external links
- Clean project structure with clear separation of pages and components
- Deployed on Vercel with a custom domain
- Lenis smooth scroll integration
