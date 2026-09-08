# 🏫 Sunrise International School (SIS) - Official Web Portal

> **"A School on Mountains"** — Providing holistic, value-based education affiliated with CBSE curriculum standards from Nursery to Grade X in Badlapur (West), Maharashtra. Managed by **Siddhi Education Trust** (Est. 2000).

---

## 🌟 Overview

The **Sunrise International School (SIS) Web Portal** is a modern, responsive, and feature-packed web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. It provides prospective parents, current students, and faculty with seamless access to school information, online admissions, enquiry workflows, campus galleries, and administrative tools.

---

## ✨ Key Features

### 🎓 Unified Online Admission & Process Portal
- **3-Step Enrolment Journey**: Step-by-step guidance covering Registration, Campus Verification, and Fee Payment / Seat Confirmation.
- **Grade-wise Eligibility Criteria**: Detailed minimum age requirements and cut-off dates from Nursery through Grade X.
- **Filterable Required Documents Checklist**: Tabbed checklist tailored for Pre-Primary/Grade I and Primary/Secondary (Std II–X).
- **Academic Terms & Guidelines**: Information on Term 1 (June–October) and Term 2 (November–March), along with transparent fee payment regulations.
- **Integrated Quick Enquiry Form**: Direct on-page submission for immediate admissions callback.

### 📝 Admission Enquiry Workflow
- Comprehensive multi-step enquiry form capturing student bio, academic history, interests/hobbies, and parent contact details.
- Integrated backend API (`/api/enquiry`) with automated confirmation logging.

### 💬 Admissions Desk Assistant & Live Support
- Interactive virtual admissions assistant guiding prospective parents through common questions.
- Integrated Tawk.to live support for real-time parent assistance.

### 🏛️ Informational & School Life Pages
- **About Us & Why Sunrise**: School vision, core values, faculty profiles, and world-class mountain-campus infrastructure.
- **Chairman's Desk**: Inspiring leadership message and educational philosophy.
- **Sunrise Anthem**: Dedicated audio-visual page celebrating the school song and spirit.
- **Campus Gallery**: Categorized high-resolution photo showcase of campus facilities, events, sports, and cultural festivals.
- **Interactive FAQ**: Expandable accordion answering common queries about academics, transport, uniform, and admissions.
- **Contact & Campus Visit**: Interactive Google Maps embed, helpline numbers, email contacts, and inquiry form (`/api/contact`).

### 🔐 Staff & Admin Desk
- Authenticated portal for school administrators to view enquiries and manage communications.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router with Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Live Chat**: Tawk.to integration

---

## 📂 Project Structure

```text
Sunrise-School-Clone/
├── src/
│   ├── app/
│   │   ├── about/              # About School & Management
│   │   ├── admin/              # Staff & Admin Portal
│   │   ├── admission-process/  # Admission Process Route (Alias to Unified Portal)
│   │   ├── api/
│   │   │   ├── contact/        # Contact Form API Endpoint
│   │   │   └── enquiry/        # Admission Enquiry API Endpoint
│   │   ├── chairman-message/   # Chairman's Desk Page
│   │   ├── contact/            # Campus Location & Contact Page
│   │   ├── enquiry-form/       # Detailed Multi-Step Admission Enquiry Form
│   │   ├── faq/                # Frequently Asked Questions Page
│   │   ├── gallery/            # Campus & Activities Photo Gallery
│   │   ├── online-admission/   # Merged Unified Online Admission & Process Page
│   │   ├── sunrise-anthem/     # School Anthem Audio & Lyrics Page
│   │   ├── why-sunrise/        # Why Choose Sunrise Features & Pillars
│   │   ├── globals.css         # Global Styles & Custom Utilities
│   │   ├── layout.tsx          # Root Layout
│   │   └── page.tsx            # Home Page (Hero, Highlights, Facilities, Testimonials)
│   ├── components/
│   │   ├── MainLayout.tsx      # Header Navigation, Mobile Drawer & Footer
│   │   ├── SupportChat.tsx     # Virtual Admissions Desk Assistant
│   │   └── TawkChat.tsx        # Tawk.to Live Chat Widget
├── public/                     # Static Assets & Images
├── next.config.ts              # Next.js Configuration
├── tailwind.config.ts          # Tailwind Theme & Color Tokens
├── tsconfig.json               # TypeScript Configuration
└── package.json                # Project Dependencies & Scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/WebMatrix-Technology/Sunrise-School-Clone.git
   cd Sunrise-School-Clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm run start
   ```

---

## 📞 School Contact & Location

- **Address**: Sunrise International School, Belavali, Badlapur (West), Dist. Thane - 421503, Maharashtra, India
- **Admissions Helpline**: +91 9324120900 / +91 9223388880
- **Email**: sunriseint.school@gmail.com
- **Website**: [sunriseinternationalschool.co.in](https://www.sunriseinternationalschool.co.in)

---

## 📄 License

This project is maintained for **Sunrise International School** / **Siddhi Education Trust**. All rights reserved.
