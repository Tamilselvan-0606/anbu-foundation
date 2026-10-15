import React, { useState } from 'react';
import { Card, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

export const SuccessStoryCard = ({ story }) => {
  const [hoverDirection, setHoverDirection] = useState('bottom');
  const [isHovered, setIsHovered] = useState(false);

  // Direction-aware detection (same as Flagship Initiatives)
  const getDirection = (e, item) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // atan2 gives radians, normalize into 4 quadrants: 0: top, 1: right, 2: bottom, 3: left
    const d = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
    const directions = ['top', 'right', 'bottom', 'left'];
    return directions[d];
  };

  const handleMouseEnter = (e) => {
    const dir = getDirection(e, e.currentTarget);
    setHoverDirection(dir);
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    const dir = getDirection(e, e.currentTarget);
    setHoverDirection(dir);
    setIsHovered(false);
  };

  // Determine initial off-screen translate based on entry direction
  const getTransform = () => {
    if (isHovered) return 'translate(0, 0)';
    switch (hoverDirection) {
      case 'top':
        return 'translate(0, -100%)';
      case 'bottom':
        return 'translate(0, 100%)';
      case 'left':
        return 'translate(-100%, 0)';
      case 'right':
        return 'translate(100%, 0)';
      default:
        return 'translate(0, 100%)';
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, ease: [0.25, 0.8, 0.25, 1] }}
      sx={{ height: '100%' }}
    >
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderRadius: 0,
          border: '1.5px solid rgba(8, 1, 49, 0.08)',
          boxShadow: isHovered
            ? '0 16px 45px rgba(0, 44, 98, 0.18)'
            : '0 6px 20px rgba(8, 1, 49, 0.06)',
          pt: { xs: 3, md: 3.5 },
          pb: 3,
          px: 2.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'center',
          height: { xs: 370, md: 385 },
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered ? 'translateY(-4px)' : 'none',
        }}
      >
        {/* Normal Content: Enlarged circular image moved up, Name, and category */}
        <Box
          sx={{
            width: { xs: 175, sm: 190 },
            height: { xs: 175, sm: 190 },
            borderRadius: '50%',
            overflow: 'hidden',
            mb: 2,
            border: '3px solid #faf6ef',
            boxShadow: '0 8px 22px rgba(8, 1, 49, 0.12)',
            backgroundColor: '#faf6ef',
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            src={story.image}
            alt={story.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              display: 'block',
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#080131',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.3,
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            mb: 0.5,
          }}
        >
          {story.name}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            color: '#002c62',
            fontWeight: 600,
            fontSize: '0.92rem',
            lineHeight: 1.35,
          }}
        >
          {story.category}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: '#666666',
            fontWeight: 500,
            fontSize: '0.8rem',
            display: 'block',
            mt: 0.3,
            lineHeight: 1.3,
          }}
        >
          {story.badge}
        </Typography>

        {/* Direction-Aware Hover Overlay (#002c62 sliding in from top/right/bottom/left like Flagship Initiatives) */}
        <Box
          className="hover-overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#002c62',
            transform: getTransform(),
            transition: 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: { xs: 3, sm: 3.5 },
            pointerEvents: isHovered ? 'auto' : 'none',
            borderRadius: 0,
            textAlign: 'left',
          }}
        >
          <Box
            className="hover-content"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s',
            }}
          >
            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 1.2,
                opacity: 0.9,
              }}
            >
              {story.category}
            </Typography>

            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: { xs: '1.2rem', md: '1.35rem' },
                lineHeight: 1.3,
                mb: 1.5,
              }}
            >
              {story.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#FFFFFF',
                opacity: 0.95,
                lineHeight: 1.65,
                fontSize: { xs: '0.82rem', sm: '0.85rem' },
              }}
            >
              {story.story}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
