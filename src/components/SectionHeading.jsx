import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  maxWidth = 720,
  textColor,
  titleSx,
}) => {
  const mainColor = textColor || '#080131';

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.8, 0.25, 1] }}
      sx={{
        textAlign: align,
        maxWidth: maxWidth,
        mx: align === 'center' ? 'auto' : 0,
        mb: { xs: 5, md: 7 },
      }}
    >
      {badge && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          sx={{
            display: 'inline-block',
            backgroundColor: '#002c62',
            color: '#FFFFFF',
            px: 2,
            py: 0.6,
            borderRadius: '20px',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            mb: 1.8,
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}
        >
          {badge}
        </Box>
      )}

      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.5rem' },
          color: mainColor,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
          mb: 2,
          ...titleSx,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          sx={{
            color: mainColor,
            opacity: 0.9,
            fontSize: { xs: '0.92rem', md: '0.98rem' },
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
