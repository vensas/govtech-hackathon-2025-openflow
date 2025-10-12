import React from 'react';
import { Card } from 'primereact/card';
import { ProcessForm } from '../../types';
import { colors } from '../../theme';

interface RequiredFormsProps {
  forms: ProcessForm[];
}

export const RequiredForms: React.FC<RequiredFormsProps> = ({ forms }) => {
  if (!forms || forms.length === 0) {
    return null;
  }

  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>
          Required Forms
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {forms.map((form, index) => (
            <li key={index} style={{ marginBottom: '0.75rem' }}>
              {form.url ? (
                <a 
                  href={form.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: colors.primary.main, textDecoration: 'none', fontWeight: 500 }}
                >
                  {form.name}
                </a>
              ) : (
                <span style={{ fontWeight: 500 }}>{form.name}</span>
              )}
              <div style={{ fontSize: '0.875rem', color: colors.text.secondary }}>
                {form.required ? 'Required' : 'Optional'}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
