# Din Muhammad Jewel — Developer Portfolio

A personal portfolio website built with React 18 and Vite, showcasing my experience, skills, and projects as a Junior Software Engineer.

---

## 🔗 Live Demo

[https://din-muhammad.vercel.app](https://din-muhammad.vercel.app/)

---

## 🧑‍💻 About

I'm **Din Muhammad Jewel**, a Junior Software Engineer at **TechOptions Limited** with a B.Sc. in Computer Science and Engineering from **Khulna University**. My primary focus is frontend development using React and Next.js, with an active transition into backend engineering with Python, FastAPI, and PostgreSQL.

---

## ✨ Features

- Fully responsive layout across all screen sizes
- Mobile navigation with animated hamburger / close icon toggle
- Smooth scroll powered by Lenis
- Animated UI with Magic UI components (Aurora Text, Border Beam, Shine Border, Typing Animation, Sparkles Text, Flip Words)
- Syntax-highlighted developer profile card using Prism.js
- Sections: Hero, About, Skills, Experience, Projects, Education, Additional Experience, Contact
- Contact form with validation, loading state, and EmailJS integration
- SEO meta tags, Open Graph, and Twitter Card support
- 404 Not Found page
- Deployed on Vercel

---

## 🛠️ Tech Stack

| Category    | Technologies                                              |
| ----------- | --------------------------------------------------------- |
| Framework   | React 18, Vite 6                                          |
| Styling     | Tailwind CSS, shadcn/ui                                   |
| Animation   | Framer Motion, Motion, Magic UI                           |
| Icons       | Lucide React, React Icons                                 |
| Routing     | React Router DOM v7                                       |
| Scroll      | Lenis                                                     |
| Syntax Highlight | Prism.js                                             |
| Contact     | @emailjs/browser                                          |
| Deployment  | Vercel                                                    |

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets (project images)
├── src/
│   ├── assets/
│   │   ├── css/             # Global CSS, Header CSS, Prism theme
│   │   └── images/          # Favicon, profile image
│   ├── components/
│   │   ├── magicui/         # Aurora Text, Border Beam, Shine Border, etc.
│   │   └── ui/              # shadcn/ui components (Badge, Card, etc.)
│   ├── lib/                 # Utility functions (cn)
│   ├── pages/
│   │   ├── Header/          # Responsive navbar with mobile menu toggle
│   │   ├── Hero/            # Hero section with code window
│   │   ├── About/           # About / portfolio page
│   │   ├── Skills/          # Skills section
│   │   ├── Experience/      # Work experience
│   │   ├── Projects/        # Project cards with marquee
│   │   ├── Education/       # Education section
│   │   ├── EditionalExperience/ # Additional experience
│   │   └── Contact/         # Contact form with EmailJS
│   ├── App.jsx              # Root component with routing and 404 page
│   └── main.jsx             # Entry point
├── .env                     # Local environment variables (not committed)
├── .env.example             # Environment variable template
├── index.html               # HTML entry with SEO meta tags
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and pnpm

```bash
# Clone the repository
git clone https://github.com/Jewel-190237/portfolio
cd portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Fill in your EmailJS credentials in .env

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root based on `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from your [EmailJS dashboard](https://dashboard.emailjs.com).

For Vercel deployment, add the same variables under **Project Settings → Environment Variables**.

---

## 📬 Contact

- **Email:** jewel190237@gmail.com
- **LinkedIn:** [linkedin.com/in/jewel190237](https://www.linkedin.com/in/jewel190237)
- **GitHub:** [github.com/Jewel-190237](https://github.com/Jewel-190237)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
