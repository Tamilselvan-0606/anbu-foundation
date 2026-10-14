import React, { useState } from 'react';
import { Card, Typography, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SuccessStoryCard = ({ story }) => {
  const navigate = useNavigate();
  const [hoverDirection, setHoverDirection] = useState('bottom');
  const [isHovered, setIsHovered] = useState(false);

  const getDirection = (e, item) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
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
          borderRadius: '16px',
          overflow: 'hidden',
          height: 380,
          boxShadow: isHovered ? '0 16px 45px rgba(8, 1, 49, 0.16)' : '0 8px 30px rgba(8, 1, 49, 0.08)',
          border: '1.5px solid rgba(8, 1, 49, 0.08)',
          cursor: 'pointer',
          transform: isHovered ? 'translateY(-5px)' : 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={() => navigate(`/success-stories#${story.id}`)}
      >
        {/* 1. Full Image Background */}
        <Box
          className="card-bg-image"
          component="img"
          src={story.image}
          alt={story.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
          }}
        />

        {/* 2. Default Subtle Gradient & Initial View */}
        <Box
          className="initial-card-view"
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(8, 1, 49, 0.55) 0%, rgba(8, 1, 49, 0) 35%, rgba(8, 1, 49, 0.75) 100%)',
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Box
              sx={{
                backgroundColor: '#002c62',
                color: '#FFFFFF',
                px: 1.5,
                py: 0.5,
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
              }}
            >
              {story.badge}
            </Box>

            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                px: 1.2,
                py: 0.4,
                borderRadius: '6px',
              }}
            >
              {story.category}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: { xs: '1.25rem', md: '1.4rem' },
                lineHeight: 1.3,
                textShadow: '0 2px 10px rgba(0,0,0,0.85)',
                mb: 0.5,
              }}
            >
              {story.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.82rem',
                fontWeight: 500,
                display: 'block',
                textShadow: '0 1px 6px rgba(0,0,0,0.8)',
              }}
            >
              {story.achievement}
            </Typography>
          </Box>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
              <Typography
                sx={{
                color: '#FFFFFF',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                opacity: 0.9,
              }}
            >
                {story.category} • {story.verifiedDate}
              </Typography>
              <FormatQuoteIcon sx={{ color: '#FFFFFF', opacity: 0.6, fontSize: 32 }} />
            </Box>

            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                lineHeight: 1.25,
                mb: 1,
              }}
            >
              {story.name}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.95rem',
                lineHeight: 1.4,
                mb: 2,
                opacity: 0.95,
              }}
            >
              {story.achievement}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#FFFFFF',
                opacity: 0.95,
                lineHeight: 1.65,
                fontStyle: 'italic',
                fontSize: '0.92rem',
                mb: 3,
              }}
            >
              "{story.quote}"
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
              <span>Read Full Story</span>
              <ArrowForwardIcon sx={{ fontSize: 18, color: '#FFFFFF' }} />
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
