// PrimeReact theme configuration
export const colors = {
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
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
};

// Initialize PrimeReact theme
export const initTheme = () => {
  // Apply global styles
  const style = document.createElement('style');
  style.innerHTML = `
    :root {
      --primary-color: ${colors.primary.main};
      --primary-light: ${colors.primary.light};
      --primary-dark: ${colors.primary.dark};
      --surface-ground: ${colors.background.default};
      --surface-card: ${colors.background.paper};
      --text-color: ${colors.text.primary};
      --text-color-secondary: ${colors.text.secondary};
      font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }
    
    body {
      margin: 0;
      background-color: ${colors.background.default};
      color: ${colors.text.primary};
    }
    
    .p-component {
      font-family: 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    }
    
    .p-card {
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(76, 175, 80, 0.1);
      transition: all 0.2s ease-in-out;
    }
    
    .p-card:hover {
      box-shadow: 0 4px 16px rgba(76, 175, 80, 0.15);
      transform: translateY(-2px);
    }
    
    .p-button {
      border-radius: 8px;
      font-weight: 500;
    }
    
    .p-inputtext {
      border-radius: 8px;
    }
    
    .p-chip {
      border-radius: 16px;
    }
  `;
  document.head.appendChild(style);
};