import { createTheme } from '@mui/material/styles';

/**
 * Updated Strict Design System Theme
 * Approved Color Palette:
 * - Primary buttons, CTA buttons: #002c62
 * - Primary section background: #f4f4f2 (text: #080131)
 * - Alternating section background: #faf6ef (text: #080131)
 * - Cards & containers: #FFFFFF (text: #000000)
 * - Font: "Inter", "Inter Fallback"
 */
export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Inter Fallback", sans-serif',
    allVariants: {
      color: '#080131',
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
    },
    h1: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.2,
      color: '#080131',
    },
    h2: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.25,
      color: '#080131',
    },
    h3: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      color: '#080131',
    },
    h4: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.35,
      color: '#080131',
    },
    h5: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1.4,
      color: '#080131',
    },
    h6: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#080131',
    },
    body1: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      color: '#080131',
      fontSize: '0.96rem',
      lineHeight: 1.75,
      fontWeight: 400,
      opacity: 0.9,
    },
    body2: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      color: '#080131',
      fontSize: '0.90rem',
      lineHeight: 1.7,
      fontWeight: 400,
      opacity: 0.9,
    },
    button: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      color: '#FFFFFF',
    },
    caption: {
      fontFamily: '"Inter", "Inter Fallback", sans-serif',
      color: '#080131',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#002c62',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#faf6ef',
      contrastText: '#080131',
    },
    background: {
      default: '#f4f4f2',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#080131',
      secondary: '#000000',
    },
    action: {
      active: '#080131',
      hover: '#7974c4',
    },
    divider: 'rgba(8, 1, 49, 0.12)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#002c62',
          color: '#FFFFFF',
          borderRadius: '8px',
          padding: '10px 24px',
          fontWeight: 600,
          boxShadow: '0 4px 14px rgba(138, 133, 214, 0.35)',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            backgroundColor: '#002c62',
            color: '#FFFFFF',
            boxShadow: '0 6px 20px rgba(138, 133, 214, 0.45)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          border: '1.5px solid #002c62',
          backgroundColor: '#002c62',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#002c62',
            border: '1.5px solid #002c62',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderRadius: '14px',
          border: '1px solid rgba(8, 1, 49, 0.08)',
          boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 14px 38px rgba(8, 1, 49, 0.12)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: '#000000',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(8, 1, 49, 0.2)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#080131',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#002c62',
          },
          '& .MuiInputLabel-root': {
            color: '#080131',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#002c62',
          },
          '& .MuiFormHelperText-root': {
            color: '#080131',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderRadius: '10px !important',
          marginBottom: '14px',
          border: '1px solid rgba(8, 1, 49, 0.08)',
          boxShadow: '0 4px 16px rgba(8, 1, 49, 0.06)',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#002c62',
          color: '#FFFFFF',
          fontWeight: 600,
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      },
    },
  },
});
