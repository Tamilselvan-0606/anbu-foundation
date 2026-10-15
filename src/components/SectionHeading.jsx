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
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.6rem' },
          color: mainColor,
          lineHeight: 1.25,
          letterSpacing: '-0.015em',
          mb: 1.5,
          ...titleSx,
        }}
      >
        {title}
      </Typography>

      {/* BNR-Style animated expanding divider line */}
      <Box
        component={motion.div}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        sx={{
          width: 54,
          height: 2.5,
          backgroundColor: '#002c62',
          mx: align === 'center' ? 'auto' : 0,
          my: 1.8,
          borderRadius: '2px',
          transformOrigin: align === 'center' ? 'center' : 'left',
        }}
      />

      {subtitle && (
        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            color: mainColor,
            opacity: 0.9,
            fontSize: { xs: '0.94rem', md: '1.02rem' },
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
