import React from 'react';
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { MatchSnippet } from '../types';
import { colors } from '../theme';

interface EvidenceSnippetsProps {
  snippets: MatchSnippet[];
}

export const EvidenceSnippets: React.FC<EvidenceSnippetsProps> = ({ snippets }) => {
  if (!snippets || snippets.length === 0) {
    return null;
  }

  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>
          Matching Evidence
        </h3>
        {snippets.map((snippet, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#F5F5F5', borderRadius: '8px', border: '1px solid #E0E0E0' }}>
              <p style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                "{snippet.text}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: colors.text.secondary }}>
                  Source: {snippet.source}
                </span>
                <Chip 
                  label={`${Math.round(snippet.similarity * 100)}% match`}
                  style={{ fontSize: '0.75rem', backgroundColor: '#E8F5E9', color: colors.primary.dark }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
