# OpenFlow Atlas - Features

## Input Methods

OpenFlow Atlas now supports **two input methods** for process discovery:

### 1. Text Query (Default)
- Type natural language questions about business processes
- **400ms debounce** - automatic search after typing stops
- Manual search via Enter key or search button
- Clear button to reset query
- Examples:
  - "How is procurement over 10k EUR handled?"
  - "Employee onboarding process"
  - "Invoice approval workflow"

### 2. PDF Upload
- Upload process description documents (PDF format)
- Drag & drop or browse to select file
- System extracts text and finds matching processes
- Simulates document analysis workflow
- Max file size: 10MB

## User Flow

### Text Search Flow
1. Select "Text Query" mode (default)
2. Type your question
3. System automatically searches after 400ms
4. View matching processes (sorted by relevance)
5. Click a process to see details

### PDF Upload Flow
1. Toggle to "PDF Upload" mode
2. Drag & drop PDF or click "Browse Files"
3. System processes the document (~1.5s)
4. View matching processes based on document content
5. Click a process to see details

## Features

### Search & Discovery
- ✅ Debounced real-time search
- ✅ Smart relevance scoring
- ✅ Multi-field matching (name, description, category, department)
- ✅ Empty state when no query
- ✅ Results sorted by match percentage

### Document Processing
- ✅ PDF file upload with validation
- ✅ Drag & drop support
- ✅ File size display
- ✅ Remove uploaded file option
- ✅ Visual feedback during processing

### Process Details
- ✅ BPMN diagram placeholder
- ✅ Contact information
- ✅ Legal bases and references
- ✅ Required forms
- ✅ KPIs and metrics
- ✅ Evidence snippets with similarity scores

## Mock Data

The system includes **8 diverse business processes**:

1. **Procurement Process (>10k EUR)** - Standardized procurement workflow
2. **Employee Onboarding** - Comprehensive new hire workflow
3. **Invoice Approval** - Multi-level invoice processing
4. **Building Permit Application** - Urban planning workflow
5. **Intern Onboarding** - Streamlined temporary staff process
6. **Travel Request & Reimbursement** - Business travel workflow
7. **Document Archive Request** - Records management
8. **IT Equipment Procurement** - Specialized IT purchasing

## Technical Details

### Components
- `SearchBar.tsx` - Dual-mode input (text/file) with debouncing
- `FileUpload.tsx` - PDF upload with drag & drop
- `ProcessList.tsx` - Scrollable results list
- `ProcessDetailsPanel.tsx` - Detailed process view
- `App.tsx` - Main application logic

### Search Algorithm (Mock)
- Matches against: name, description, category, owner department
- Dynamic score boosting based on match location
- Sorts by relevance score (descending)
- Minimum relevance threshold for file uploads

### File Processing (Mock)
- Simulates 1.5s PDF text extraction
- Mock extracted text triggers search
- Lower base scores for document matches
- Filters results by minimum threshold (50%)

## Future Enhancements

- [ ] Real PDF text extraction (backend integration)
- [ ] Multiple file upload support
- [ ] OCR for scanned PDFs
- [ ] Document preview
- [ ] Save search history
- [ ] Export results
- [ ] Advanced filters (category, department, SLA)
- [ ] Interactive BPMN diagram rendering
