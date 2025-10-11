import React, { useState, useEffect, useCallback } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  CircularProgress,
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Clear as ClearIcon,
} from '@mui/icons-material';

interface SearchBarProps {
  onSearch: (query: string) => void;
  loading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, loading = false }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce logic: update debouncedQuery after 400ms of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  // Trigger search when debouncedQuery changes
  useEffect(() => {
    onSearch(debouncedQuery.trim());
  }, [debouncedQuery, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Immediately trigger search on submit (bypass debounce)
    setDebouncedQuery(query);
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery('');
    setDebouncedQuery('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Ask about business processes... (e.g., 'How is procurement over 10k EUR handled?')"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
        autoFocus
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {loading ? (
                <CircularProgress size={24} sx={{ mr: 1 }} />
              ) : query ? (
                <IconButton
                  onClick={handleClear}
                  size="small"
                  sx={{ mr: 0.5 }}
                >
                  <ClearIcon />
                </IconButton>
              ) : null}
              <IconButton
                onClick={handleSubmit}
                disabled={loading || !query.trim()}
                color="primary"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'background.paper',
            fontSize: '1.1rem',
            padding: '8px 14px',
          },
        }}
      />
    </Box>
  );
};