import React, { useState } from 'react';
import { Card, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const InitiativeCard = ({ initiative }) => {
  const navigate = useNavigate();
  const [hoverDirection, setHoverDirection] = useState('bottom');
  const [isHovered, setIsHovered] = useState(false);

  // Direction-aware detection
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
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
      sx={{ height: '100%' }}
    >
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'relative',
          borderRadius: 0,
          overflow: 'hidden',
          height: 380,
          boxShadow: isHovered ? '0 16px 45px rgba(8, 1, 49, 0.16)' : '0 8px 30px rgba(8, 1, 49, 0.08)',
          border: '1.5px solid rgba(8, 1, 49, 0.08)',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-5px)' : 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={() => navigate(`/initiatives#${initiative.id}`)}
      >
      {/* 1. Full Image Background with BNR-Style Depth */}
      <Box
        className="card-bg-image"
        component="img"
        src={initiative.image}
        alt={initiative.title}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease',
        }}
      />

      {/* 2. Default Subtle Gradient & Initial Category Badge */}
      <Box
        className="initial-category"
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(8, 1, 49, 0.55) 0%, rgba(8, 1, 49, 0) 35%, rgba(8, 1, 49, 0.6) 100%)',
          p: 2.5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          opacity: isHovered ? 0 : 1,
          transform: isHovered ? 'translateY(-6px)' : 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            backgroundColor: '#002c62',
            alignSelf: 'flex-start',
            px: 1.5,
            py: 0.5,
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
          }}
        >
          {initiative.category}
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: { xs: '1.25rem', md: '1.4rem' },
            lineHeight: 1.3,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          {initiative.title}
        </Typography>
      </Box>

      {/* 3. Direction-aware Hover Overlay with #002c62 color sliding in from top/right/bottom/left */}
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
          p: { xs: 3, sm: 4 },
          pointerEvents: isHovered ? 'auto' : 'none',
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
              mb: 1.5,
              opacity: 0.9,
            }}
          >
            {initiative.category}
          </Typography>

          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              color: '#FFFFFF',
              fontSize: { xs: '1.3rem', md: '1.5rem' },
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            {initiative.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#FFFFFF',
              opacity: 0.95,
              lineHeight: 1.7,
              fontSize: '0.92rem',
              mb: 3,
            }}
          >
            {initiative.shortDesc}
          </Typography>

          <Box
            sx={{
              mt: 'auto',
              pt: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.96rem',
              width: 'fit-content',
            }}
          >
            <span>Explore More</span>
            <ArrowForwardIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
          </Box>
        </Box>
      </Box>
    </Card>
    </Box>
  );
};
