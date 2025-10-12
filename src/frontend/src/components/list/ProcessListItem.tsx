import React from 'react';
import { Chip } from 'primereact/chip';
import { BusinessProcess } from '../../types';
import { colors } from '../../theme';

interface ProcessListItemProps {
  process: BusinessProcess;
  isSelected: boolean;
  onClick: () => void;
}

export const ProcessListItem: React.FC<ProcessListItemProps> = ({
  process,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '1rem',
        cursor: 'pointer',
        backgroundColor: isSelected ? colors.primary[50] : 'transparent',
        borderRight: isSelected ? `4px solid ${colors.primary.main}` : 'none',
        transition: 'background-color 0.2s',
      }}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = '#f5f5f5';
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h4 style={{ fontWeight: 600, margin: 0, flex: 1 }}>
          {process.name}
        </h4>
      </div>
      <p style={{ fontSize: '0.875rem', color: colors.text.secondary, marginBottom: '0.75rem' }}>
        {process.description.substring(0, 120)}...
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
        <Chip 
          icon="pi pi-chart-line"
          label={`${Math.round(process.score * 100)}% Match`}
          style={{ fontSize: '0.75rem', backgroundColor: colors.primary.main, color: 'white' }}
        />
        <Chip 
          icon="pi pi-users"
          label={`${process.successfulAdoptions} Adoptions`}
          style={{ fontSize: '0.75rem', backgroundColor: '#757575', color: 'white' }}
        />
        <Chip 
          icon="pi pi-building"
          label={process.governmentResort}
          style={{ fontSize: '0.75rem', backgroundColor: '#E0E0E0', color: '#424242' }}
        />
      </div>
    </div>
  );
};
