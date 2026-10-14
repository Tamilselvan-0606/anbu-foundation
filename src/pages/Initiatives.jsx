import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';

import { PageTransition } from '../components/PageTransition';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { initiativesData } from '../data/foundationData';

export const Initiatives = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Educational Support', 'Empowerment & Inclusion', 'Academic Enrichment', 'Community Engagement', 'Skill Development', 'Community Outreach'];

  const filteredInitiatives = selectedCategory === 'All'
    ? initiativesData
    : initiativesData.filter(item => item.category === selectedCategory);

  return (
    <PageTransition>
      {/* PAGE HERO (Background: #0a0a3a) */}
      <PageBanner
        title="Initiatives That Create Lasting Impact"
        subtitle="Discover structured institutional programs designed to encourage learning, foster technical capabilities, and drive compassionate community welfare."
        badge="Our Action Tracks"
        breadcrumbCurrent="Initiatives"
      />

      {/* SECTION 1: MAIN INITIATIVES WITH FILTERING (Background: #faf6ef) */}
      <Box
        sx={{
          backgroundColor: '#faf6ef',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <SectionHeading
            badge="Programs Portfolio"
            title="Comprehensive Community Programs"
            subtitle="Filter through our verified pillars to understand how each program operates and delivers real transformation."
            textColor="#080131"
          />

          {/* Category Filter Buttons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5, mb: 6 }}>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    backgroundColor: isSelected ? '#002c62' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#080131',
                    border: isSelected ? '2px solid #002c62' : '1px solid rgba(8, 1, 49, 0.2)',
                    px: 2.5,
                    py: 1,
                    borderRadius: '25px',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.88rem',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: isSelected ? '#002c62' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : '#080131',
                      borderColor: isSelected ? '#002c62' : 'rgba(8, 1, 49, 0.35)',
                      boxShadow: 'none',
                      transform: 'none',
                    },
                  }}
                >
                  {cat}
                </Button>
              );
            })}
          </Box>

          {/* Initiatives Responsive Grid - 3 cards per row */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {filteredInitiatives.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#080131',
                  borderRadius: '16px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 36px rgba(8, 1, 49, 0.12)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="230"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      color: '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 0.95)',
                      pointerEvents: 'none',
                    }}
                  >
                    {item.category}
                  </Typography>
                </Box>

                <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: '#080131', mb: 1.5 }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75, mb: 3 }}>
                    {item.shortDesc}
                  </Typography>

                  <Box sx={{ mb: 3, p: 2, backgroundColor: '#002c62', borderRadius: '8px', border: '1.5px solid rgba(8, 1, 49, 0.08)' }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#FFFFFF', display: 'block', mb: 0.5, textTransform: 'uppercase' }}>
                      Beneficiary Focus
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.95, fontSize: '0.85rem' }}>
                      {item.beneficiaries}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(8, 1, 49, 0.08)' }}>
                    <Box
                      component="span"
                      onClick={() => navigate('/admission')}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#002c62',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'gap 0.2s ease',
                        '&:hover': {
                          gap: 1.5,
                        },
                      }}
                    >
                      <span>Apply / Participate</span>
                      <ArrowForwardIcon sx={{ fontSize: '1.15rem' }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 2: PROGRAM DETAILS & ACCORDION (Background: #f4f4f2) */}
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
            badge="In-Depth Implementation"
            title="Operational Details & Core Activities"
            subtitle="Expand each initiative to review objectives, active methodologies, and verified outcomes."
            textColor="#080131"
          />

          <Box
            sx={{
              mt: 5,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
              alignItems: 'start',
            }}
          >
            {initiativesData.map((item) => (
              <Accordion
                key={item.id}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#080131',
                  borderRadius: '12px !important',
                  m: '0 !important',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
                  '&:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#080131' }} />}
                  sx={{ p: { xs: 2, sm: 3 } }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '8px',
                        backgroundColor: '#002c62',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.5px solid rgba(8, 1, 49, 0.08)',
                      }}
                    >
                      <CheckCircleIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#080131', fontSize: { xs: '1rem', md: '1.15rem' } }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666666' }}>
                        {item.category}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ px: { xs: 2.5, sm: 4 }, pb: 4, pt: 1, borderTop: '1px solid rgba(8, 1, 49, 0.08)' }}>
                  <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.75, mb: 3 }}>
                    {item.fullDesc}
                  </Typography>

                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#080131', mb: 1.5 }}>
                    Key Operational Activities:
                  </Typography>

                  <Grid container spacing={2}>
                    {item.activities.map((act, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 1.5, backgroundColor: '#002c62', borderRadius: '8px' }}>
                          <CheckCircleIcon sx={{ color: '#FFFFFF', fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.95 }}>
                            {act}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 3: GET INVOLVED (Background: #faf6ef) */}
      <Box
        sx={{
          backgroundColor: '#faf6ef',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#080131',
              borderRadius: '24px',
              p: { xs: 4, md: 7 },
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '14px',
                backgroundColor: '#002c62',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2.5,
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
              }}
            >
              <GroupsIcon sx={{ color: '#FFFFFF', fontSize: 32 }} />
            </Box>

            <Typography variant="h2" sx={{ fontWeight: 600, fontSize: { xs: '2rem', md: '3rem' }, color: '#080131', mb: 2 }}>
              Get Involved with Anbu Initiatives
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#333333',
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                maxWidth: 720,
                mx: 'auto',
                lineHeight: 1.75,
                mb: 4.5,
              }}
            >
              Are you passionate about volunteering your academic skills, adopting a government school classroom, or partnering with our rural vocational drives? Connect with our project leads today.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2.5 }}>
              <Button
                size="large"
                onClick={() => navigate('/contact')}
                endIcon={<ArrowForwardIcon sx={{ color: '#FFFFFF' }} />}
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  px: 4.5,
                  py: 1.5,
                  fontSize: '1rem',
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
                Volunteer or Partner With Us
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
