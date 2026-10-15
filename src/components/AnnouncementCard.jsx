import React from 'react';
import { Card, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AnnouncementCard = ({ announcement }) => {
  const navigate = useNavigate();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
      sx={{ height: '100%' }}
    >
      <Card
        sx={{
          backgroundColor: '#FFFFFF',
          borderRadius: 0,
          overflow: 'hidden',
          p: { xs: 1.25, sm: 1.5 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: '1.5px solid rgba(8, 1, 49, 0.08)',
          boxShadow: '0 4px 18px rgba(8, 1, 49, 0.05)',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 14px 32px rgba(0, 44, 98, 0.12)',
            borderColor: 'rgba(0, 44, 98, 0.25)',
          },
        }}
      >
        {/* Top: Poster / Image Container */}
        <Box
          sx={{
            width: '100%',
            height: { xs: 200, sm: 220, md: 190, lg: 205 },
            borderRadius: '4px',
            overflow: 'hidden',
            backgroundColor: '#faf6ef',
            border: '1px solid rgba(8, 1, 49, 0.08)',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => navigate(`/announcements/${announcement.id}`)}
        >
          {announcement.image && (
            <Box
              component="img"
              src={announcement.image}
              alt={announcement.title}
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '4px',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            />
          )}
        </Box>

        {/* Middle: Title Centered */}
        <Box
          sx={{
            mt: 2.5,
            mb: 2.5,
            textAlign: 'center',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 0.5,
            cursor: 'pointer',
          }}
          onClick={() => navigate(`/announcements/${announcement.id}`)}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 700,
              color: '#080131',
              fontSize: { xs: '1rem', md: '1.05rem', lg: '1.1rem' },
              lineHeight: 1.35,
              textAlign: 'center',
              transition: 'color 0.25s ease',
              '&:hover': {
                color: '#002c62',
              },
            }}
          >
            {announcement.title}
          </Typography>
        </Box>

        {/* Bottom: Read More Button Centered */}
        <Box sx={{ display: 'flex', justifyContent: 'center', pb: 0.5 }}>
          <Button
            onClick={() => navigate(`/announcements/${announcement.id}`)}
            sx={{
              backgroundColor: '#002c62',
              color: '#FFFFFF',
              px: 3.5,
              py: 1,
              fontSize: '0.92rem',
              fontWeight: 700,
              borderRadius: 0,
              textTransform: 'none',
              minWidth: 140,
              border: '1.5px solid #002c62',
              boxShadow: '0 3px 10px rgba(0, 44, 98, 0.2)',
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#080131',
                borderColor: '#080131',
                boxShadow: '0 5px 16px rgba(0, 44, 98, 0.3)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Read More
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
