import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PageBanner = ({
  title,
  subtitle,
  badge = 'Anbu Foundation',
  breadcrumbCurrent,
  titleSx,
  bgImage = null,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f2',
        color: '#080131',
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(8, 1, 49, 0.12)',
      }}
    >
      {/* Optional Custom Background Image if explicitly passed */}
      {bgImage && (
        <>
          <Box
            component="img"
            src={bgImage}
            alt="Campus Background"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)',
              zIndex: 1,
            }}
          />
        </>
      )}

      {/* Subtle geometric background embellishment in approved color */}
      {!bgImage && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 320,
              height: 320,
              borderRadius: '50%',
              backgroundColor: '#002c62',
              opacity: 0.15,
              pointerEvents: 'none',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -60,
              left: -40,
              width: 220,
              height: 220,
              borderRadius: '50%',
              backgroundColor: '#002c62',
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      <Container
        maxWidth="xl"
        component={motion.div}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        sx={{ position: 'relative', zIndex: bgImage ? 2 : 1 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.5rem' },
            color: bgImage ? '#FFFFFF' : '#080131',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            maxWidth: 900,
            mb: 2,
            ...(bgImage ? { textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)' } : {}),
            ...titleSx,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              color: bgImage ? '#FFFFFF' : '#080131',
              opacity: 0.9,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              maxWidth: 780,
              lineHeight: 1.75,
              fontWeight: 400,
              ...(bgImage ? { textShadow: '0 1px 8px rgba(0, 0, 0, 0.35)' } : {}),
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
};
