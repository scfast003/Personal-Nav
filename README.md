# Personal Navigation 🧭

[English](#english) | [中文](#中文)

---

<a name="中文"></a>
## 中文

一个现代化、精美的个人导航页面，使用 React、TypeScript 和 Tailwind CSS 构建。设计灵感来自 tiger-blog，提供简洁有序的方式来管理您的常用链接。

### ✨ 功能特性

- 🎨 **现代卡片设计** - 简洁直观的卡片布局，轻松导航
- 🌓 **暗色模式支持** - 无缝切换亮色/暗色主题，支持 localStorage 持久化
- ⚡ **流畅动画** - 基于 Framer Motion 的精美过渡效果
- 📱 **完全响应式** - 适配桌面、平板和移动设备
- 🎯 **TypeScript** - 类型安全的代码，完整的 TypeScript 支持
- 🔧 **简易配置** - 通过简单的配置文件自定义导航链接
- 🚀 **极速加载** - 使用 Vite 构建，性能卓越
- 🎭 **精美 UI** - 渐变背景、悬浮效果和现代化样式

### 🖼️ 截图预览

#### 亮色模式
![亮色模式](https://github.com/user-attachments/assets/a451eaf1-9a08-4cfb-81be-c69b18fad14a)

#### 暗色模式
![暗色模式](https://github.com/user-attachments/assets/6be47ac7-51aa-4869-a288-078e623f44a3)

### 🛠️ 技术栈

- **React 18** - 现代 React Hooks
- **TypeScript** - 类型安全开发
- **Vite** - 下一代前端构建工具
- **Tailwind CSS v3** - 原子化 CSS 框架
- **Framer Motion** - 生产级动画库
- **Lucide React** - 精美图标库

### 📦 安装步骤

1. 克隆仓库：
```bash
git clone https://github.com/scfast003/Personal-Nav.git
cd Personal-Nav
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 打开浏览器访问 `http://localhost:5173`

### 🔨 构建

构建生产版本：

```bash
npm run build
```

预览生产构建：

```bash
npm run serve
```

### 🎯 项目结构

```
src/
├── components/          # React 组件
│   ├── cards/          # 卡片组件
│   │   ├── NavCard.tsx              # 单个导航卡片
│   │   └── CategorySection.tsx     # 分类区域容器
│   ├── ui/             # UI 组件
│   │   └── ThemeToggle.tsx         # 暗色模式切换按钮
│   └── layout/         # 布局组件
│       ├── Header.tsx              # 页面头部
│       └── Footer.tsx              # 页面底部
├── hooks/              # 自定义 React Hooks
│   └── useTheme.ts                 # 主题管理 Hook
├── config/             # 配置文件
│   ├── site.ts                     # 网站元数据配置
│   └── nav-data.ts                 # 导航链接数据
├── types/              # TypeScript 类型定义
│   └── index.ts                    # 共享类型
├── styles/             # 额外样式（如需要）
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式和 Tailwind 导入
```

### ⚙️ 配置说明

#### 自定义网站信息

编辑 `src/config/site.ts`：

```typescript
export const siteConfig: SiteConfig = {
  title: '个人导航',
  description: '您的个人导航中心',
  author: '您的名字',
  github: 'https://github.com/yourusername',
  email: 'your.email@example.com',
};
```

#### 添加/编辑导航链接

编辑 `src/config/nav-data.ts`：

```typescript
export const navCategories: NavCategory[] = [
  {
    id: 'dev-tools',
    title: '开发工具',
    emoji: '🔧',
    description: '开发者必备工具',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com',
        description: '代码托管和协作平台',
        icon: Github,
      },
      // 添加更多链接...
    ],
  },
  // 添加更多分类...
];
```

#### 预置分类

项目预配置了以下分类：

- 🔧 **开发工具** - GitHub, VS Code, Stack Overflow, CodePen, Replit, Can I Use
- 🎨 **设计资源** - Figma, Dribbble, Behance, Unsplash
- 📚 **学习资源** - MDN Web Docs, freeCodeCamp, 掘金, Dev.to
- 🌐 **社交媒体** - Twitter, YouTube, Discord

### 🚀 部署

#### GitHub Pages

1. 更新 `vite.config.ts` 中的 base 路径：
```typescript
export default defineConfig({
  base: '/Personal-Nav/',
  // ...
});
```

2. 构建并部署：
```bash
npm run build
# 将 `dist` 文件夹部署到 GitHub Pages
```

#### Vercel/Netlify

只需连接您的仓库，这些平台会自动检测 Vite 配置。

### 📝 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

---

<a name="english"></a>
## English

A modern, beautiful personal navigation page built with React, TypeScript, and Tailwind CSS. Inspired by the design principles of tiger-blog, this project provides a sleek and organized way to access your favorite links.

### ✨ Features

- 🎨 **Modern Card-Based Design** - Clean, intuitive card layout for easy navigation
- 🌓 **Dark Mode Support** - Seamless light/dark theme switching with localStorage persistence
- ⚡ **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **TypeScript** - Type-safe code with full TypeScript support
- 🔧 **Easy Configuration** - Simple config files for customizing navigation links
- 🚀 **Lightning Fast** - Built with Vite for optimal performance
- 🎭 **Beautiful UI** - Gradient backgrounds, hover effects, and modern styling

### 🖼️ Screenshots

#### Light Mode
![Light Mode](https://github.com/user-attachments/assets/a451eaf1-9a08-4cfb-81be-c69b18fad14a)

#### Dark Mode
![Dark Mode](https://github.com/user-attachments/assets/6be47ac7-51aa-4869-a288-078e623f44a3)

### 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS v3** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful icon library

### 📦 Installation

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

### 🔨 Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run serve
```

### 🎯 Project Structure

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

### ⚙️ Configuration

#### Customize Site Information

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

#### Add/Edit Navigation Links

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

#### Available Categories

The project comes pre-configured with these categories:

- 🔧 **Development Tools** - GitHub, VS Code, Stack Overflow, CodePen, Replit, Can I Use
- 🎨 **Design Resources** - Figma, Dribbble, Behance, Unsplash
- 📚 **Learning Resources** - MDN Web Docs, freeCodeCamp, 掘金, Dev.to
- 🌐 **Social Media** - Twitter, YouTube, Discord

### 🚀 Deployment

#### GitHub Pages

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

#### Vercel/Netlify

Simply connect your repository and these platforms will auto-detect the Vite configuration.

### 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📝 License

This project is open source and available under the [MIT License](LICENSE).

### 🙏 Acknowledgments

- Design inspiration from [tiger-blog](https://github.com/scfast003/tiger-blog)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion)

---

Made with ❤️