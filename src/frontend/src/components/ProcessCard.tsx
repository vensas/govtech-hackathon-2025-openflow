import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Divider,
} from '@mui/material';
import { BusinessProcess } from '../types';

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
  const getScoreColor = (score: number) => {
    if (score >= 0.8) return 'success';
    if (score >= 0.6) return 'warning';
    return 'error';
  };

  const getScorePercentage = (score: number) => Math.round(score * 100);

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        border: selected ? '2px solid' : '1px solid',
        borderColor: selected ? 'primary.main' : 'grey.300',
        mb: 2,
        transition: 'all 0.2s ease-in-out',
        '&:hover': onClick ? {
          transform: 'translateY(-1px)',
          boxShadow: 3,
        } : {},
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flex: 1 }}>
            {process.name}
          </Typography>
          <Box textAlign="right" ml={2}>
            <Typography variant="caption" color="text.secondary">
              Relevance
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <LinearProgress
                variant="determinate"
                value={getScorePercentage(process.score)}
                color={getScoreColor(process.score)}
                sx={{ width: 60, height: 6, borderRadius: 3 }}
              />
              <Typography variant="body2" fontWeight={500}>
                {getScorePercentage(process.score)}%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" mb={2} sx={{ lineHeight: 1.5 }}>
          {process.description}
        </Typography>

        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
          <Chip
            label={process.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          {process.owner && (
            <Chip
              label={process.owner.department}
              size="small"
              variant="outlined"
            />
          )}
          {process.sla && (
            <Chip
              label={`SLA: ${process.sla}`}
              size="small"
              color="secondary"
              variant="outlined"
            />
          )}
        </Box>

        {process.snippets.length > 0 && (
          <>
            <Divider sx={{ my: 1 }} />
            <Typography variant="caption" color="text.secondary" gutterBottom>
              Matching Evidence:
            </Typography>
            {process.snippets.slice(0, 2).map((snippet, index) => (
              <Box key={index} mt={1}>
                <Typography variant="body2" sx={{ 
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  color: 'text.secondary',
                  lineHeight: 1.4,
                }}>
                  "{snippet.text.substring(0, 150)}..."
                </Typography>
                <Typography variant="caption" color="primary.main">
                  {snippet.source} ({Math.round(snippet.similarity * 100)}% match)
                </Typography>
              </Box>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};