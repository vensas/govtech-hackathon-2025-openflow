import { createTheme } from '@mui/material/styles';

// Extend the Palette interface to include custom color shades
declare module '@mui/material/styles' {
  interface PaletteColor {
    50?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Grass green
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#ffffff',
      50: '#E8F5E9',
    },
    secondary: {
      main: '#2196F3', // Blue for upload
      light: '#64B5F6',
      dark: '#1976D2',
      50: '#E3F2FD',
    },
    background: {
      default: '#f8fdf8',
      paper: '#ffffff',
    },
    text: {
      primary: '#1b5e20',
      secondary: '#2e7d32',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(76, 175, 80, 0.1)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(76, 175, 80, 0.15)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});