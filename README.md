# Personal Navigation 🧭

A modern, beautiful personal navigation page built with React, TypeScript, and Tailwind CSS. Inspired by the design principles of tiger-blog, this project provides a sleek and organized way to access your favorite tools and resources.

## ✨ Features

- 🎨 **Modern Card-Based Design** - Clean, intuitive card layout for easy navigation
- 🌓 **Dark Mode Support** - Seamless light/dark theme switching with localStorage persistence
- ⚡ **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **TypeScript** - Type-safe code with full TypeScript support
- 🔧 **Easy Configuration** - Simple config files for customizing navigation links
- 🚀 **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Beautiful UI** - Gradient backgrounds, hover effects, and modern styling

## 🖼️ Screenshots

### Light Mode
![Light Mode](https://github.com/user-attachments/assets/a451eaf1-9a08-4cfb-81be-c69b18fad14a)

### Dark Mode
![Dark Mode](https://github.com/user-attachments/assets/6be47ac7-51aa-4869-a288-078e623f44a3)

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS v3** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/scfast003/Personal-Nav.git
cd Personal-Nav
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🔨 Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run serve
```

## 🎯 Project Structure

```
src/
├── components/          # React components
│   ├── cards/          # Card components
│   │   ├── NavCard.tsx              # Individual navigation card
│   │   └── CategorySection.tsx     # Category section wrapper
│   ├── ui/             # UI components
│   │   └── ThemeToggle.tsx         # Dark mode toggle button
│   └── layout/         # Layout components
│       ├── Header.tsx              # Page header
│       └── Footer.tsx              # Page footer
├── hooks/              # Custom React hooks
│   └── useTheme.ts                 # Theme management hook
├── config/             # Configuration files
│   ├── site.ts                     # Site metadata config
│   └── nav-data.ts                 # Navigation links data
├── types/              # TypeScript type definitions
│   └── index.ts                    # Shared types
├── styles/             # Additional styles (if needed)
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## ⚙️ Configuration

### Customize Site Information

Edit `src/config/site.ts`:

```typescript
export const siteConfig: SiteConfig = {
  title: 'Personal Navigation',
  description: 'Your personal navigation hub',
  author: 'Your Name',
  github: 'https://github.com/yourusername',
  email: 'your.email@example.com',
};
```

### Add/Edit Navigation Links

Edit `src/config/nav-data.ts`:

```typescript
export const navCategories: NavCategory[] = [
  {
    id: 'dev-tools',
    title: 'Development Tools',
    emoji: '🔧',
    description: 'Essential tools for developers',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com',
        description: 'Code hosting and collaboration',
        icon: Github,
      },
      // Add more links...
    ],
  },
  // Add more categories...
];
```

### Available Categories

The project comes pre-configured with these categories:

- 🔧 **Development Tools** - GitHub, VS Code, Stack Overflow, CodePen, Replit, Can I Use
- 🎨 **Design Resources** - Figma, Dribbble, Behance, Unsplash
- 📚 **Learning Resources** - MDN Web Docs, freeCodeCamp, 掘金, Dev.to
- 🌐 **Social Media** - Twitter, YouTube, Discord

## 🎨 Customizing Styles

### Tailwind Configuration

Customize colors, animations, and more in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
    animation: {
      // Your custom animations
    },
  },
}
```

### Global Styles

Modify global styles in `src/index.css`.

## 🌟 Key Components

### NavCard

Individual navigation link card with hover effects and animations.

```typescript
<NavCard link={linkData} index={0} />
```

### CategorySection

Groups related navigation links under a category.

```typescript
<CategorySection category={categoryData} index={0} />
```

### ThemeToggle

Button to toggle between light and dark modes.

```typescript
<ThemeToggle theme={theme} onToggle={toggleTheme} />
```

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your base path:
```typescript
export default defineConfig({
  base: '/Personal-Nav/',
  // ...
});
```

2. Build and deploy:
```bash
npm run build
# Deploy the `dist` folder to GitHub Pages
```

### Vercel/Netlify

Simply connect your repository and these platforms will auto-detect the Vite configuration.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [tiger-blog](https://github.com/scfast003/tiger-blog)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion)

## 📧 Contact

For questions or feedback, please reach out:

- GitHub: [@scfast003](https://github.com/scfast003)
- Project: [Personal-Nav](https://github.com/scfast003/Personal-Nav)

---

Made with ❤️ by Your Name