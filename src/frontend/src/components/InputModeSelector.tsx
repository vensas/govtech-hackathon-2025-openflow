import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  alpha,
} from '@mui/material';
import {
  Edit as EditIcon,
  Upload as UploadIcon,
} from '@mui/icons-material';

interface InputModeSelectorProps {
  onModeSelect: (mode: 'text' | 'file') => void;
}

export const InputModeSelector: React.FC<InputModeSelectorProps> = ({ onModeSelect }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mb: 6, mt: 8 }}>
        <Typography variant="h4" gutterBottom fontWeight={600} color="primary.main">
          How would you like to find a process?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Choose your preferred input method to discover relevant business processes
        </Typography>
      </Box>

      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          maxWidth: 800,
          mx: 'auto',
        }}
      >
        {/* Text Query Option */}
        <Card 
          elevation={0}
          sx={{ 
            border: '2px solid',
            borderColor: 'divider',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'primary.main',
              transform: 'translateY(-4px)',
              boxShadow: (theme) => `0 8px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
            },
          }}
        >
          <CardActionArea 
            onClick={() => onModeSelect('text')}
            sx={{ height: '100%', p: 2 }}
          >
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'primary.50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <EditIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Text Query
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Ask questions in natural language and get instant results
              </Typography>
              <Typography variant="caption" color="primary.main" fontWeight={500}>
                Example: "How is procurement handled?"
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* PDF Upload Option */}
        <Card 
          elevation={0}
          sx={{ 
            border: '2px solid',
            borderColor: 'divider',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'primary.main',
              transform: 'translateY(-4px)',
              boxShadow: (theme) => `0 8px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
            },
          }}
        >
          <CardActionArea 
            onClick={() => onModeSelect('file')}
            sx={{ height: '100%', p: 2 }}
          >
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'secondary.50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                <UploadIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
              <Typography variant="h5" gutterBottom fontWeight={600}>
                PDF Upload
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Upload a process description document to find matches
              </Typography>
              <Typography variant="caption" color="secondary.main" fontWeight={500}>
                Drag & drop or browse your files
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
};
