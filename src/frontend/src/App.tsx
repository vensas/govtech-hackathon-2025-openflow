import React, { useState, useCallback, useEffect } from "react";
import { ChatInput } from "./components/chat/ChatInput";
import { ProcessList } from "./components/list/ProcessList";
import { ProcessDetailsPanel } from "./components/details/ProcessDetailsPanel";
import { initTheme, colors } from "./theme";
import { BusinessProcess, SearchResult } from "./types";
import { mockProcesses } from "./data/mockProcesses";

import "primereact/resources/themes/lara-light-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [selectedProcess, setSelectedProcess] =
    useState<BusinessProcess | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initTheme();
  }, []);

  const handleChatSubmit = useCallback(async (query: string, file?: File) => {
    setLoading(true);
    setSelectedProcess(null);

    // Simulate API call with realistic delay
    const delay = file ? 1500 : 800;
    await new Promise((resolve) => setTimeout(resolve, delay));

    let filteredProcesses: typeof mockProcesses = [];
    let queryText = query;

    // Text-only search
    const lowerQuery = query?.length ? "procurement" : "";
    filteredProcesses = mockProcesses
      .map((process) => {
        let score = process.score;

        if (process.name.toLowerCase().includes(lowerQuery)) {
          score = Math.min(score * 1.03, 1.0);
        }
        if (process.description.toLowerCase().includes(lowerQuery)) {
          score = Math.min(score * 1.01, 1.0);
        }
        if (process.category.toLowerCase().includes(lowerQuery)) {
          score = Math.min(score * 1.005, 1.0);
        }

        return { ...process, score };
      })
      .filter((process) => {
        const matchesName = process.name.toLowerCase().includes(lowerQuery);
        const matchesDescription = process.description
          .toLowerCase()
          .includes(lowerQuery);
        const matchesCategory = process.category
          .toLowerCase()
          .includes(lowerQuery);
        const matchesOwner = process.owner.department
          .toLowerCase()
          .includes(lowerQuery);

        return (
          matchesName || matchesDescription || matchesCategory || matchesOwner
        );
      })
      .sort((a, b) => b.score - a.score);

    setSearchResult({
      query: { text: queryText, timestamp: new Date() },
      processes: filteredProcesses,
      totalFound: filteredProcesses.length,
      searchTime: 0.65 + Math.random() * 0.4,
    });

    setLoading(false);
  }, []);

  const handleProcessSelect = (process: BusinessProcess) => {
    setSelectedProcess(process);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* App Header */}
      <div
        style={{
          backgroundColor: colors.primary.main,
          color: "white",
          padding: "1rem 1.5rem",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <i className="pi pi-search" style={{ fontSize: "1.5rem" }} />
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 600 }}>
            OpenFlow
          </h1>
          <span style={{ opacity: 0.9, fontSize: "1rem" }}>
            Governement Process Discovery
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            width: "100%",
            margin: "0 auto",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Results Display */}
          {searchResult && searchResult.processes.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: selectedProcess ? "40% 60%" : "1fr",
                gap: "1.5rem",
                flex: 1,
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              {/* Process List */}
              <div style={{ height: "100%", overflow: "hidden" }}>
                <ProcessList
                  processes={searchResult.processes}
                  selectedProcess={selectedProcess}
                  onProcessSelect={handleProcessSelect}
                  loading={loading}
                />
              </div>

              {/* Details Panel - Only show when process is selected */}
              {selectedProcess && (
                <div style={{ height: "100%", overflow: "hidden" }}>
                  <ProcessDetailsPanel process={selectedProcess} />
                </div>
              )}
            </div>
          ) : searchResult && searchResult.processes.length === 0 ? (
            /* No Results State */
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{ color: colors.text.secondary, marginBottom: "0.5rem" }}
              >
                No matching processes found
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Try adjusting your search query or upload a different document
              </p>
            </div>
          ) : (
            /* Empty State - Show when no search has been performed */
            <div
              style={{
                textAlign: "center",
                padding: "4rem 2rem",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <i
                className="pi pi-search"
                style={{
                  fontSize: "4rem",
                  color: colors.primary.light,
                  marginBottom: "1rem",
                }}
              />
              <h2
                style={{ color: colors.text.primary, marginBottom: "0.5rem" }}
              >
                Search for Government Processes
              </h2>
              <p
                style={{
                  color: colors.text.secondary,
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Ask questions about government processes in natural language, or
                attach a PDF document to find matching workflows.
              </p>
            </div>
          )}

          {/* Chat Input - Always visible at bottom */}
          <div style={{ flexShrink: 0 }}>
            <ChatInput
              key="chat-input"
              onSubmit={handleChatSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
