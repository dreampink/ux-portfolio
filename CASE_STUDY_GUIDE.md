# Case Study Structure Guide

## 📁 File Organization

### Main Files:
- **`src/data/projects/`** - Individual case study files (e.g., `polishpad.tsx`, `cancer-research-uk.tsx`)
- **`src/data/caseStudies.tsx`** - Converts projects to case study format
- **`src/data/projects/index.tsx`** - Exports all projects

## 📋 Project Metadata Fields

Each case study now includes **5 metadata fields**:

1. **Client** - Who the project was for
2. **Date** - When the project was completed
3. **Role** - Your role in the project
4. **Tools** - Technologies and tools used
5. **Impact** - Key results and metrics achieved

## 🏗️ Case Study Structure
Each case study has **7 main sections** that correspond to the design process:

### 1. **Problem** (Tension)
- **Purpose**: Understanding the core challenges
- **Content**: Problem statement, business impact, user pain points
- **File**: `src/data/projects/[project-name].tsx` → `stages.tension.content`

### 2. **Research** 
- **Purpose**: Gathering insights and data
- **Content**: Research methods, findings, user insights
- **File**: `src/data/projects/[project-name].tsx` → `stages.research.content`

### 3. **Tension** (Approach)
- **Purpose**: Identifying key conflicts
- **Content**: Design challenges, constraints, trade-offs
- **File**: `src/data/projects/[project-name].tsx` → `stages.tension.content`

### 4. **Approach** (Solution)
- **Purpose**: Developing solutions and strategies
- **Content**: Design decisions, methodology, solution approach
- **File**: `src/data/projects/[project-name].tsx` → `stages.approach.content`

### 5. **Design Output** (Solution)
- **Purpose**: Creating the experience
- **Content**: Final designs, prototypes, deliverables
- **File**: `src/data/projects/[project-name].tsx` → `stages.solution.content`

### 6. **Outcome** (Results)
- **Purpose**: Measuring success and results
- **Content**: Metrics, impact, learnings
- **File**: `src/data/projects/[project-name].tsx` → `stages.results.content`

### 7. **Learning** (Reflection)
- **Purpose**: Continuous improvement
- **Content**: Key takeaways, future improvements
- **File**: `src/data/projects/[project-name].tsx` → `stages.learning.content`

## ✏️ How to Edit Each Section

### Step 1: Open the Project File
```bash
src/data/projects/[project-name].tsx
```

### Step 2: Edit Project Metadata (Optional)
Update the project information at the top of the file:

```typescript
export const yourProject = {
  slug: 'your-project',
  title: 'Your Project',
  client: 'Client Name',
  date: '2024',
  role: 'Your Role',
  tools: 'Figma, React, TypeScript, etc.',
  impact: 'Key results and metrics',
  description: 'Project description...',
  // ... rest of the project
}
```

### Step 3: Find the Section You Want to Edit
Look for the `stages` object and find the specific stage:

```typescript
stages: {
  tension: {
    content: (
      <div className="space-y-6">
        // Your content here
      </div>
    )
  },
  approach: {
    content: (
      <div className="space-y-6">
        // Your content here
      </div>
    )
  },
  // ... other stages
}
```

### Step 3: Edit the Content
Replace the content inside the JSX with your new content. You can use:

#### **Text Content:**
```jsx
<p className="text-gray-700 leading-relaxed">
  Your text content here
</p>
```

#### **Lists:**
```jsx
<ul className="space-y-2">
  <li>• First item</li>
  <li>• Second item</li>
  <li>• Third item</li>
</ul>
```

#### **Images:**
```jsx
<img 
  src="/your-image.jpg" 
  alt="Description" 
  className="w-full h-auto rounded-xl shadow-lg"
/>
```

#### **Colored Boxes:**
```jsx
<div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
  <h4 className="font-semibold text-blue-800 mb-3">Title</h4>
  <p className="text-blue-700">Content</p>
</div>
```

## 🎨 Available Color Schemes

- **Red**: `bg-red-50 border-red-200 text-red-800 text-red-700`
- **Orange**: `bg-orange-50 border-orange-200 text-orange-800 text-orange-700`
- **Blue**: `bg-blue-50 border-blue-200 text-blue-800 text-blue-700`
- **Purple**: `bg-purple-50 border-purple-200 text-purple-800 text-purple-700`
- **Green**: `bg-green-50 border-green-200 text-green-800 text-green-700`
- **Yellow**: `bg-yellow-50 border-yellow-200 text-yellow-800 text-yellow-700`

## 📝 Quick Edit Examples

### Edit Problem Section:
```typescript
tension: {
  content: (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h4 className="font-semibold text-red-800 mb-3">The Problem</h4>
        <p className="text-red-700 leading-relaxed">
          Your new problem description here...
        </p>
      </div>
    </div>
  )
}
```

### Edit Research Section:
```typescript
research: {
  content: (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h4 className="font-semibold text-blue-800 mb-3">Research Methods</h4>
        <ul className="text-blue-700 space-y-2">
          <li>• Your research method 1</li>
          <li>• Your research method 2</li>
        </ul>
      </div>
    </div>
  )
}
```

## 🚀 Adding a New Case Study

1. **Create new file**: `src/data/projects/[new-project].tsx`
2. **Copy structure** from existing project file
3. **Update content** for each stage
4. **Add to index**: Update `src/data/projects/index.tsx`

## 📱 Media Content

To add images to any section, place them in the `public/` folder and reference them as:
```jsx
<img src="/your-image.jpg" alt="Description" className="w-full h-auto rounded-xl shadow-lg" />
```

## 🔧 Common Issues

- **Images not showing**: Make sure they're in the `public/` folder
- **Styling not working**: Check that you're using the correct Tailwind classes
- **Content not updating**: Make sure you're editing the right stage in the right file

---

**Need help?** Check the existing case studies for examples of how to structure your content!
