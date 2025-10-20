# Profile Image Instructions



1. **Add your image** to the `src/assets/` folder (e.g., `profile.jpg` or `profile.png`)

2. **Update the import** in `src/routes/App.tsx`:
   ```tsx
   import profileImage from '../assets/profile.jpg'
   ```

3. **Replace the placeholder** in the profile image container:
   ```tsx

   <img 
     src={profileImage} 
     alt="Ebe Etiobhio - UX/UI Designer"
     className="w-full h-full object-cover"
   />
   ```

## Recommended Image Specifications:
- **Size**: 400x400px or larger (square aspect ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution for crisp display
- **Style**: Professional headshot with good lighting
- **Background**: Clean, neutral background works best

