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
  showStats = true,
  stats = [
    { value: '2006', title: 'Founded', desc: 'Serving with compassion' },
    { value: '18+', title: 'Years of Impact', desc: 'Continuous youth outreach' },
    { value: '100%', title: 'Merit-Based Aid', desc: 'Free education support' },
    { value: '5+', title: 'Core Initiatives', desc: 'Education & Community aid' },
  ],
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f4f2',
        color: '#080131',
        pt: { xs: 6.5, md: 8 },
        pb: { xs: 6.5, md: 8 },
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

      {/* Geometric background circles matching Image 2 & 3 */}
      {!bgImage && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: -100, md: -120 },
              right: { xs: -100, md: -110 },
              width: { xs: 260, md: 420 },
              height: { xs: 260, md: 420 },
              borderRadius: '50%',
              backgroundColor: '#002c62',
              opacity: 0.11,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: -80, md: -110 },
              left: { xs: -80, md: -110 },
              width: { xs: 200, md: 360 },
              height: { xs: 200, md: 360 },
              borderRadius: '50%',
              backgroundColor: '#002c62',
              opacity: 0.08,
              pointerEvents: 'none',
              zIndex: 0,
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: showStats && stats?.length ? 'row' : 'column' },
            alignItems: { xs: 'flex-start', lg: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 3.5, lg: 5 },
          }}
        >
          {/* Left Column: Breadcrumb, Heading and Subtitle */}
          <Box sx={{ maxWidth: { xs: '100%', lg: showStats && stats?.length ? 540 : 900 } }}>
            {/* Breadcrumb Navigation: Home > Section */}
            <Breadcrumbs
              separator={<NavigateNextIcon sx={{ fontSize: '0.95rem', color: bgImage ? 'rgba(255, 255, 255, 0.6)' : 'rgba(8, 1, 49, 0.45)' }} />}
              aria-label="breadcrumb"
              sx={{ mb: 1.2 }}
            >
              <MuiLink
                component={RouterLink}
                to="/"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: bgImage ? 'rgba(255, 255, 255, 0.8)' : '#002c62',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Home
              </MuiLink>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: bgImage ? '#FFFFFF' : '#666666',
                }}
              >
                {breadcrumbCurrent || title}
              </Typography>
            </Breadcrumbs>

            <Typography
              variant="h1"
              component={motion.h1}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.5rem' },
                color: bgImage ? '#FFFFFF' : '#080131',
                lineHeight: 1.25,
                letterSpacing: '-0.01em',
                mb: 1.5,
                ...(bgImage ? { textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)' } : {}),
                ...titleSx,
              }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography
                variant="body1"
                component={motion.p}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                sx={{
                  color: bgImage ? '#FFFFFF' : '#080131',
                  opacity: 0.9,
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                  lineHeight: 1.7,
                  fontWeight: 400,
                  ...(bgImage ? { textShadow: '0 1px 8px rgba(0, 0, 0, 0.35)' } : {}),
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>

          {/* Right Column: Dynamic Section Cards (2, 3, etc.) matching Image 4 */}
          {showStats && stats && stats.length > 0 && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: stats.length === 1 ? '1fr' : 'repeat(2, 1fr)',
                  sm: `repeat(${Math.min(stats.length, 3)}, 1fr)`,
                  lg: `repeat(${stats.length}, 1fr)`,
                },
                gap: { xs: 1.5, sm: 2 },
                width: { xs: '100%', lg: 'auto' },
                flexShrink: 0,
              }}
            >
              {stats.map((item, idx) => (
                <Box
                  key={idx}
                  component={motion.div}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  sx={{
                    backgroundColor: '#002c62',
                    color: '#FFFFFF',
                    borderRadius: '14px',
                    p: { xs: 2, sm: 2.2 },
                    minWidth: { xs: 0, sm: 130, md: 140 },
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    boxShadow: '0 8px 24px rgba(0, 44, 98, 0.20)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      boxShadow: '0 12px 30px rgba(0, 44, 98, 0.32)',
                      borderColor: 'rgba(255, 255, 255, 0.35)',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#faf6ef',
                      fontFamily: '"Playfair Display", serif !important',
                      fontWeight: 700,
                      fontSize: { xs: '1.25rem', sm: '1.45rem', md: '1.6rem' },
                      lineHeight: 1.15,
                      mb: 0.6,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#FFFFFF',
                      fontFamily: '"Playfair Display", serif !important',
                      fontWeight: 700,
                      fontSize: { xs: '0.82rem', sm: '0.88rem' },
                      lineHeight: 1.25,
                      mb: 0.5,
                      whiteSpace: 'normal',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontFamily: '"Playfair Display", serif !important',
                      fontStyle: 'italic',
                      fontSize: { xs: '0.70rem', sm: '0.76rem' },
                      lineHeight: 1.3,
                      display: 'block',
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
