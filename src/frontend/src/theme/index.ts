// PrimeReact theme configuration
export const colors = {
  primary: {
    main: '#2E7D32', // Darker forest green for accent
    light: '#4CAF50',
    dark: '#1B5E20',
    contrastText: '#ffffff',
    50: '#F1F8F4',
  },
  secondary: {
    main: '#1976D2', // Darker blue
    light: '#42A5F5',
    dark: '#0D47A1',
    50: '#E3F2FD',
  },
  background: {
    default: '#FAFAFA', // Neutral light gray
    paper: '#ffffff',
  },
  text: {
    primary: '#212121', // Dark gray for better readability
    secondary: '#616161', // Medium gray
  },
  success: '#2E7D32', // Match primary for consistency
  warning: '#F57C00',
  error: '#D32F2F',
  info: '#1976D2',
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
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      transition: all 0.2s ease-in-out;
    }
    
    .p-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
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