import React, { useState, useCallback } from "react";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  IconButton,
  Fade,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { SearchBar } from "./components/SearchBar";
import { ProcessList } from "./components/ProcessList";
import { ProcessDetailsPanel } from "./components/ProcessDetailsPanel";
import { InputModeSelector } from "./components/InputModeSelector";
import { FileUpload } from "./components/FileUpload";
import { theme } from "./theme";
import { BusinessProcess, SearchResult } from "./types";
import { AccountTree } from "@mui/icons-material";
import { mockProcesses } from "./data/mockProcesses";

type InputMode = 'text' | 'file' | null;

const App: React.FC = () => {
  const [inputMode, setInputMode] = useState<InputMode>(null);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [selectedProcess, setSelectedProcess] =
    useState<BusinessProcess | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    // If query is empty, clear results
    if (!query || query.trim() === '') {
      setSearchResult(null);
      setSelectedProcess(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setSelectedProcess(null);

    // Simulate API call with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Mock search logic - filter processes based on query
    const lowerQuery = query.toLowerCase();
    const filteredProcesses = mockProcesses
      .map(process => {
        // Calculate a mock relevance score
        let score = process.score;
        
        if (process.name.toLowerCase().includes(lowerQuery)) {
          score = Math.min(score + 0.15, 0.99);
        }
        if (process.description.toLowerCase().includes(lowerQuery)) {
          score = Math.min(score + 0.08, 0.99);
        }
        if (process.category.toLowerCase().includes(lowerQuery)) {
          score = Math.min(score + 0.05, 0.99);
        }
        
        return { ...process, score };
      })
      .filter(process => {
        // Filter by relevance
        const matchesName = process.name.toLowerCase().includes(lowerQuery);
        const matchesDescription = process.description.toLowerCase().includes(lowerQuery);
        const matchesCategory = process.category.toLowerCase().includes(lowerQuery);
        const matchesOwner = process.owner.department.toLowerCase().includes(lowerQuery);
        
        return matchesName || matchesDescription || matchesCategory || matchesOwner;
      })
      .sort((a, b) => b.score - a.score); // Sort by score descending

    setSearchResult({
      query: { text: query, timestamp: new Date() },
      processes: filteredProcesses,
      totalFound: filteredProcesses.length,
      searchTime: 0.65 + Math.random() * 0.4, // Random time between 0.65-1.05s
    });

    setLoading(false);
  }, []);

  const handleProcessSelect = (process: BusinessProcess) => {
    setSelectedProcess(process);
  };

  const handleFileUpload = useCallback(async (file: File) => {
    setLoading(true);
    setSelectedProcess(null);

    // Simulate PDF processing with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock: Extract text from PDF and search
    // In reality, you'd send the PDF to backend for text extraction
    const mockExtractedText = `
      This document describes the procurement process for government agencies.
      Purchases exceeding 10,000 EUR require formal tender procedures.
      The process includes budget approval, vendor selection, and compliance checks.
    `;

    // Perform search based on extracted content
    const lowerQuery = mockExtractedText.toLowerCase();
    const filteredProcesses = mockProcesses
      .map(process => {
        let score = process.score * 0.7; // Base score reduced for file uploads
        
        if (mockExtractedText.toLowerCase().includes(process.name.toLowerCase())) {
          score = Math.min(score + 0.25, 0.99);
        }
        if (mockExtractedText.toLowerCase().includes(process.category.toLowerCase())) {
          score = Math.min(score + 0.15, 0.99);
        }
        
        return { ...process, score };
      })
      .filter(process => process.score > 0.5) // Only show relevant matches
      .sort((a, b) => b.score - a.score);

    setSearchResult({
      query: { text: `Uploaded: ${file.name}`, timestamp: new Date() },
      processes: filteredProcesses,
      totalFound: filteredProcesses.length,
      searchTime: 1.2 + Math.random() * 0.5,
    });

    setLoading(false);
  }, []);

  const handleModeSelect = (mode: InputMode) => {
    setInputMode(mode);
    setSearchResult(null);
    setSelectedProcess(null);
  };

  const handleBackToModeSelection = () => {
    setInputMode(null);
    setSearchResult(null);
    setSelectedProcess(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* App Header */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "primary.main" }}
      >
        <Toolbar>
          {inputMode !== null && (
            <IconButton
              color="inherit"
              onClick={handleBackToModeSelection}
              sx={{ mr: 2 }}
              disabled={loading}
            >
              <ArrowBack />
            </IconButton>
          )}
          <AccountTree />
          <Typography variant="h5" component="h1" sx={{ ml: 2, fontWeight: 600 }}>
            OpenFlow Atlas
          </Typography>
          <Typography variant="subtitle1" sx={{ ml: 2, opacity: 0.9 }}>
            Business Process Discovery Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      {inputMode === null ? (
        // Step 1: Mode Selection
        <Fade in={true} timeout={500}>
          <Box>
            <InputModeSelector onModeSelect={handleModeSelect} />
          </Box>
        </Fade>
      ) : (
        <Fade in={true} timeout={300}>
          <Container maxWidth="xl" sx={{ py: 3 }}>
            {/* Step 2: Input Area (Text or File) */}
            <Box sx={{ mb: 3 }}>
              {inputMode === 'text' ? (
                <SearchBar onSearch={handleSearch} loading={loading} />
              ) : (
                <FileUpload
                  onFileUpload={handleFileUpload}
                  loading={loading}
                  disabled={loading}
                />
              )}
            </Box>

            {/* Step 3: Results Display */}
            {searchResult && searchResult.processes.length > 0 && (
              <Fade in={true} timeout={500}>
                <Grid container spacing={3} sx={{ minHeight: "calc(100vh - 280px)" }}>
                  {/* Process List */}
                  <Grid item xs={12} md={selectedProcess ? 5 : 12}>
                    <Paper sx={{ height: "100%", overflow: "hidden" }}>
                      <ProcessList
                        processes={searchResult.processes}
                        selectedProcess={selectedProcess}
                        onProcessSelect={handleProcessSelect}
                        loading={loading}
                      />
                    </Paper>
                  </Grid>

                  {/* Details Panel - Only show when process is selected */}
                  {selectedProcess && (
                    <Grid item xs={12} md={7}>
                      <Fade in={true} timeout={300}>
                        <Paper sx={{ height: "100%", overflow: "hidden" }}>
                          <ProcessDetailsPanel process={selectedProcess} />
                        </Paper>
                      </Fade>
                    </Grid>
                  )}
                </Grid>
              </Fade>
            )}

            {/* No Results State */}
            {searchResult && searchResult.processes.length === 0 && (
              <Fade in={true} timeout={500}>
                <Box sx={{ textAlign: 'center', py: 8 }}>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    No matching processes found
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Try adjusting your search query or upload a different document
                  </Typography>
                </Box>
              </Fade>
            )}
          </Container>
        </Fade>
      )}
    </ThemeProvider>
  );
};

export default App;
