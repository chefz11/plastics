# Claude Development Guide

This file contains instructions for Claude (or any AI assistant) on how to work with this portfolio project.

## Project Overview

This is a Next.js portfolio site called "Plastics" that showcases various projects. Projects can be displayed in different ways:
- **Live projects**: Embedded via iframe from a live domain
- **Static projects**: Hardcoded content loaded from local files
- **Coming soon**: Placeholder for future projects

## Project Structure

```
/config/projects.ts          # Project configuration and data
/types/project.ts            # TypeScript type definitions
/components/MainContent/     # Display components
  - ProjectDisplay.tsx       # Main project display router
  - IframeViewer.tsx        # For live projects
  - StaticViewer.tsx        # For static/hardcoded projects
```

## How to Add a New Project

### 1. Live Domain Project

To add a project that loads from a live URL:

1. Open `/config/projects.ts`
2. Add a new project object to the `projects` array:

```typescript
{
  id: 'unique-project-id',           // kebab-case unique identifier
  name: 'Project Name',               // Display name
  description: 'Brief description',   // Short description
  creationDate: '2025-01-23',        // ISO format: YYYY-MM-DD
  codingType: 'vibe-coded',          // 'vibe-coded' | 'pair-coded' | 'manual'
  contentType: 'live',               // Use 'live' for iframe embedding
  url: 'https://example.com',        // The live URL to embed
  isBookmarked: true,                // Show in bookmarks section
}
```

**Example:**
```typescript
{
  id: 'roast-mutton',
  name: 'Roast Mutton',
  description: 'Lord of the Rings reading tracker',
  creationDate: '2025-01-15',
  codingType: 'vibe-coded',
  contentType: 'live',
  url: 'https://roastmutton.xyz',
  isBookmarked: true,
}
```

### 2. Hardcoded/Static Project

To add a project with static, locally-hosted content:

1. Create your static content file (e.g., in `/public/projects/`)
2. Open `/config/projects.ts`
3. Add a new project object with `contentType: 'static'`:

```typescript
{
  id: 'unique-project-id',
  name: 'Project Name',
  description: 'Brief description',
  creationDate: '2025-01-23',
  codingType: 'manual',
  contentType: 'static',               // Use 'static' for local content
  path: '/projects/my-project.html',   // Path to static file in /public/
  isBookmarked: true,
}
```

**Note:** The `path` should point to a file in the `/public/` directory. The path is relative to the public folder (e.g., `/projects/file.html` maps to `/public/projects/file.html`).

### 3. Coming Soon Project

To add a placeholder for a future project:

```typescript
{
  id: 'future-project',
  name: 'Future Project',
  description: 'Description of upcoming project',
  creationDate: '2025-01-23',
  codingType: 'vibe-coded',
  contentType: 'coming-soon',  // No url or path needed
  isBookmarked: true,
}
```

## Field Explanations

### Required Fields
- **id**: Unique identifier (kebab-case, used in URLs)
- **name**: Display name of the project
- **description**: Brief description shown in the sidebar
- **creationDate**: Project creation date in ISO format (YYYY-MM-DD)
- **codingType**: How the project was built
  - `'vibe-coded'`: Built with AI assistance (Claude/Cursor/etc.)
  - `'pair-coded'`: Built collaboratively with AI
  - `'manual'`: Traditional hand-coded
- **contentType**: How the project is displayed
  - `'live'`: Embedded from live URL via iframe
  - `'static'`: Local static content
  - `'coming-soon'`: Placeholder (no content yet)
- **isBookmarked**: Whether to show in bookmarks section (boolean)

### Optional Fields
- **url**: Required if `contentType: 'live'` - The live URL to embed
- **path**: Required if `contentType: 'static'` - Path to static file in `/public/`
- **thumbnail**: Optional thumbnail image path

## Content Type Behavior

The `ProjectDisplay` component (config/projects.ts:12) routes to different viewers based on `contentType`:

1. **`contentType: 'live'`** → Uses `IframeViewer` to embed the URL
2. **`contentType: 'static'`** → Uses `StaticViewer` to load local content from `path`
3. **`contentType: 'coming-soon'`** → Shows "Coming Soon" placeholder

## Helper Functions

The config file exports helper functions:

```typescript
getProjectById(id: string)        // Find project by ID
getBookmarkedProjects()           // Get all bookmarked projects
```

## Development Tips

1. **Testing new projects**: After adding a project, test by navigating to `?project=your-project-id` in the browser
2. **Iframe considerations**: Some sites prevent iframe embedding (X-Frame-Options). Test your live URLs.
3. **Static content**: Place static files in `/public/` directory for proper Next.js serving
4. **Order matters**: Projects appear in the sidebar in the order they're defined in the array

## Common Tasks

### Reorder Projects
Simply reorder the objects in the `projects` array in `/config/projects.ts`

### Remove a Project
Delete the project object from the `projects` array

### Update Project Details
Modify the fields in the project object in `/config/projects.ts`

### Change Default Project
The app doesn't set a default - users must select a project. To change this, modify the `selectedProjectId` initialization in `app/page.tsx`
