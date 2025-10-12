import React from 'react';
import { Chip } from 'primereact/chip';
import { BusinessProcess } from '../../types';
import { colors } from '../../theme';

interface ProcessHeaderProps {
  process: BusinessProcess;
}

export const ProcessHeader: React.FC<ProcessHeaderProps> = ({ process }) => {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h2 style={{ color: colors.primary.main, marginBottom: '0.5rem', fontWeight: 600 }}>
        {process.name}
      </h2>
      <p style={{ color: colors.text.secondary, marginBottom: '1rem' }}>
        {process.description}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Chip 
          icon="pi pi-building"
          label={process.governmentResort}
          style={{ backgroundColor: '#E0E0E0', color: '#424242' }} 
        />
        <Chip 
          icon="pi pi-chart-line"
          label={`${Math.round(process.score * 100)}% Match Score`} 
          style={{ backgroundColor: colors.primary.main, color: 'white' }}
        />
        <Chip 
          icon="pi pi-users"
          label={`${process.successfulAdoptions} Successful Adoptions`} 
          style={{ backgroundColor: '#757575', color: 'white' }}
        />
      </div>
    </div>
  );
};
