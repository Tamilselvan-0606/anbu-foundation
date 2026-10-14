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
  TextField,
  Alert,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { PageTransition } from '../components/PageTransition';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { SuccessStoryCard } from '../components/SuccessStoryCard';
import { successStoriesData } from '../data/foundationData';

export const SuccessStories = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    story: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.story) {
      setFormSubmitted(true);
    }
  };


  return (
    <PageTransition>
      {/* PAGE HERO (Background: #0a0a3a) */}
      <PageBanner
        title="Every Journey Has the Power to Inspire"
        subtitle="Explore the experiences, milestones, and breakthroughs of scholars and communities supported through Anbu Foundation."
        badge="Real Milestones"
        breadcrumbCurrent="Success Stories"
      />



      {/* SECTION 2: STORY GALLERY (Background: #f4f4f2) */}
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
            badge="Scholars & Community Voices"
            title="Stories of Impact Across Programs"
            subtitle="Browse milestones spanning higher education graduation, women self-help ventures, and rural school turnarounds."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {successStoriesData.map((story) => (
              <Box key={story.id} id={story.id}>
                <SuccessStoryCard story={story} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 3: IMPACT HIGHLIGHTS (Background: #faf6ef) */}
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
            badge="Verified Outcomes"
            title="Documented Institutional Milestones"
            subtitle="Authentic commitments tracked through our partner centers and academic reviews."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {[
              {
                stat: '100%',
                title: 'Free Educational Aid',
                desc: 'Tuition and learning support delivered without any hidden charges or processing fees for approved candidates.',
              },
              {
                stat: '18+',
                title: 'Years of Sustained Service',
                desc: 'Continuous community engagement and student sponsorship since the inception of the foundation in 2006.',
              },
              {
                stat: 'Direct',
                title: 'Faculty & Student Mentorship',
                desc: 'Connecting university professors and student volunteers directly with grassroots government schools.',
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#080131',
                  borderRadius: '16px',
                  p: { xs: 3, md: 4.5 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#002c62', mb: 1, fontSize: { xs: '2.4rem', md: '3rem' } }}>
                  {item.stat}
                </Typography>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: '#080131', mb: 1.5, fontSize: { xs: '1.2rem', md: '1.35rem' } }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75, fontSize: '0.92rem' }}>
                  {item.desc}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: SHARE YOUR STORY (Background: #f4f4f2) */}
      <Box
        sx={{
          backgroundColor: '#f4f4f2',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.12)',
        }}
      >
        <Container maxWidth="xl">
          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#080131',
              borderRadius: '24px',
              p: { xs: 4, sm: 6 },
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 600, color: '#080131', mb: 1.5, fontSize: { xs: '1.8rem', md: '2.3rem' } }}>
                Share Your Anbu Journey
              </Typography>
              <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.75 }}>
                Are you an Anbu Foundation scholarship recipient or volunteer? Submit your journey to inspire the next generation of students.
              </Typography>
            </Box>

            {formSubmitted ? (
              <Box sx={{ p: 4, backgroundColor: '#002c62', borderRadius: '12px', textAlign: 'center', border: '1.5px solid rgba(8, 1, 49, 0.08)' }}>
                <CheckCircleIcon sx={{ fontSize: 50, color: '#FFFFFF', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 1 }}>
                  Thank You for Sharing!
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                  Your submission has been received by our editorial team. It will be verified and published following review.
                </Typography>
              </Box>
            ) : (
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Ramanathan"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      label="Program / Cohort / Initiative"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      placeholder="e.g. Anbu Scholarship 2024"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField
                      fullWidth
                      label="Your Journey & Experience"
                      required
                      value={formData.story}
                      onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                      placeholder="Describe your journey..."
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                      type="submit"
                      size="large"
                      endIcon={<SendIcon sx={{ color: '#FFFFFF' }} />}
                      sx={{
                        backgroundColor: '#002c62',
                        color: '#FFFFFF',
                        px: 5,
                        py: 1.4,
                        fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(8, 1, 49, 0.08)',
                        '&:hover': {
                          backgroundColor: '#002c62',
                          color: '#FFFFFF',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      Submit Story for Review
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
