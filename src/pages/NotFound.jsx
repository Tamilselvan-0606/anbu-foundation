import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <Box
        sx={{
          backgroundColor: '#f4f4f2',
          color: '#080131',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 10,
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              p: { xs: 4, md: 6 },
              borderRadius: '24px',
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: 600, fontSize: { xs: '4rem', md: '5.5rem' }, color: '#FFFFFF', mb: 1 }}>
              404
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 2 }}>
              Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ color: '#FFFFFF', opacity: 0.9, mb: 4, lineHeight: 1.75 }}>
              The page you are looking for may have been moved or does not exist. Please return to the Anbu Foundation home page.
            </Typography>
            <Button
              size="large"
              onClick={() => navigate('/')}
              startIcon={<HomeIcon sx={{ color: '#FFFFFF' }} />}
              sx={{
                backgroundColor: '#002c62',
                color: '#FFFFFF',
                px: 3.5,
                py: 1.3,
                fontWeight: 700,
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
                '&:hover': { backgroundColor: '#FFFFFF' },
              }}
            >
              Return to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
};
