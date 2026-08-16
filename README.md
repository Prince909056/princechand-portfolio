# Prince Chand | .NET & AI Integration Engineer Portfolio

<p align="center">
  <img src="src/assets/profile.jpg" alt="Prince Chand" width="140" style="border-radius: 50%; border: 3px solid #6366f1;">
</p>

<p align="center">
  <strong>Results-driven Software Engineer with 3.8 years of experience in ASP.NET Core, C#, Web API, Entity Framework Core, Angular, NestJS, and Cutting-Edge AI Integrations.</strong>
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-engineering-problems-solved">Problems Solved</a> •
  <a href="#-environment-configuration">Environment Config</a> •
  <a href="#-angular-architecture">Angular Architecture</a> •
  <a href="#-getting-started">Getting Started</a>
</p>

---

## 🚀 Overview

This repository contains the official, high-performance **Angular Portfolio Application** for **Prince Chand**. Built with modern **Angular 20 Standalone Components**, **Angular Signals**, and **Control Flow Syntax (`@for`, `@if`)**, the application showcases real-world engineering impact, complex problem-solving outcomes, and system architecture metrics.

### Highlights:
- 💡 **Outcome-Driven Portfolio**: Focuses on real-world engineering problems solved and quantitative technical impact rather than basic project listing.
- 🌙 **Day/Night Theme Switcher**: Defaults to **Dark Mode** (`#090d16`) with seamless reactive toggling to Light Mode and persistent state.
- ⚙️ **Configurable Environments**: All social profile URLs, total experience metrics, and award verification links are dynamically bound via `.env` / `environment.ts` configuration.
- ⚡ **Modern Angular 20**: Utilizes Standalone Component architecture and Signal-based state management (`ThemeService`, `ToastService`).
- 🎨 **Visual Aesthetics**: Designed with glassmorphic cards, custom gradient glows, animated metric counters, responsive tab filtering, and custom typography (`Outfit` & `Inter`).

---

## ✨ Key Features

- **Active Section Highlighting**: Signal-driven active navigation tracking in `NavbarComponent` that highlights menu headings dynamically on click and scroll position.
- **Interactive Category Filtering**: Filter technical solutions seamlessly between `All`, `AI & Voice Systems`, `Performance & DB`, `Biotech & Hardware`, and `Enterprise Payroll`.
- **Reactive Theme System**: Signal-driven Day & Night theme switch that updates DOM attributes (`data-theme`) instantly while preserving preferences in `localStorage`.
- **Animated Metrics Strip**: Dynamic counter animations showcasing quantitative results (e.g. *90% Manual Effort Cut*, *80% Faster AI Verification*, *700+ Employee Scale*).
- **Clipboard & Toast Feedback**: Integrated `ToastService` triggering smooth toast notifications when copying email or contact details.
- **Direct Award & Profile Verification**: Clickable verification badges linking to verified LinkedIn activities and Udemy certificate credentials.

---

## 🛠️ Engineering Problems Solved

| Problem & Domain | Engineered Solution | Quantitative Impact | Key Technologies |
| :--- | :--- | :--- | :--- |
| **Provider-Patient Communication Overhead** *(AI & Voice)* | Integrated ElevenLabs AI voice-to-voice communication APIs with full-stack ASP.NET Core Web API & Angular. | **70–80% Less Scheduling Overhead** | `ASP.NET Core`, `ElevenLabs AI`, `Angular 19`, `Stripe` |
| **Real Estate Verification & Search** *(AI & Voice)* | Built an OpenAI GPT-4o + RAG powered query engine (~90% accuracy) and automated AI image/video inspection. | **80% Faster Verification Speed** | `OpenAI GPT-4o`, `RAG`, `NestJS`, `FastAPI`, `AWS` |
| **POS Menu Sync & Rendering** *(Performance & DB)* | Integrated Toast POS API for automated real-time menu sync and optimized SQL stored procedures/Dapper queries. | **90% Menu Effort Cut / 10-12% Faster Rendering** | `ASP.NET Core API`, `Toast POS`, `Dapper`, `SQL Server` |
| **Hardware Interfacing & Biotech Diagnostics** *(Biotech & Hardware)* | Developed Web API interfacing with Laser and DAQ-205 lab hardware devices executing protein sequence algorithms. | **Streamlined Lab Hardware-Cloud Pipeline** | `ASP.NET Core API`, `Hardware DAQ-205`, `Angular 17`, `Azure` |
| **Multi-User Payroll & Accounting** *(Enterprise Payroll)* | Architected a 1-click salary engine supporting single & double-entry accounting with automated balance sheets. | **60% Manual Payroll Effort Reduction** | `ASP.NET Core MVC`, `EF Core`, `LINQ`, `MySQL` |
| **APNs Push Certificate Inspection** *(Security & Utility)* | Built a C# utility to parse, validate expiration, and extract metadata from Apple Push (.p8, .p12, .pem) certificates. | **Zero Configuration Downtime** | `C#`, `ASP.NET Core API`, `APNs Certificates` |

---

## ⚙️ Environment Configuration

The application supports configurable environment properties via `.env` / `.env.example` and Angular environment files ([`src/environments/environment.ts`](file:///c:/prince_chand/portfolio-01/src/environments/environment.ts) and [`src/environments/environment.prod.ts`](file:///c:/prince_chand/portfolio-01/src/environments/environment.prod.ts)):

```env
# Total Years of Professional Experience
YEARS_OF_EXPERIENCE=3.8

# Achievements & Awards Verification Links
STAR_OF_MONTH_LINK=https://www.linkedin.com/posts/anviamsolutions_anviamrockstars-aboveandbeyond-teamanviam-activity-7345398424978001921-TGYZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI--QUBFqx3OIYgf8sBrrYLaIE75o5D_ik
RISING_STAR_LINK=https://www.linkedin.com/feed/update/urn:li:activity:7154809121123274752/
CLEAN_CODE_CERT_LINK=https://www.udemy.com/certificate/UC-b4255959-f5c5-4308-9a21-88a8ff4ac0f4/

# Social & Contact Links
LINKEDIN_PROFILE_URL=https://www.linkedin.com/in/prince-chand-1993941b6/
EMAIL_ADDRESS=prince.chand.dev@gmail.com
PHONE_NUMBER=(+91) 9888725336
```

---

## 🏛️ Angular Architecture

The application is structured into modular Standalone Components and reactive Services:

```text
src/
├── app/
│   ├── app.component.ts             # Root shell component & toast container
│   ├── app.config.ts                # Angular application configuration
│   ├── components/
│   │   ├── navbar/                  # Sticky blur navigation, logo & theme toggle
│   │   ├── hero/                    # Hero banner, headshot card & animated counters
│   │   ├── problems-solved/         # Problem cards showcase & signal tab filters
│   │   ├── skills/                  # Core skills & architecture patterns grid
│   │   ├── achievements/            # Award cards with direct verification links
│   │   ├── experience/              # Professional experience (3.8 Years) & degree timeline
│   │   ├── contact/                 # Email copy pill, phone call & LinkedIn links
│   │   └── footer/                  # Clean footer information
│   └── services/
│       ├── theme.service.ts         # Signal-based Day/Night theme switcher & storage
│       └── toast.service.ts         # Signal-based toast notification service
└── environments/
    ├── environment.ts               # Development environment configuration
    └── environment.prod.ts          # Production environment configuration (fileReplacements mapping)
```

---

## 💻 Tech Stack

### Frontend & Architecture
- **Framework**: Angular 20 (Standalone Components, Signals, Control Flow Syntax)
- **Styling**: Vanilla CSS3 (Custom Design System, CSS Variables, Glassmorphic Cards)
- **Icons & Fonts**: FontAwesome 6, Google Fonts (`Outfit` & `Inter`)

### Backend & Cloud Expertise
- **Languages & Frameworks**: C#, ASP.NET Core, Web API, ASP.NET Core MVC, EF Core, Dapper, NestJS, Next.js, Python (FastAPI)
- **Architectural Patterns**: Clean Architecture, N-Layer, SOLID Principles, CQRS, Repository Pattern
- **Cloud & Databases**: Azure (App Service, SQL DB, Blob Storage), AWS (EC2, S3, SES), SQL Server, PostgreSQL, MySQL

---

## 📦 Getting Started

### Prerequisites
- Node.js (v20.0.0 or higher)
- npm (v10.0.0 or higher)

### Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Prince909056/princechand-portfolio.git
   cd portfolio-01
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm start
   # or
   npx ng serve --port 4200
   ```
   Navigate to `http://localhost:4200/` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   # or
   npx ng build
   ```
   Build artifacts will be generated in the `dist/portfolio-ng/browser` directory.

---

## 🤖 GitHub Actions CI/CD Pipeline

The project includes an automated **GitHub Actions Workflow** file at [`.github/workflows/deploy.yml`](file:///c:/prince_chand/portfolio-01/.github/workflows/deploy.yml).

Whenever changes are pushed to the `main` branch, GitHub Actions automatically:
1. Checks out the code.
2. Sets up Node.js v20.
3. Installs dependencies (`npm ci`).
4. Compiles the Angular production build (`npm run build -- --base-href /princechand-portfolio/`).
5. Deploys the built application automatically to **GitHub Pages**.

---

## 🏆 Honors & Recognition

- 🌟 [**Star of the Month** (June 2025)](https://www.linkedin.com/posts/anviamsolutions_anviamrockstars-aboveandbeyond-teamanviam-activity-7345398424978001921-TGYZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADI--QUBFqx3OIYgf8sBrrYLaIE75o5D_ik) – Anviam Solution Pvt Ltd
- ⭐ [**Rising Star Award** (August 2023 & January 2024)](https://www.linkedin.com/feed/update/urn:li:activity:7154809121123274752/) – Anviam Solution Pvt Ltd
- 📜 [**"Clean Code" Certification** (May 2025)](https://www.udemy.com/certificate/UC-b4255959-f5c5-4308-9a21-88a8ff4ac0f4/) – Udemy

---

## 📬 Contact & Connect

- **LinkedIn**: [Prince Chand LinkedIn Profile](https://www.linkedin.com/in/prince-chand-1993941b6/)
- **Email**: [prince.chand.dev@gmail.com](mailto:prince.chand.dev@gmail.com)
- **Phone**: (+91) 9888725336
- **Location**: Punjab, India

---

<p align="center">
  Crafted with clean Angular code & modern aesthetics © 2026 Prince Chand
</p>
