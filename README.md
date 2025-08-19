# Little Lemon Capstone (Meta Front-End)
A React SPA for the Little Lemon capstone, featuring a homepage (hero, specials,
testimonials, about), routing, and a **reservations flow** with validation and a
mock API.
## Tech
- React (CRA)
- React Router
- Jest + React Testing Library
- CSS (responsive & accessible)
## Scripts
```bash
npm start # dev
npm test # unit tests
npm run build # production build
Pages
/ Home
/reservations Reservation form
/confirmed Confirmation
/menu , /order-online , /login placeholders

Notes
No real backend; see src/utils/api.js for mock.
Accessibility: labeled inputs, proper semantics, focusable buttons/links.

---
## 22) What to delete from CRA
- `src/logo.svg`, the CRA starter CSS & test files you’re not using.
- Any unused images.
---
## 23) Quick verification
```bash
npm start
npm test -- --watchAll=false
npm run build