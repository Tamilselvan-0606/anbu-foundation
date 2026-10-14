import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { PageTransition } from '../components/PageTransition';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { AnnouncementCard } from '../components/AnnouncementCard';
import { announcementsData } from '../data/foundationData';

export const Announcements = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Scholarships', 'Volunteer', 'Vocational', 'Events'];

  const filteredAnnouncements = announcementsData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <PageTransition>
      {/* PAGE HERO (Background: #0a0a3a) */}
      <PageBanner
        title="News, Updates, and Opportunities"
        subtitle="Stay informed about Anbu Foundation activities, application schedules, volunteer programs, and institutional notices."
        badge="Official Bulletin"
        breadcrumbCurrent="Announcements"
      />



      {/* SECTION 2: ANNOUNCEMENTS LISTING (Background: #f4f4f2) */}
      <Box
        sx={{
          backgroundColor: '#f4f4f2',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.12)',
        }}
      >
        <Container maxWidth="xl">
          <SectionHeading
            badge="Current Bulletins"
            title="Active Foundation Notices"
            subtitle={`Showing ${filteredAnnouncements.length} verified updates and circulars.`}
            textColor="#080131"
          />

          {filteredAnnouncements.length === 0 ? (
            <Box
              sx={{
                p: 6,
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                textAlign: 'center',
                maxWidth: 600,
                mx: 'auto',
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 1.5 }}>
                No Announcements Found
              </Typography>
              <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.9, mb: 3 }}>
                We could not find any active notices matching your current search terms or category selection.
              </Typography>
              <Button
                onClick={handleReset}
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  border: '1px solid #FFFFFF',
                  '&:hover': { backgroundColor: '#002c62' },
                }}
              >
                Clear Search Query
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {filteredAnnouncements.map((ann) => (
                <Box key={ann.id}>
                  <AnnouncementCard announcement={ann} />
                </Box>
              ))}
            </Box>
          )}
        </Container>
      </Box>
    </PageTransition>
  );
};
