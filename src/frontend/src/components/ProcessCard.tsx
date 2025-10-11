import React from 'react';
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { ProgressBar } from 'primereact/progressbar';
import { Divider } from 'primereact/divider';
import { BusinessProcess } from '../types';
import { colors } from '../theme';

interface ProcessCardProps {
  process: BusinessProcess;
  selected?: boolean;
  onClick?: () => void;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({ 
  process, 
  selected = false, 
  onClick 
}) => {
  const getScorePercentage = (score: number) => Math.round(score * 100);

  return (
    <Card
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        border: selected ? `2px solid ${colors.primary.main}` : '1px solid #e0e0e0',
        marginBottom: '1rem',
      }}
    >
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <h3 style={{ fontWeight: 600, flex: 1, margin: 0 }}>
            {process.name}
          </h3>
          <div style={{ textAlign: 'right', marginLeft: '1rem' }}>
            <div style={{ fontSize: '0.75rem', color: colors.text.secondary }}>
              Relevance
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ProgressBar 
                value={getScorePercentage(process.score)} 
                style={{ width: '60px', height: '6px' }}
                showValue={false}
              />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                {getScorePercentage(process.score)}%
              </span>
            </div>
          </div>
        </div>

        <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '1rem', lineHeight: 1.5 }}>
          {process.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <Chip label={process.category} style={{ backgroundColor: colors.primary.light, color: 'white' }} />
          {process.owner && (
            <Chip label={process.owner.department} />
          )}
          {process.sla && (
            <Chip label={`SLA: ${process.sla}`} style={{ backgroundColor: colors.secondary.light, color: 'white' }} />
          )}
        </div>

        {process.snippets.length > 0 && (
          <>
            <Divider />
            <div style={{ fontSize: '0.75rem', color: colors.text.secondary, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Matching Evidence:
            </div>
            {process.snippets.slice(0, 2).map((snippet, index) => (
              <div key={index} style={{ marginTop: '0.5rem' }}>
                <p style={{ 
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  color: colors.text.secondary,
                  lineHeight: 1.4,
                  margin: '0.25rem 0',
                }}>
                  "{snippet.text.substring(0, 150)}..."
                </p>
                <div style={{ fontSize: '0.75rem', color: colors.primary.main }}>
                  {snippet.source} ({Math.round(snippet.similarity * 100)}% match)
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Card>
  );
};