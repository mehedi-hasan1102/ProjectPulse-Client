/projectpulse-frontend
│
├─ /app
│   ├─ /auth
│   │   └─ login/page.tsx             # Login page
│   ├─ /admin
│   │   ├─ dashboard/page.tsx         # Admin Dashboard
│   │   ├─ projects/page.tsx          # Admin: List all projects
│   │   ├─ projects/[id]/page.tsx     # Project detail view (Admin)
│   │   ├─ employees/page.tsx         # Manage employees
│   │   ├─ clients/page.tsx           # Manage clients
│   │   └─ risks/page.tsx             # View all risks
│   ├─ /employee
│   │   ├─ dashboard/page.tsx         # Employee Dashboard
│   │   ├─ projects/page.tsx          # Assigned projects
│   │   ├─ projects/[id]/page.tsx     # Project detail view (Employee)
│   │   └─ checkin/page.tsx           # Weekly check-in form
│   ├─ /client
│   │   ├─ dashboard/page.tsx         # Client Dashboard
│   │   ├─ projects/page.tsx          # Assigned projects
│   │   └─ feedback/page.tsx          # Weekly feedback form
│   └─ /components
│       ├─ Navbar.tsx
│       ├─ Sidebar.tsx
│       ├─ ProjectCard.tsx
│       ├─ RiskCard.tsx
│       ├─ CheckInForm.tsx
│       ├─ FeedbackForm.tsx
│       └─ ActivityTimeline.tsx
│
├─ /context
│   └─ AuthContext.tsx                 # User context / login state
│
├─ /hooks
│   └─ useFetch.ts                     # Custom fetch hook (API calls to backend)
│
├─ /lib
│   └─ auth.ts                         # JWT handling, role checking
│
├─ /services
│   ├─ api.ts                          # Axios / fetch setup for backend
│   ├─ projects.ts                     # Project-related API functions
│   ├─ checkins.ts                     # Check-in API functions
│   ├─ feedback.ts                     # Feedback API functions
│   └─ risks.ts                        # Risk API functions
│
├─ /styles
│   └─ globals.css
│
├─ /public
│   └─ images/                         # Logos, icons, demo images
│
├─ next.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
