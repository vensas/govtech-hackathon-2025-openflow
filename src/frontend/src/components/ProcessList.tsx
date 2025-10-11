import React from 'react';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import { Divider } from 'primereact/divider';
import { BusinessProcess } from '../types';
import { colors } from '../theme';
import { ProcessListItem } from './ProcessListItem';
import { Chip } from 'primereact/chip';

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
            <ProcessListItem
              process={process}
              isSelected={selectedProcess?.id === process.id}
              onClick={() => onProcessSelect(process)}
            />
            {index < processes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </Card>
  );
};