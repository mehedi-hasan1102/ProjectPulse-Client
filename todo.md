Frontend-এ তোমার ProjectPulse প্রজেক্টে প্রতিটি রোল অনুযায়ী কী কী ফাংশনালিটি লাগবে, সেটা আমি পরিষ্কারভাবে ব্যাখ্যা করছি। মূলত তোমার frontend হবে Next.js + Tailwind CSS, তাই API calls করে data দেখানো, form submit করা, এবং dashboard visualizations সবই করবে।

<!-- ১. Authentication / Login -->
<!-- 
প্রতিটি user role ব্যবহার করবে

Login form: Email + Password

JWT token সংরক্ষণ (LocalStorage / Context)

Protected route logic: রোল অনুযায়ী redirect

UI Features

Loading spinner

Error messages (invalid credentials)

Role-based redirection:

Admin → Admin dashboard

Employee → Employee dashboard

Client → Client dashboard -->

২. Admin Functionality

Admin Dashboard এর ফাংশনালিটি:

Project Management:

Project create form (name, description, start/end dates, assign client & employees)

<!-- Project list view (status, healthScore, dates) -->


Risk Overview:

High-risk projects summary

<!-- All risks list -->

Dashboard Cards/Charts:

<!-- Projects grouped by status (On Track, At Risk, Critical, Completed) -->

Missing check-ins

Health score distribution

Activity Timeline:

Recent activities feed (check-ins, feedback, risk updates)

Frontend Requirements

Forms with validation

Table/grid for projects and risks

Chart library (Recharts or Chart.js) for summaries

Filter/sort projects

Responsive layout

३. Employee Functionality

Employee Dashboard:

Assigned Projects list

Submit weekly check-ins:

Progress summary

Blockers

Confidence rating (1–5)

Completion percentage

Pending check-ins indicator

Open risks overview (their projects)

Frontend Requirements

Check-in form (POST to /api/checkins)

Dashboard cards (projects, pending check-ins, risks)

Confirmation/toast messages after submission

Responsive list/table view

৪. Client Functionality

Client Dashboard:

Assigned Projects list

Submit weekly feedback:

Satisfaction rating (1–5)

Communication rating (1–5)

Optional comment

Flag issue checkbox

View project health status

Activity Timeline (optional, recent updates for their projects)

Frontend Requirements

Feedback form (POST to /api/feedback)

Health status display (badge or colored card)

Responsive project list

Notifications for flagged issues

৫. Common Frontend Features

Protected routes (based on JWT & role)

API error handling

Loading and empty states

Responsive design (mobile/tablet/desktop)

Activity timeline component (for all dashboards)

Global context or store for user & token