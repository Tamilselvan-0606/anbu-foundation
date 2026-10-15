import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const { pathname } = useLocation();

  // Automatically scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  // Show floating button when user scrolls down & detect if it reaches footer
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      // Check footer overlap
      const footer = document.getElementById('site-footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Button is positioned bottom ~32px, so if footer top comes into view within windowHeight - 90px
        if (footerRect.top <= windowHeight - 40) {
          setIsOverFooter(true);
        } else {
          setIsOverFooter(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        size="medium"
        aria-label="scroll to top"
        sx={{
          position: 'fixed',
          bottom: { xs: 24, md: 32 },
          right: { xs: 24, md: 32 },
          zIndex: 1200,
          backgroundColor: isOverFooter ? '#faf6ef' : '#002c62',
          color: isOverFooter ? '#002c62' : '#FFFFFF',
          borderRadius: '50%',
          width: { xs: 46, md: 52 },
          height: { xs: 46, md: 52 },
          minHeight: 'unset',
          border: isOverFooter ? '2px solid #faf6ef' : '1.5px solid #002c62',
          boxShadow: isOverFooter ? '0 8px 24px rgba(0, 0, 0, 0.4)' : '0 8px 24px rgba(0, 44, 98, 0.35)',
          transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
          '@keyframes floatArrow': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-5px)',
            },
          },
          '&:hover': {
            backgroundColor: isOverFooter ? '#ede5d4' : '#080131',
            borderColor: isOverFooter ? '#ede5d4' : '#080131',
            transform: 'scale(1.08)',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.45)',
          },
        }}
      >
        <KeyboardArrowUpIcon
          sx={{
            fontSize: '1.85rem',
            animation: 'floatArrow 1.5s ease-in-out infinite',
          }}
        />
      </Fab>
    </Zoom>
  );
};
