# Portfolio

A modern, interactive software developer portfolio built with **React**, **Vite**, and **Tailwind CSS**.  
Showcases projects from your GitHub profile with live data, beautiful layouts, and smooth animations.

---

## ✨ Features

- **Live GitHub integration:** Fetches your latest repositories and pinned projects (`@kishore8787`)
- **Responsive design:** Looks great on desktop and mobile
- **Animated project cards:** Smooth reveal & hover effects, `framer-motion` and `lucide-react` icons
- **Tech stack tags, stars, forks:** See languages, topics, and project stats at a glance
- **Tailwind CSS styling:** Easily customizable styles
- **ESLint + Prettier setup:** Consistent, error-free development
- **Built with Vite:** Fast dev server and build

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/kishore8787/portfolio.git
cd portfolio
npm install
```

#### Create a `.env` (optional for private/pinned repos):

```env
VITE_GITHUB_USERNAME=kishore8787
VITE_GITHUB_TOKEN=your_github_token_if_needed
```

Update `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Start the development server:

```bash
npm run dev
```

---

## 🧑‍💻 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- GitHub REST & GraphQL API
- ESLint / Prettier

---

## 📦 Scripts

| Script            | Description              |
|-------------------|--------------------------|
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run lint`    | Run ESLint checks        |
| `npm run preview` | Preview production build |

---

## 🖼️ Demo

You can see a live demo at https://kishore87-portfolio.netlify.app/

---

## 🤝 Contributing

- Fork the repository
- Create a new branch (`git checkout -b feature`)
- Commit your changes
- Open a pull request

Issues and feedback are welcomed!

---

## 📑 License

This project is licensed under the MIT License.

---

## 🙌 Credits

Made with ❤️ by [Kishore8787](https://github.com/kishore8787).  
Built using the official Vite + React + Tailwind template and enhanced for a modern portfolio experience.
