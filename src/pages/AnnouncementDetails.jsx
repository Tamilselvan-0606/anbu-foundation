import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useParams, useNavigate } from 'react-router-dom';

import { PageTransition } from '../components/PageTransition';
import { PageBanner } from '../components/PageBanner';
import { announcementsData } from '../data/foundationData';

export const AnnouncementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const announcement = announcementsData.find((item) => item.id === id) || announcementsData[0];

  return (
    <PageTransition>
      <PageBanner
        title={announcement.title}
        subtitle={`Official Announcement published on ${announcement.date}`}
        badge={announcement.category}
        breadcrumbCurrent="Announcement Details"
      />

      {/* SECTION 1: DETAILS BODY (Background: #faf6ef) */}
      <Box
        sx={{
          backgroundColor: '#faf6ef',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.1)',
        }}
      >
        <Container maxWidth="md">
          <Button
            onClick={() => navigate('/announcements')}
            startIcon={<ArrowBackIcon sx={{ color: '#FFFFFF' }} />}
            sx={{
              backgroundColor: '#002c62',
              color: '#FFFFFF',
              px: 2.5,
              py: 1,
              fontWeight: 600,
              mb: 4,
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              '&:hover': { backgroundColor: '#002c62' },
            }}
          >
            Back to All Announcements
          </Button>

          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#080131',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
            }}
          >
            {announcement.image && (
              <CardMedia
                component="img"
                height="340"
                image={announcement.image}
                alt={announcement.title}
                sx={{ objectFit: 'cover' }}
              />
            )}

            <CardContent sx={{ p: { xs: 3.5, sm: 5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <CalendarTodayIcon sx={{ fontSize: 18, color: '#002c62' }} />
                <Typography variant="caption" sx={{ fontWeight: 600, color: '#666666', fontSize: '0.9rem' }}>
                  Published Date: {announcement.date}
                </Typography>
              </Box>

              <Typography variant="h3" sx={{ fontWeight: 600, color: '#080131', mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.25 }}>
                {announcement.title}
              </Typography>

              <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
                {announcement.content}
              </Typography>

              {announcement.officialLink ? (
                <Box sx={{ pt: 3, borderTop: '1px solid rgba(8, 1, 49, 0.08)' }}>
                  <Button
                    component="a"
                    href={announcement.officialLink}
                    target="_blank"
                    rel="noreferrer"
                    endIcon={<OpenInNewIcon sx={{ color: '#FFFFFF' }} />}
                    sx={{
                      backgroundColor: '#002c62',
                      color: '#FFFFFF',
                      px: 3.5,
                      py: 1.4,
                      fontWeight: 700,
                      borderRadius: '8px',
                      border: '1.5px solid rgba(8, 1, 49, 0.08)',
                      '&:hover': {
                        backgroundColor: '#002c62',
                        color: '#FFFFFF',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Open Official Google Application Form
                  </Button>
                </Box>
              ) : (
                <Box sx={{ pt: 3, borderTop: '1px solid rgba(8, 1, 49, 0.08)' }}>
                  <Button
                    onClick={() => navigate('/contact')}
                    sx={{
                      backgroundColor: '#002c62',
                      color: '#FFFFFF',
                      px: 3.5,
                      py: 1.4,
                      fontWeight: 700,
                      borderRadius: '8px',
                      border: '1.5px solid rgba(8, 1, 49, 0.08)',
                      '&:hover': {
                        backgroundColor: '#002c62',
                        color: '#FFFFFF',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Contact Foundation Desk for Queries
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
