import React from 'react';
import { Card } from 'primereact/card';
import { LegalBasis } from '../../types';
import { colors } from '../../theme';

interface LegalBasesProps {
  legalBases: LegalBasis[];
}

export const LegalBases: React.FC<LegalBasesProps> = ({ legalBases }) => {
  if (!legalBases || legalBases.length === 0) {
    return null;
  }

  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <i className="pi pi-book" style={{ color: colors.primary.main }} />
          Legal Basis
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {legalBases.map((legal, index) => (
            <li key={index} style={{ marginBottom: '0.75rem' }}>
              {legal.url ? (
                <a 
                  href={legal.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: colors.primary.main, textDecoration: 'none', fontWeight: 500 }}
                >
                  {legal.title}
                </a>
              ) : (
                <span style={{ fontWeight: 500 }}>{legal.title}</span>
              )}
              <div style={{ fontSize: '0.875rem', color: colors.text.secondary }}>{legal.reference}</div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
