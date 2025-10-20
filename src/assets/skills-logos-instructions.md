# Skills Logos Instructions

To add actual logos to the skills section:

## Option 1: Replace Emojis with SVG Icons

Update the skills array in `src/routes/App.tsx`:

```tsx
{ 
  skill: 'User Research & Testing', 
  logo: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      {/* Your SVG content here */}
    </svg>
  ),
  description: 'User interviews, usability testing, surveys'
},
```

## Option 2: Use Image Files

1. **Add logo images** to `src/assets/logos/` folder
2. **Import the images** at the top of `App.tsx`:
   ```tsx
   import figmaLogo from '../assets/logos/figma.svg'
   import adobeLogo from '../assets/logos/adobe.svg'
   // etc.
   ```
3. **Replace the logo property**:
   ```tsx
   { 
     skill: 'Figma & Adobe', 
     logo: <img src={figmaLogo} alt="Figma" className="w-8 h-8" />,
     description: 'Design tools mastery'
   },
   ```

## Option 3: Use Icon Libraries

Install an icon library like `react-icons`:

```bash
npm install react-icons
```

Then use:
```tsx
import { FaFigma, FaAdobe, FaReact } from 'react-icons/fa'

{ 
  skill: 'Figma & Adobe', 
  logo: <FaFigma className="w-8 h-8 text-pink-500" />,
  description: 'Design tools mastery'
},
```

## Recommended Logo Sources:
- **Figma**: Official Figma brand assets
- **Adobe**: Adobe Creative Suite logos
- **React**: React logo from react.dev
- **Design Tools**: Official brand assets from each tool's website
- **Custom Icons**: Create simple SVG icons for generic skills

## Current Emoji Placeholders:
- 🔍 User Research & Testing
- 🎨 UI/UX Design  
- 🧩 Design Systems
- ⚡ Prototyping
- 🛠️ Figma & Adobe
- 💻 Frontend Dev
