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
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3.5,
              width: '100%',
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
                  borderRadius: 0,
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
              backgroundColor: '#002c62',
              color: '#FFFFFF',
              borderRadius: 0,
              p: { xs: 3.5, sm: 5, md: 6 },
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 12px 36px rgba(0, 44, 98, 0.25)',
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: '#FFFFFF',
                  mb: 1.5,
                  fontSize: { xs: '1.8rem', md: '2.3rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Share Your Anbu Journey
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.75,
                  maxWidth: 780,
                  mx: 'auto',
                  fontSize: { xs: '0.95rem', md: '1.02rem' },
                }}
              >
                Are you an Anbu Foundation scholarship recipient or volunteer? Submit your journey to inspire the next generation of students.
              </Typography>
            </Box>

            {formSubmitted ? (
              <Box
                sx={{
                  p: 4,
                  backgroundColor: '#faf6ef',
                  color: '#002c62',
                  borderRadius: 0,
                  textAlign: 'center',
                  border: '1.5px solid rgba(8, 1, 49, 0.1)',
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 50, color: '#002c62', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#002c62', mb: 1 }}>
                  Thank You for Sharing!
                </Typography>
                <Typography variant="body2" sx={{ color: '#333333' }}>
                  Your submission has been received by our editorial team. It will be verified and published following review.
                </Typography>
              </Box>
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  flexWrap: { xs: 'nowrap', md: 'wrap', lg: 'nowrap' },
                  gap: 2,
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  inputProps={{ 'aria-label': 'Full Name' }}
                  sx={{
                    flex: { lg: 1, md: '1 1 45%' },
                    backgroundColor: '#faf6ef',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-root': {
                      height: 52,
                      borderRadius: 0,
                      backgroundColor: '#faf6ef',
                      '& fieldset': {
                        borderColor: 'rgba(8, 1, 49, 0.15)',
                        borderRadius: 0,
                      },
                      '&:hover fieldset': {
                        borderColor: '#002c62',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#002c62',
                        borderWidth: '1.5px',
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#080131',
                      fontWeight: 500,
                      fontSize: '0.92rem',
                      '&::placeholder': {
                        color: '#555555',
                        opacity: 0.9,
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Email Address *"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  inputProps={{ 'aria-label': 'Email Address' }}
                  sx={{
                    flex: { lg: 1, md: '1 1 45%' },
                    backgroundColor: '#faf6ef',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-root': {
                      height: 52,
                      borderRadius: 0,
                      backgroundColor: '#faf6ef',
                      '& fieldset': {
                        borderColor: 'rgba(8, 1, 49, 0.15)',
                        borderRadius: 0,
                      },
                      '&:hover fieldset': {
                        borderColor: '#002c62',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#002c62',
                        borderWidth: '1.5px',
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#080131',
                      fontWeight: 500,
                      fontSize: '0.92rem',
                      '&::placeholder': {
                        color: '#555555',
                        opacity: 0.9,
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Program / Cohort / Initiative"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  inputProps={{ 'aria-label': 'Program or Initiative' }}
                  sx={{
                    flex: { lg: 1, md: '1 1 45%' },
                    backgroundColor: '#faf6ef',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-root': {
                      height: 52,
                      borderRadius: 0,
                      backgroundColor: '#faf6ef',
                      '& fieldset': {
                        borderColor: 'rgba(8, 1, 49, 0.15)',
                        borderRadius: 0,
                      },
                      '&:hover fieldset': {
                        borderColor: '#002c62',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#002c62',
                        borderWidth: '1.5px',
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#080131',
                      fontWeight: 500,
                      fontSize: '0.92rem',
                      '&::placeholder': {
                        color: '#555555',
                        opacity: 0.9,
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Your Journey & Experience..."
                  required
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  inputProps={{ 'aria-label': 'Your Journey & Experience' }}
                  sx={{
                    flex: { lg: 1, md: '1 1 45%' },
                    backgroundColor: '#faf6ef',
                    borderRadius: 0,
                    '& .MuiOutlinedInput-root': {
                      height: 52,
                      borderRadius: 0,
                      backgroundColor: '#faf6ef',
                      '& fieldset': {
                        borderColor: 'rgba(8, 1, 49, 0.15)',
                        borderRadius: 0,
                      },
                      '&:hover fieldset': {
                        borderColor: '#002c62',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#002c62',
                        borderWidth: '1.5px',
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      color: '#080131',
                      fontWeight: 500,
                      fontSize: '0.92rem',
                      '&::placeholder': {
                        color: '#555555',
                        opacity: 0.9,
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  endIcon={<SendIcon sx={{ color: '#002c62', fontSize: '1.15rem' }} />}
                  sx={{
                    flex: { lg: '0 0 auto', md: '1 1 100%' },
                    height: 52,
                    backgroundColor: '#faf6ef',
                    color: '#002c62',
                    px: 3.5,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: 0,
                    border: '1.5px solid #faf6ef',
                    whiteSpace: 'nowrap',
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: '#ede5d4',
                      borderColor: '#ede5d4',
                      color: '#002c62',
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  Submit Story for Review
                </Button>
              </Box>
            )}
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
