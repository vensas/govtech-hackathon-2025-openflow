# OpenFlow Atlas - UX Flow Documentation

## Redesigned User Experience

The application now follows a clean, step-by-step user journey that guides users through the process discovery workflow.

---

## User Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     STEP 1: Mode Selection                   │
│                                                               │
│  "How would you like to find a process?"                     │
│                                                               │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │   Text Query     │         │   PDF Upload     │          │
│  │   [EditIcon]     │         │   [UploadIcon]   │          │
│  └──────────────────┘         └──────────────────┘          │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     STEP 2: Input                            │
│                                                               │
│  [← Back]  OpenFlow Atlas                                    │
│  ──────────────────────────────────────────────────────────  │
│                                                               │
│  If Text:                      If PDF:                       │
│  ┌─────────────────────────┐  ┌─────────────────────────┐   │
│  │ Search input field...   │  │  Drop PDF or browse     │   │
│  │ [Clear] [Search]        │  │  [Upload Area]          │   │
│  └─────────────────────────┘  └─────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼ (after input provided)
┌─────────────────────────────────────────────────────────────┐
│                  STEP 3: Results List                        │
│                                                               │
│  [← Back]  OpenFlow Atlas                                    │
│  ──────────────────────────────────────────────────────────  │
│                                                               │
│  [Search/Upload input shown]                                 │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Found X matching processes                              │ │
│  │                                                         │ │
│  │ ► Process 1 (95%)                                      │ │
│  │ ► Process 2 (89%)                                      │ │
│  │ ► Process 3 (87%)                                      │ │
│  │ ...                                                     │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          │
                          ▼ (click on process)
┌──────────────────────────────────────────────────────────────────┐
│              STEP 4: Results + Details                           │
│                                                                   │
│  [← Back]  OpenFlow Atlas                                        │
│  ────────────────────────────────────────────────────────────    │
│                                                                   │
│  [Search/Upload input shown]                                     │
│                                                                   │
│  ┌──────────────┐  ┌─────────────────────────────────────────┐  │
│  │ Process List │  │   Selected Process Details              │  │
│  │ (5 cols)     │  │   (7 cols - expanded)                   │  │
│  │              │  │                                           │  │
│  │ ► Process 1  │  │  [Process Name & Description]            │  │
│  │ ► Process 2  │  │  [BPMN Diagram]                          │  │
│  │   Process 3  │  │  [Contact Info]                          │  │
│  │   ...        │  │  [Legal Bases]                           │  │
│  │              │  │  [Forms]                                 │  │
│  │              │  │  [KPIs]                                  │  │
│  │              │  │  [Evidence Snippets]                     │  │
│  └──────────────┘  └─────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Breakdown

### **STEP 1: Mode Selection Screen**
**What users see:**
- Clean, centered layout with a question: "How would you like to find a process?"
- Two large, clickable cards:
  - **Text Query** (green icon) - For natural language questions
  - **PDF Upload** (blue icon) - For document-based search

**User actions:**
- Click one of the two cards to select input method
- No other UI elements are shown at this stage (clean, focused)

**Visual design:**
- Cards have hover effects (lift, border color change)
- Icon circles with background color
- Clear descriptions and examples

---

### **STEP 2: Input Screen**
**What users see:**
- App header with back button (← arrow) to return to mode selection
- Based on choice in Step 1:
  - **Text mode**: Search input field with placeholder and search icon
  - **PDF mode**: Upload area with drag & drop zone

**User actions:**
- **Text mode**: 
  - Type query
  - Auto-search triggers after 400ms
  - Can manually search with Enter or click search icon
  - Clear button appears when text is entered
- **PDF mode**:
  - Drag & drop PDF file
  - Or click "Browse Files" button
  - File name and size shown after upload
  - Remove button to clear selection

**Visual feedback:**
- Loading spinner during processing
- Input field shows autofocus
- Disabled states during loading

---

### **STEP 3: Results List (Full Width)**
**What users see:**
- Same header and input area as Step 2
- **Full-width** process list below input
- Card showing "Found X matching processes"
- Scrollable list of processes with:
  - Process name
  - Match percentage
  - Short description
  - Category and department chips

**User actions:**
- Scroll through results
- Click on any process to see details
- Modify search/upload new file (returns to empty results)
- Click back button to choose different input method

**Visual design:**
- Clean list with dividers
- Hover effects on process items
- No detail panel shown yet (focused on discovery)

---

### **STEP 4: Results + Details (Split View)**
**What users see:**
- Same header and input area
- **Split layout**:
  - **Left side (5 columns)**: Compressed process list
    - Selected process highlighted with colored border
    - Still scrollable
  - **Right side (7 columns)**: Full process details
    - BPMN diagram
    - Contact information
    - Legal bases
    - Required forms
    - KPIs with metrics
    - Evidence snippets

**User actions:**
- Click different processes to update detail view
- Scroll detail panel independently
- Return to full-width list by clicking back button
- Modify search to see new results

**Visual design:**
- Smooth fade transitions when showing/hiding panels
- Detail panel appears with animation
- Selected item clearly marked in list
- Responsive layout adjusts for different screen sizes

---

## Key UX Improvements

### ✅ **Progressive Disclosure**
- Show only what's needed at each step
- Reduces cognitive load
- Clear path forward

### ✅ **Focused Attention**
1. Choose method → 2. Provide input → 3. Review results → 4. Explore details

### ✅ **Easy Navigation**
- Back button always visible after mode selection
- Can restart process at any time
- Input area always accessible for refinement

### ✅ **Visual Hierarchy**
- Mode selection: Large, centered cards
- Input area: Prominent, top of page
- Results: List format for scanning
- Details: Comprehensive, right panel

### ✅ **Smooth Transitions**
- Fade animations between states
- Loading indicators
- Hover feedback

### ✅ **Responsive Layout**
- Full-width results when no selection
- Split view adapts: 5/7 columns → adjusts on smaller screens
- Mobile-friendly grid system

---

## User Journey Examples

### Example 1: Text Query
1. User lands → sees "How would you like to find a process?"
2. Clicks "Text Query" card
3. Input field appears with focus → types "procurement"
4. After 400ms, results appear below (full width)
5. Clicks "Procurement Process (>10k EUR)"
6. List compresses to left, details appear on right
7. Reviews BPMN, contact info, forms, etc.
8. Clicks another process → details update smoothly

### Example 2: PDF Upload
1. User lands → sees mode selection
2. Clicks "PDF Upload" card  
3. Upload area appears → drags PDF file
4. Processing spinner → results appear below (full width)
5. Sees matching processes sorted by relevance
6. Clicks top result → split view with details
7. Reviews full process information
8. Clicks back → returns to mode selection
9. Chooses "Text Query" for refined search

---

## Technical Implementation

### State Management
- `inputMode`: `null | 'text' | 'file'` - Controls which screen to show
- `searchResult`: Shows/hides results section
- `selectedProcess`: Triggers split view layout

### Conditional Rendering
```typescript
inputMode === null → Mode Selection Screen
inputMode !== null && !searchResult → Input Screen
inputMode !== null && searchResult → Results Screen
selectedProcess !== null → Split View (Results + Details)
```

### Responsive Grid
- No selection: `xs={12}` (full width)
- With selection: `xs={12} md={5}` (list) + `xs={12} md={7}` (details)

### Animations
- `Fade` component with timeout for smooth transitions
- Staggered animations: 500ms for major changes, 300ms for details

---

## Accessibility Features

- Keyboard navigation supported
- Clear focus states on interactive elements
- Back button for easy navigation
- Loading states clearly indicated
- Auto-focus on search input (text mode)
- Semantic HTML structure

---

This redesigned UX creates a natural, step-by-step workflow that guides users from choosing their input method to exploring detailed process information, all while maintaining clarity and focus at each stage.
