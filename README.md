# Terminal Portfolio

A unique, interactive terminal-based portfolio website built with Next.js and xterm.js. Experience my portfolio through a fully functional Linux-like terminal interface.

![Terminal Portfolio](https://img.shields.io/badge/Portfolio-Terminal--Based-00ff00?style=for-the-badge&logo=gnubash&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![xterm.js](https://img.shields.io/badge/xterm.js-6.0-green?style=for-the-badge)

## 🖥️ Live Demo

Visit: [ankan.in](https://ankan.in)

## ✨ Features

### Interactive Terminal Experience
- **Authentic Terminal Feel**: Full xterm.js integration with smooth scrolling, cursor blinking, and proper key handling
- **Tab Autocomplete**: Press `Tab` to autocomplete commands or see available options
- **Command History**: Use `↑` and `↓` arrow keys to navigate through command history
- **Keyboard Shortcuts**: `Ctrl+L` to clear screen, `Ctrl+C` to cancel

### Portfolio Commands
| Command | Description |
|---------|-------------|
| `about` | Display information about me |
| `skills` | List technical skills and expertise |
| `experience` | Show work experience |
| `projects` | Display portfolio projects |
| `education` | Show educational background |
| `achievements` | List achievements and badges |
| `contact` | Display contact information |
| `social` | Show social media links |
| `github` | Open GitHub profile |
| `linkedin` | Open LinkedIn profile |

### Linux-Like Commands
| Command | Description |
|---------|-------------|
| `ls` | List directory contents |
| `ll` / `ls -la` | Detailed file listing |
| `pwd` | Print working directory |
| `cd <dir>` | Change directory |
| `cat <file>` | Display file contents |
| `echo <text>` | Print text to terminal |
| `whoami` | Display current user |
| `hostname` | Show system hostname |
| `date` | Display current date/time |
| `uptime` | Show system uptime |
| `uname -a` | System information |
| `neofetch` | Display system info with ASCII art |
| `history` | Show command history |
| `top` / `htop` | Display running processes |
| `ps` | Process status |
| `df` | Disk space usage |
| `free` | Memory usage |
| `id` | User identity |
| `ping` | Network connectivity test |

### System Commands
| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `clear` | Clear terminal screen |
| `exit` | Exit terminal session |

### Easter Eggs 🥚
Try running: `sudo`, `rm -rf`, `vim`, `nano`, `curl`, and more!

## 🚀 Tech Stack

- **Framework**: [Next.js 15.3.4](https://nextjs.org/) with App Router
- **Terminal**: [xterm.js 6.0](https://xtermjs.org/) with FitAddon and WebLinksAddon
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **Deployment**: Cloudflare Workers via OpenNext
- **Analytics**: Vercel Analytics

## 📦 Project Structure

```
Portfolio/
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   └── Terminal/
│   │   │       └── TerminalPortfolio.tsx  # Main terminal component
│   │   ├── globals.css                     # Global styles
│   │   ├── layout.tsx                      # Root layout
│   │   ├── page.tsx                        # Home page
│   │   ├── not-found.tsx                   # 404 page
│   │   ├── robots.ts                       # SEO robots
│   │   └── sitemap.ts                      # SEO sitemap
│   ├── public/
│   │   ├── patterns/                       # Background patterns
│   │   └── social/                         # Social icons
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── wrangler.toml                       # Cloudflare config
├── config/
│   └── ankan.conf                          # Nginx configuration
├── LICENSE
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnkanSaha/Portfolio.git
   cd Portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Cloudflare Workers

```bash
# Login to Cloudflare
npm run login:cf

# Build for Cloudflare
npm run build:cf

# Deploy
npm run deploy:cf
```

### Vercel / Other Platforms

```bash
npm run build
npm run start
```

## 🎨 Customization

### Update Portfolio Data

Edit the `portfolioData` object in `frontend/app/components/Terminal/TerminalPortfolio.tsx`:

```typescript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... add your information
};
```

### Customize Terminal Theme

Modify the theme in the Terminal initialization:

```typescript
theme: {
  background: '#0a0e27',      // Terminal background
  foreground: '#e0e0e0',      // Text color
  cursor: '#00ff00',          // Cursor color
  // ... customize colors
}
```

### Add New Commands

Add new commands to the `commands` object:

```typescript
const commands = {
  mycommand: () => {
    writeLine('\r\n\x1b[1;36mMy custom output\x1b[0m');
  },
  // ... more commands
};
```

## 🎯 ANSI Color Codes Reference

| Code | Color |
|------|-------|
| `\x1b[1;31m` | Bold Red |
| `\x1b[1;32m` | Bold Green |
| `\x1b[1;33m` | Bold Yellow |
| `\x1b[1;34m` | Bold Blue |
| `\x1b[1;35m` | Bold Magenta |
| `\x1b[1;36m` | Bold Cyan |
| `\x1b[1;37m` | Bold White |
| `\x1b[90m` | Gray |
| `\x1b[0m` | Reset |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ankan Saha**
- Full Stack Developer at Hoichoi Technologies
- GitHub: [@AnkanSaha](https://github.com/AnkanSaha)
- LinkedIn: [theankansaha](https://linkedin.com/in/theankansaha)
- Email: ankansahaofficial@gmail.com

## 🙏 Acknowledgments

- [xterm.js](https://xtermjs.org/) - The terminal emulator that powers this project
- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [OpenNext](https://open-next.js.org/) - For Cloudflare Workers deployment

---

<p align="center">
  Made with 💚 and lots of ☕ by Ankan Saha
</p>
