import React, { useState, useCallback, useEffect } from "react";
import { Button } from "primereact/button";
import { SearchBar } from "./components/SearchBar";
import { ProcessList } from "./components/ProcessList";
import { ProcessDetailsPanel } from "./components/ProcessDetailsPanel";
import { InputModeSelector } from "./components/InputModeSelector";
import { FileUpload } from "./components/FileUpload";
import { initTheme, colors } from "./theme";
import { BusinessProcess, SearchResult } from "./types";
import { mockProcesses } from "./data/mockProcesses";

import "primereact/resources/themes/lara-light-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

type InputMode = 'text' | 'file' | null;

const App: React.FC = () => {
  const [inputMode, setInputMode] = useState<InputMode>(null);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [selectedProcess, setSelectedProcess] =
    useState<BusinessProcess | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initTheme();
  }, []);

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
    <div>
      {/* App Header */}
      <div style={{ 
        backgroundColor: colors.primary.main, 
        color: 'white',
        padding: '1rem 1.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {inputMode !== null && (
            <Button
              icon="pi pi-arrow-left"
              onClick={handleBackToModeSelection}
              disabled={loading}
              text
              severity="secondary"
              style={{ color: 'white' }}
            />
          )}
          <i className="pi pi-sitemap" style={{ fontSize: '1.5rem' }} />
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>
            OpenFlow Atlas
          </h1>
          <span style={{ opacity: 0.9, fontSize: '1rem' }}>
            Business Process Discovery Dashboard
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      {inputMode === null ? (
        // Step 1: Mode Selection
        <InputModeSelector onModeSelect={handleModeSelect} />
      ) : (
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '1.5rem' }}>
          {/* Step 2: Input Area (Text or File) */}
          <div style={{ marginBottom: '1.5rem' }}>
            {inputMode === 'text' ? (
              <SearchBar onSearch={handleSearch} loading={loading} />
            ) : (
              <FileUpload
                onFileUpload={handleFileUpload}
                loading={loading}
                disabled={loading}
              />
            )}
          </div>

          {/* Step 3: Results Display */}
          {searchResult && searchResult.processes.length > 0 && (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: selectedProcess ? '40% 60%' : '1fr',
              gap: '1.5rem',
              minHeight: 'calc(100vh - 280px)'
            }}>
              {/* Process List */}
              <div style={{ height: '100%', overflow: 'hidden' }}>
                <ProcessList
                  processes={searchResult.processes}
                  selectedProcess={selectedProcess}
                  onProcessSelect={handleProcessSelect}
                  loading={loading}
                />
              </div>

              {/* Details Panel - Only show when process is selected */}
              {selectedProcess && (
                <div style={{ height: '100%', overflow: 'hidden' }}>
                  <ProcessDetailsPanel process={selectedProcess} />
                </div>
              )}
            </div>
          )}

          {/* No Results State */}
          {searchResult && searchResult.processes.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <h3 style={{ color: colors.text.secondary, marginBottom: '0.5rem' }}>
                No matching processes found
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Try adjusting your search query or upload a different document
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
