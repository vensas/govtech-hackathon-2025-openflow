import React from 'react';
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { Message } from 'primereact/message';
import { Divider } from 'primereact/divider';
import { BusinessProcess } from '../types';
import { colors } from '../theme';

interface ProcessListProps {
  processes: BusinessProcess[];
  selectedProcess: BusinessProcess | null;
  onProcessSelect: (process: BusinessProcess) => void;
  loading?: boolean;
}

export const ProcessList: React.FC<ProcessListProps> = ({
  processes,
  selectedProcess,
  onProcessSelect,
  loading = false,
}) => {
  if (loading) {
    return (
      <Card>
        <div style={{ padding: '1.5rem' }}>
          <p>Searching processes...</p>
        </div>
      </Card>
    );
  }

  if (processes.length === 0) {
    return (
      <Card>
        <div style={{ padding: '1.5rem' }}>
          <Message severity="info" text="No processes found. Try adjusting your search query." />
        </div>
      </Card>
    );
  }

  return (
    <Card style={{ height: '100%' }}>
      <div style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
        <h3 style={{ color: colors.primary.main, margin: 0, marginBottom: '0.5rem' }}>
          Found {processes.length} matching processes
        </h3>
        <p style={{ fontSize: '0.875rem', color: colors.text.secondary, margin: 0 }}>
          Click on a process to view details and BPMN diagram
        </p>
      </div>

      <div style={{ padding: 0 }}>
        {processes.map((process, index) => (
          <React.Fragment key={process.id}>
            <div
              onClick={() => onProcessSelect(process)}
              style={{
                padding: '1rem',
                cursor: 'pointer',
                backgroundColor: selectedProcess?.id === process.id ? colors.primary[50] : 'transparent',
                borderRight: selectedProcess?.id === process.id ? `4px solid ${colors.primary.main}` : 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                if (selectedProcess?.id !== process.id) {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedProcess?.id !== process.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h4 style={{ fontWeight: 600, margin: 0 }}>
                  {process.name}
                </h4>
                <span style={{ fontSize: '0.875rem', color: colors.primary.main, fontWeight: 500 }}>
                  {Math.round(process.score * 100)}%
                </span>
              </div>
              <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.5rem' }}>
                {process.description.substring(0, 120)}...
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                <Chip 
                  label={process.category} 
                  style={{ fontSize: '0.75rem', backgroundColor: colors.primary.light, color: 'white' }}
                />
                <Chip 
                  label={process.owner.department} 
                  style={{ fontSize: '0.75rem' }}
                />
              </div>
            </div>
            {index < processes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};