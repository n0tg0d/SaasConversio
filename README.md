<div align="center">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Clerk-3A2BFF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/-Tailwind-00BCFF?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/-shadcn/ui-black?style=for-the-badge" alt="shadcn" />
    <img src="https://img.shields.io/badge/-Zod-blue?style=for-the-badge" alt="Zod" />
  </div>

  <h3 align="center">Conversio – Real-time AI Teaching Platform</h3>

  <div align="center">
    This project was built following the<b>JavaScript Mastery</b> course.
  </div>
</div>

---

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🖼️ [Screenshots](#screenshots)  
5. 🤸 [Quick Start](#quick-start)  
6. 🚀 [More](#more)  

---

## 🤖 Introduction

Conversio is an LMS SaaS app built with **Next.js 13 App Router**.  
It features **Clerk authentication**, **Supabase database**, **real-time AI tutors with Vapi**, and a modern UI with **Tailwind + shadcn/ui**.  

This project is a hands-on clone from the **JavaScript Mastery SaaS Course**, customized with additional features.

---

## ⚙️ Tech Stack

- **Next.js 13+ App Router** – React framework for full-stack apps  
- **Clerk** – Authentication and user management  
- **Supabase** – Database, APIs & storage  
- **Tailwind CSS** – Utility-first CSS framework  
- **shadcn/ui** – Accessible, pre-styled components  
- **Zod + React Hook Form** – Schema validation & form handling  
- **TypeScript** – Static typing for better DX  

---

## 🔋 Features

✅ AI Voice Tutors with Vapi  
✅ User Authentication (Google, Email, etc.) with Clerk  
✅ Create & Customize AI Companions (subject, topic, style, duration)  
✅ Session History & Bookmarks  
✅ Responsive & modern UI/UX with Tailwind + shadcn/ui  
✅ Supabase integration for data handling  
✅ Clean, reusable code architecture  

---

## 🖼️ Screenshots 
<h5 align="left">screenshots of the figma design</h5>

<p align="center">
  <img src="public/readme/Auth.png" alt="Auth" width="800"/>
</p>
<p align="center">
  <img src="public/readme/Home.png" alt="Home" width="800"/>
</p>
<p align="center">
  <img src="public/readme/New Companion Builder.png" alt="New Companion Builder" width="800"/>
</p>
<p align="center">
  <img src="public/readme/Discover.png" alt="Discover" width="800"/>
</p>
<p align="center">
  <img src="public/readme/Lesson.png" alt="Lesson" width="800"/>
</p>
<p align="center">
  <img src="public/readme/My Journey.png" alt="My Journey" width="800"/>
</p>

<p align="center">
  <img src="public/readme/New Companion Limit Reach.png" alt="New Companion Limit Reach" width="800"/>
</p>
<p align="center">
  <img src="public/readme/Subscription.png" alt="Subscription" width="800"/>
</p>

---

## 🤸 Quick Start

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/n0tg0d/SaasConversio.git
cd conversio
```

### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Setup Environment Variables

Create .env in the project root:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 4️⃣ Run Dev Server
```
npm run dev
```

Project runs on 👉 http://localhost:3000