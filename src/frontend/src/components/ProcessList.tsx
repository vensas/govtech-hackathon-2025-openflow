import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Paper,
  Alert,
} from '@mui/material';
import { BusinessProcess } from '../types';

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
      <Box p={3}>
        <Typography>Searching processes...</Typography>
      </Box>
    );
  }

  if (processes.length === 0) {
    return (
      <Box p={3}>
        <Alert severity="info">
          No processes found. Try adjusting your search query.
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Box p={2} borderBottom="1px solid" borderColor="divider">
        <Typography variant="h6" color="primary">
          Found {processes.length} matching processes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click on a process to view details and BPMN diagram
        </Typography>
      </Box>

      <List sx={{ p: 0 }}>
        {processes.map((process, index) => (
          <React.Fragment key={process.id}>
            <ListItem
              button
              selected={selectedProcess?.id === process.id}
              onClick={() => onProcessSelect(process)}
              sx={{
                py: 2,
                px: 2,
                '&.Mui-selected': {
                  backgroundColor: 'primary.50',
                  borderRight: '4px solid',
                  borderRightColor: 'primary.main',
                },
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {process.name}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="body2" color="primary.main" fontWeight={500}>
                        {Math.round(process.score * 100)}%
                      </Typography>
                    </Box>
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary" mb={1}>
                      {process.description.substring(0, 120)}...
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={0.5}>
                      <Chip
                        label={process.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                      <Chip
                        label={process.owner.department}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {index < processes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};