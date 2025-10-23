# Case Study Structure Diagram

```
📁 src/data/projects/
├── polishpad.tsx          ← Edit Polish Pad case study here
├── cancer-research-uk.tsx ← Edit Cancer Research UK case study here
├── sport-direct.tsx       ← Edit Sports Direct case study here
├── tesco.tsx             ← Edit Tesco case study here
└── index.tsx             ← Exports all projects

📁 src/data/
└── caseStudies.tsx       ← Converts projects to case study format
```

## Each Case Study File Structure:

```
polishpad.tsx
├── Project Info
│   ├── slug: 'polishpad'
│   ├── title: 'Polish Pad'
│   ├── client: 'Polish Pad'
│   ├── date: '2025'
│   ├── role: 'Design Tech Lead'
│   └── description: '...'
│
└── stages: {
    ├── tension: {          ← PROBLEM section
    │   └── content: (JSX)
    ├── research: {         ← RESEARCH section
    │   └── content: (JSX)
    ├── approach: {         ← APPROACH section
    │   └── content: (JSX)
    ├── solution: {         ← DESIGN OUTPUT section
    │   └── content: (JSX)
    ├── results: {          ← OUTCOME section
    │   └── content: (JSX)
    └── learning: {         ← LEARNING section
        └── content: (JSX)
    }
}
```

## How to Edit:

1. **Open the project file** you want to edit
2. **Find the stage** you want to modify (e.g., `tension`, `research`, etc.)
3. **Edit the content** inside the JSX
4. **Save the file** - changes appear immediately

## Example Edit:

```typescript
// Before
tension: {
  content: (
    <div className="space-y-6">
      <p>Old problem description...</p>
    </div>
  )
}

// After
tension: {
  content: (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h4 className="font-semibold text-red-800 mb-3">The Problem</h4>
        <p className="text-red-700 leading-relaxed">
          New problem description here...
        </p>
      </div>
    </div>
  )
}
```
