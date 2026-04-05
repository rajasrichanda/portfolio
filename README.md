# 🚀 Rajasri Chanda's Portfolio

A modern, responsive, and interactive personal portfolio website built with **React**, **Tailwind CSS**, **Framer Motion**, and **Vite**. Designed to showcase projects, skills, and experiences with smooth animations and a professional dark/light mode toggle.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient accents
- 🌙 **Dark/Light Mode** - Toggle between themes with persistent storage
- ✨ **Smooth Animations** - Framer Motion animations for seamless interactions
- 🎯 **Responsive Layout** - Mobile-first design that works on all devices
- 📱 **Interactive Components** - Smooth scrolling, hover effects, and transitions
- 🎬 **Particle Background** - Dynamic animated particles on hero section
- 📞 **Contact Form** - Built-in contact form with validation
- ⚡ **Fast Performance** - Optimized with Vite for instant loading

## 🌐 Live Demo

**[Visit Portfolio](https://rajasrichanda.github.io/portfolio)**

## 📸 Sections

- **Hero** - Eye-catching introduction with animated particles
- **About** - Brief bio, stats, and interests
- **Skills** - Technical skills with progress indicators
- **Projects** - Featured projects with live demos and GitHub links
- **Experience** - Education timeline and internship details
- **Contact** - Contact form and social links
- **Footer** - Quick navigation and copyright

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **react-icons** - Icon library
- **react-tsparticles** - Particle effects
- **react-helmet-async** - SEO management

### Build & Deploy
- **Vite** - Development server & production build
- **GitHub Pages** - Free hosting
- **ESLint** - Code quality

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/rajasrichanda/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🎯 Usage

### Development
```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Deployment
```bash
npm run deploy   # Deploy to GitHub Pages
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects showcase
│   ├── Experience.jsx  # Education & experience timeline
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer
│   └── ParticlesBackground.jsx  # Particle effects
├── data/
│   └── portfolioData.js # All resume data
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point

public/                 # Static assets
tailwind.config.js      # Tailwind configuration
vite.config.js         # Vite configuration
postcss.config.js      # PostCSS configuration
```

## ✏️ Customization

### Update Personal Info

Edit `src/data/portfolioData.js` to customize:
- Name, role, bio
- Contact information
- Social links
- Education details
- Experience/internships
- Skills and proficiency levels
- Projects with descriptions, links, and icons

### Change Colors

Modify `tailwind.config.js`:
```javascript
extend: {
  colors: {
    'accent-purple': '#8b5cf6',  // Primary accent
    'accent-teal': '#14b8a6',    // Secondary accent
    'dark-bg': '#0a0e27',        // Background dark
  },
}
```

### Add New Sections

1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add to the main layout

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Update portfolio"
git push
```

2. **Deploy**
```bash
npm run deploy
```

3. **Enable in GitHub Settings**
   - Go to Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Save

**Live URL**: `https://rajasrichanda.github.io/portfolio`

### Custom Domain (Optional)
1. Buy a domain (GoDaddy, Namecheap, etc.)
2. Update DNS records to point to GitHub Pages
3. Add custom domain in Settings → Pages

## 📖 How to Update Portfolio

### When you complete a new project:
1. Add project details to `portfolioData.js`
2. Commit and push: `git push`
3. Deploy: `npm run deploy`

### When you add new skills:
1. Update skills in `portfolioData.js`
2. Push and deploy

### Formula for updates:
```
Edit → Commit → Push → Deploy (2 minutes!)
```

## 🔗 Links

- **Portfolio**: https://rajasrichanda.github.io/portfolio
- **GitHub**: https://github.com/rajasrichanda
- **LinkedIn**: https://www.linkedin.com/in/rajasri-chanda-ba9a6924b/
- **Email**: rajasrichanda@gmail.com

## 💡 Tips

- Update portfolio regularly with new projects
- Keep GitHub repos updated with README files
- Test locally before deploying: `npm run dev`
- Use meaningful commit messages
- Share portfolio link with recruiters

## 📝 License

This project is open source and available under the MIT License. Feel free to use this template for your own portfolio!

## 🙏 Credits

Built with ❤️ using modern web technologies.

---

**Last Updated**: April 2026  
**Status**: Active & Maintained

