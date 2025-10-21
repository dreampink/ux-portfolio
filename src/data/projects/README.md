# Project Content Structure

This directory contains individual project files that make it easy to add and manage case study content.

## How to Add a New Project

1. **Create a new project file** (e.g., `new-project.tsx`)
2. **Follow the existing structure** from the template below
3. **Export the project** in `index.tsx`

## Project File Structure

```tsx
import React from 'react';

export const newProject = {
  slug: 'project-slug',           // URL-friendly identifier
  title: 'Project Title',         // Display title
  client: 'Client Name',          // Client company
  date: '2024',                   // Project date
  role: 'Your Role',              // Your role in the project
  headerImage: '/src/assets/project-image.jpg', // Header image path
  description: 'Brief project description for the homepage.',
  
  // Process stages content
  stages: {
    tension: {
      title: 'The Tension',
      content: (
        <div className="space-y-6">
          {/* Your content here */}
        </div>
      )
    },
    approach: {
      title: 'The Approach', 
      content: (
        <div className="space-y-6">
          {/* Your content here */}
        </div>
      )
    },
    problem: {
      title: 'The Problem',
      content: (
        <div className="space-y-6">
          {/* Your content here */}
        </div>
      )
    },
    solution: {
      title: 'The Solution',
      content: (
        <div className="space-y-6">
          {/* Your content here */}
        </div>
      )
    },
    results: {
      title: 'The Results',
      content: (
        <div className="space-y-6">
          {/* Your content here */}
        </div>
      )
    }
  }
};
```

## Content Guidelines

### Stage Content Structure
Each stage should include:
- **Problem/Tension**: What was the challenge?
- **Approach**: How did you research and understand the problem?
- **Problem**: Deep dive into the specific issues
- **Solution**: What did you design and why?
- **Results**: Measurable outcomes and impact

### Visual Elements
Use these Tailwind classes for consistent styling:
- **Info boxes**: `bg-blue-50 border border-blue-200 rounded-2xl p-6`
- **Success boxes**: `bg-green-50 border border-green-200 rounded-2xl p-6`
- **Warning boxes**: `bg-yellow-50 border border-yellow-200 rounded-2xl p-6`
- **Error boxes**: `bg-red-50 border border-red-200 rounded-2xl p-6`

### Metrics Display
For results, use this grid structure:
```tsx
<div className="grid grid-cols-2 gap-4">
  <div className="text-center">
    <div className="text-3xl font-bold text-emerald-600">42%</div>
    <div className="text-sm text-emerald-700">Improvement metric</div>
  </div>
  {/* More metrics... */}
</div>
```

## Adding to Index

After creating your project file, add it to `index.tsx`:

```tsx
import { newProject } from './new-project';

export const projects = [
  paymentsProject,
  onboardingProject,
  insightsProject,
  mobileProject,
  newProject  // Add your new project here
];
```

## Benefits of This Structure

- ✅ **Easy to add new projects** - just create a new file
- ✅ **Consistent content structure** - all projects follow the same format
- ✅ **Modular content** - each project is self-contained
- ✅ **Easy to maintain** - update individual projects without affecting others
- ✅ **Type safety** - TypeScript ensures consistent structure
- ✅ **Reusable components** - content can be easily reused or modified
