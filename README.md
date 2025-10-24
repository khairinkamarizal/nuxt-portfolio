# Portfolio Website

A modern, responsive portfolio website built with Nuxt 4, Tailwind CSS, and deployed on Vercel.

## Features

- 🎨 Modern, clean design inspired by vucko.co
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Built with Nuxt 4 and Vue 3
- 🎯 Optimized for performance
- 🚀 Deployed on Vercel

## Pages

- **Home**: Hero section with introduction and featured work preview
- **Work**: Portfolio showcase with project details and technologies
- **About**: Personal story, skills, experience, and interests
- **Contact**: Contact form and social links

## Tech Stack

- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS
- **UI Components**: Nuxt UI, Shadcn/UI
- **Icons**: Heroicons, Lucide Vue
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd nuxt-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically detect the Nuxt configuration and deploy

The `vercel.json` file is included for custom deployment settings if needed.

## Customization

### Updating Content

- **Homepage**: Edit `app/pages/index.vue`
- **Work Page**: Modify the `projects` array in `app/pages/work.vue`
- **About Page**: Update the `skills` and `experiences` arrays in `app/pages/about.vue`
- **Contact Page**: Change contact information in `app/pages/contact.vue`

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors in `app/assets/css/main.css`
- Components in the `app/components/` directory
- Layout in `app/layouts/default.vue`

### Theme

The site supports both light and dark modes. The theme toggle is located in the header.

## Project Structure

```
app/
├── components/          # Reusable Vue components
├── layouts/            # Layout components
├── pages/              # Route pages
├── assets/             # Static assets and CSS
├── composables/        # Vue composables
└── lib/                # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
