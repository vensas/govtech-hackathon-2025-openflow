import React from 'react';
import { Card } from 'primereact/card';
import { colors } from '../theme';

interface InputModeSelectorProps {
  onModeSelect: (mode: 'text' | 'file') => void;
}

export const InputModeSelector: React.FC<InputModeSelectorProps> = ({ onModeSelect }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '4rem' }}>
        <h2 style={{ fontWeight: 600, color: colors.primary.main, marginBottom: '1rem' }}>
          How would you like to find a process?
        </h2>
        <p style={{ fontSize: '1rem', color: colors.text.secondary }}>
          Choose your preferred input method to discover relevant business processes
        </p>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Text Query Option */}
        <Card 
          onClick={() => onModeSelect('text')}
          style={{ 
            border: '2px solid #e0e0e0',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.primary.main;
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = `0 8px 24px ${colors.primary.main}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e0e0e0';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: colors.primary[50],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <i className="pi pi-pencil" style={{ fontSize: '2.5rem', color: colors.primary.main }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>
              Text Query
            </h3>
            <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '1rem' }}>
              Ask questions in natural language and get instant results
            </p>
            <span style={{ fontSize: '0.75rem', color: colors.primary.main, fontWeight: 500 }}>
              Example: "How is procurement handled?"
            </span>
          </div>
        </Card>

        {/* PDF Upload Option */}
        <Card 
          onClick={() => onModeSelect('file')}
          style={{ 
            border: '2px solid #e0e0e0',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.primary.main;
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = `0 8px 24px ${colors.primary.main}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e0e0e0';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: colors.secondary[50],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <i className="pi pi-upload" style={{ fontSize: '2.5rem', color: colors.secondary.main }} />
            </div>
            <h3 style={{ fontWeight: 600, marginBottom: '0.75rem' }}>
              PDF Upload
            </h3>
            <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '1rem' }}>
              Upload a process description document to find matches
            </p>
            <span style={{ fontSize: '0.75rem', color: colors.secondary.main, fontWeight: 500 }}>
              Drag & drop or browse your files
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};
