import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  Chip,
  CircularProgress,
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  Close as CloseIcon,
  Description as FileIcon,
} from '@mui/icons-material';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  loading?: boolean;
  disabled?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  loading = false,
  disabled = false,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (disabled || loading) return;

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        const file = files[0];
        if (file.type === 'application/pdf') {
          setSelectedFile(file);
          onFileUpload(file);
        } else {
          alert('Please upload a PDF file');
        }
      }
    },
    [disabled, loading, onFileUpload]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || loading) return;

      const files = e.target.files;
      if (files && files[0]) {
        const file = files[0];
        if (file.type === 'application/pdf') {
          setSelectedFile(file);
          onFileUpload(file);
        } else {
          alert('Please upload a PDF file');
        }
      }
    },
    [disabled, loading, onFileUpload]
  );

  const handleRemove = useCallback(() => {
    setSelectedFile(null);
  }, []);

  return (
    <Box>
      <input
        type="file"
        id="pdf-file-upload"
        accept=".pdf,application/pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        disabled={disabled || loading}
      />

      {selectedFile ? (
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'primary.50',
            border: '1px solid',
            borderColor: 'primary.main',
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            <FileIcon color="primary" />
            <Box>
              <Typography variant="body2" fontWeight={600}>
                {selectedFile.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </Typography>
            </Box>
            {loading && (
              <CircularProgress size={20} sx={{ ml: 1 }} />
            )}
          </Box>
          {!loading && (
            <IconButton
              size="small"
              onClick={handleRemove}
              disabled={disabled}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </Paper>
      ) : (
        <Paper
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          sx={{
            p: 3,
            textAlign: 'center',
            border: '2px dashed',
            borderColor: dragActive ? 'primary.main' : 'grey.300',
            backgroundColor: dragActive ? 'primary.50' : 'background.paper',
            cursor: disabled || loading ? 'not-allowed' : 'pointer',
            opacity: disabled || loading ? 0.6 : 1,
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: disabled || loading ? 'grey.300' : 'primary.main',
              backgroundColor: disabled || loading ? 'background.paper' : 'primary.50',
            },
          }}
        >
          <UploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
          <Typography variant="body1" gutterBottom>
            Drop PDF file here or
          </Typography>
          <Button
            variant="outlined"
            component="label"
            htmlFor="pdf-file-upload"
            disabled={disabled || loading}
            startIcon={loading ? <CircularProgress size={16} /> : <UploadIcon />}
          >
            {loading ? 'Processing...' : 'Browse Files'}
          </Button>
          <Typography variant="caption" display="block" sx={{ mt: 1 }} color="text.secondary">
            Supported format: PDF (max 10MB)
          </Typography>
        </Paper>
      )}
    </Box>
  );
};
