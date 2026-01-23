# Plastics

A responsive portfolio web application showcasing vibe-coded, pair-coded, and manually-coded projects.

## Features

- **Clean Sidebar Navigation**: Browse through projects with metadata (creation date, coding type)
- **Mixed Content Display**: Live iframes for hosted projects, static embeds for archived work
- **Responsive Design**: Desktop sidebar with mobile overlay drawer
- **Configuration-Driven**: Easy to add new projects via `config/projects.ts`
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Precise design matching with custom theme

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
npm start
```

## Adding New Projects

Edit `config/projects.ts` to add new projects:

```typescript
{
  id: 'my-project',
  name: 'My Project',
  description: 'Project description',
  creationDate: '2025-01-23',
  codingType: 'vibe-coded', // or 'pair-coded' or 'manual'
  contentType: 'live', // or 'static'
  url: 'https://myproject.com', // for live projects
  path: '/projects/my-project', // for static projects
  isBookmarked: true,
}
```

## Deployment

Deployed on Vercel at [plastics.zalbright.com](https://plastics.zalbright.com)

### Deploy Your Own

1. Push to GitHub
2. Import project in Vercel
3. Configure custom domain
4. Deploy!

## Design

- **Logo Font**: La Belle Aurore (cursive)
- **Body Font**: Helvetica
- **Color Palette**: Clean grays with purple/blue coding type badges

## License

Personal portfolio project
