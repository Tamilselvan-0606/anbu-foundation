import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExploreIcon from '@mui/icons-material/Explore';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { InitiativeCard } from '../components/InitiativeCard';
import { SuccessStoryCard } from '../components/SuccessStoryCard';
import { AnnouncementCard } from '../components/AnnouncementCard';
import {
  foundationData,
  initiativesData,
  successStoriesData,
  announcementsData,
} from '../data/foundationData';

export const Home = () => {
  const navigate = useNavigate();

  // Typewriter effect for "Transforming Futures."
  const fullText = 'Transforming Futures.';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      if (!isDeleting) {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
          timer = setTimeout(type, 90);
        } else {
          // Pause at full word before deleting
          timer = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2400);
        }
      } else {
        if (index > 0) {
          index--;
          setTypedText(fullText.slice(0, index));
          timer = setTimeout(type, 50);
        } else {
          // Pause before restarting
          isDeleting = false;
          timer = setTimeout(type, 600);
        }
      }
    };

    // Initial delay so "Empowering Young Minds." reveals first
    const initialDelay = setTimeout(() => {
      type();
    }, 600);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timer);
    };
  }, []);

  return (
    <PageTransition>
      {/* SECTION 1: HERO BANNER with Campus Background */}
      <Box
        sx={{
          color: '#080131',
          minHeight: { xs: '85vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.12)',
        }}
      >
        {/* Full Campus Background Image with BNR-Style Ken Burns slow zoom */}
        <Box
          component="img"
          className="animate-ken-burns"
          src="/images/image-15 copy.jpg"
          alt="Campus Background"
          sx={{
            position: 'absolute',
            inset: '-5%',
            width: '110%',
            height: '110%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            transformOrigin: 'center center',
          }}
        />

        {/* Balanced gradient overlay to let the photo shine vividly while keeping text effortlessly readable */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(244, 244, 242, 0.75) 0%, rgba(244, 244, 242, 0.55) 45%, rgba(244, 244, 242, 0.25) 78%, rgba(244, 244, 242, 0.08) 100%)',
            zIndex: 1,
          }}
        />
        {/* Subtle geometric floating shapes in approved colors */}
        <Box
          component={motion.div}
          animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: { xs: 140, md: 260 },
            height: { xs: 140, md: 260 },
            borderRadius: '50%',
            backgroundColor: '#002c62',
            opacity: 0.1,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <Box
          component={motion.div}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          sx={{
            position: 'absolute',
            bottom: '8%',
            left: '3%',
            width: { xs: 100, md: 180 },
            height: { xs: 100, md: 180 },
            borderRadius: '24px',
            backgroundColor: '#002c62',
            opacity: 0.08,
            pointerEvents: 'none',
            transform: 'rotate(25deg)',
            zIndex: 1,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 5, lg: 6 },
              width: '100%',
            }}
          >
            {/* Left Column: Hero Content */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', lg: '0 0 58%' },
                maxWidth: { xs: '100%', lg: '58%' },
                width: '100%',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Institutional Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.2,
                    backgroundColor: '#002c62',
                    color: '#FFFFFF',
                    px: 2.2,
                    py: 0.8,
                    borderRadius: '30px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    mb: 3,
                    border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  }}
                >
                  <SchoolIcon sx={{ color: '#FFFFFF', fontSize: 18 }} />
                  Anbu Foundation
                </Box>

                {/* Hero Headline with Animated Staggered Lines */}
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.4rem' },
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    color: '#080131',
                    mb: 2.5,
                    textShadow: '0 2px 12px rgba(255, 255, 255, 0.9), 0 1px 3px rgba(255, 255, 255, 1)',
                  }}
                >
                  <Box
                    component={motion.span}
                    sx={{ display: 'block', overflow: 'hidden' }}
                  >
                    <Box
                      component={motion.span}
                      sx={{ display: 'inline-block' }}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.15,
                      }}
                    >
                      Empowering Young Minds.
                    </Box>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      display: 'block',
                      mt: 0.5,
                      minHeight: { xs: '2.5rem', sm: '3.2rem', md: '3.8rem' },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        color: '#002c62',
                        fontWeight: 700,
                        textShadow: '0 2px 12px rgba(255, 255, 255, 0.9), 0 1px 3px rgba(255, 255, 255, 1)',
                      }}
                    >
                      {typedText}
                    </Box>
                  </Box>
                </Typography>

                {/* Hero Description */}
                <Typography
                  variant="body1"
                  component={motion.p}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  sx={{
                    fontSize: { xs: '0.98rem', md: '1.08rem' },
                    lineHeight: 1.75,
                    color: '#080131',
                    fontWeight: 600,
                    maxWidth: 620,
                    mb: 3.5,
                    textShadow: '0 1px 10px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(255, 255, 255, 1)',
                  }}
                >
                  {foundationData.motto} Anbu Foundation is committed to nurturing talent, creating higher education opportunities, and empowering students to build a brighter, more inclusive tomorrow.
                </Typography>

                {/* CTA Buttons */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}
                >
                  <Button
                    size="large"
                    onClick={() => navigate('/initiatives')}
                    endIcon={<ArrowForwardIcon sx={{ color: '#FFFFFF' }} />}
                    sx={{
                      backgroundColor: '#002c62',
                      color: '#FFFFFF',
                      px: 3.5,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: '8px',
                      border: '1.5px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 24px rgba(8, 1, 49, 0.15)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': {
                        backgroundColor: '#002c62',
                        borderColor: '#FFFFFF',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 30px rgba(0, 44, 98, 0.4)',
                      },
                    }}
                  >
                    Explore Our Initiatives
                  </Button>

                  <Button
                    size="large"
                    variant="outlined"
                    onClick={() => navigate('/success-stories')}
                    endIcon={<ExploreIcon sx={{ color: '#FFFFFF' }} />}
                    sx={{
                      backgroundColor: '#002c62',
                      color: '#FFFFFF',
                      border: '1.5px solid #002c62',
                      px: 3.5,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      borderRadius: '8px',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': {
                        backgroundColor: '#002c62',
                        border: '1.5px solid #002c62',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 30px rgba(0, 44, 98, 0.3)',
                      },
                    }}
                  >
                    Discover Our Impact
                  </Button>
                </Box>
              </motion.div>
            </Box>

            {/* Right Column: Hero Visual Card in #FFFFFF */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', lg: '0 0 38%' },
                maxWidth: { xs: '100%', lg: '38%' },
                width: '100%',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <Card
                  sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderRadius: '20px',
                    border: '1px solid rgba(8, 1, 49, 0.08)',
                    boxShadow: '0 16px 45px rgba(8, 1, 49, 0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box
                      sx={{
                        backgroundColor: '#002c62',
                        borderRadius: '10px',
                        p: 2,
                        mb: 3,
                        border: '1px solid rgba(8, 1, 49, 0.08)',
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#FFFFFF', fontStyle: 'italic', textAlign: 'center' }}>
                        {foundationData.quote}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#000000', mb: 1.5 }}>
                      Answering the Unanswered Since 2006
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333333', opacity: 0.9, lineHeight: 1.75, mb: 3 }}>
                      Founded on values of compassionate leadership and equity, Anbu Foundation unites higher education resources with grassroots social responsibility across Tamil Nadu.
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box sx={{ backgroundColor: '#002c62', p: 1.5, borderRadius: '8px', textAlign: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFFFFF' }}>
                            18+
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                            Years of Dedicated Service
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ backgroundColor: '#002c62', p: 1.5, borderRadius: '8px', textAlign: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFFFFF' }}>
                            100%
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#FFFFFF', opacity: 0.9 }}>
                            Free & Merit-Based Aid
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECTION 2: INTRODUCTION (Background: #faf6ef) */}
      <Box
        sx={{
          backgroundColor: '#faf6ef',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 5, md: 6, lg: 8 },
            }}
          >
            {/* Left Column: Text & Content (52% width on desktop) */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
              sx={{
                flex: { xs: '1 1 100%', md: '0 0 52%', lg: '0 0 54%' },
                maxWidth: { xs: '100%', md: '54%' },
              }}
            >
              <Box
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
                  mb: 2.5,
                  boxShadow: '0 4px 14px rgba(138, 133, 214, 0.25)',
                }}
              >
                About Our Foundation
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.85rem', sm: '2.2rem', md: '2.5rem' },
                  color: '#080131',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  mb: 2.5,
                }}
              >
                A Foundation Built on Care, Opportunity, and Growth
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#080131',
                  opacity: 0.9,
                  lineHeight: 1.75,
                  fontSize: { xs: '0.92rem', md: '0.98rem' },
                  mb: 2.5,
                  fontWeight: 400,
                }}
              >
                {foundationData.aboutExcerpt}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#080131',
                  opacity: 0.9,
                  lineHeight: 1.75,
                  fontSize: { xs: '0.92rem', md: '0.98rem' },
                  mb: 4,
                }}
              >
                Through tailored scholarship schemes, inclusive infrastructure for visually impaired scholars, rural village adoption, and practical vocational training, the foundation creates pathways where students overcome financial constraints to lead purposeful careers.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  size="large"
                  onClick={() => navigate('/about')}
                  endIcon={<ArrowForwardIcon sx={{ color: '#FFFFFF' }} />}
                  sx={{
                    backgroundColor: '#002c62',
                    color: '#FFFFFF',
                    px: 3.5,
                    py: 1.3,
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    boxShadow: '0 6px 20px rgba(138, 133, 214, 0.35)',
                    '&:hover': {
                      backgroundColor: '#002c62',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Learn More About Us
                </Button>

                <Button
                  size="large"
                  onClick={() => navigate('/initiatives')}
                  sx={{
                    backgroundColor: 'transparent',
                    color: '#080131',
                    border: '1.5px solid #080131',
                    px: 3.2,
                    py: 1.3,
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(8, 1, 49, 0.06)',
                      border: '1.5px solid #080131',
                      color: '#080131',
                    },
                  }}
                >
                  View Initiatives
                </Button>
              </Box>
            </Box>

            {/* Right Column: Meaningful Image next to text with smooth scroll reveal and hover zoom */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
              sx={{
                flex: { xs: '1 1 100%', md: '0 0 44%', lg: '0 0 42%' },
                maxWidth: { xs: '100%', md: '44%' },
                width: '100%',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 0,
                  boxShadow: '0 20px 45px rgba(8, 1, 49, 0.16)',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src="/images/image-13.jpg"
                  alt="A Foundation Built on Care, Opportunity, and Growth"
                  sx={{
                    width: '100%',
                    height: { xs: 320, sm: 380, md: 440 },
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECTION 3: OUR INITIATIVES (Background: #f4f4f2) */}
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
            badge="Programs & Support"
            title="Our Flagship Initiatives"
            subtitle="Verified educational and developmental initiatives fostering academic excellence, skill independence, and community care."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: { xs: 3, md: 4 },
              width: '100%',
            }}
          >
            {initiativesData.slice(0, 6).map((initiative) => (
              <Box key={initiative.id} sx={{ height: '100%' }}>
                <InitiativeCard initiative={initiative} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: OUR IMPACT (Background: #faf6ef) */}
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
            badge="Verified Milestones"
            title="Measurable Impact Grounded in Service"
            subtitle="Real commitments and verified institutional accomplishments driving generational educational upliftment."
            textColor="#080131"
            maxWidth={950}
            titleSx={{
              fontWeight: 600,
              fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.45rem' },
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              whiteSpace: { md: 'nowrap' },
            }}
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: { xs: 3, md: 3.5 },
            }}
          >
            {[
              {
                icon: <SchoolIcon sx={{ fontSize: 28, color: '#002c62' }} />,
                title: 'Higher Education Access',
                desc: 'Supporting deserving candidates with full or partial scholarships across arts, science, and technical streams.',
              },
              {
                icon: <VolunteerActivismIcon sx={{ fontSize: 28, color: '#002c62' }} />,
                title: 'Inclusive Learning Tracks',
                desc: 'Accessible computer terminals, Braille support, and scribe assistance for visually impaired students.',
              },
              {
                icon: <AutoStoriesIcon sx={{ fontSize: 28, color: '#002c62' }} />,
                title: 'Adopted Schools & Labs',
                desc: 'Equipping nearby government schools with modern STEM laboratories, libraries, and clean water units.',
              },
              {
                icon: <GroupsIcon sx={{ fontSize: 28, color: '#002c62' }} />,
                title: 'Women Skill Certification',
                desc: 'Free accredited Diploma courses in Cosmetology and vocational trades equipping women for economic independence.',
              },
            ].map((stat, idx) => (
              <Box
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.8, 0.25, 1] }}
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  p: { xs: 3, md: 3.5 },
                  border: '1.5px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 30px rgba(0, 44, 98, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 45px rgba(0, 44, 98, 0.35)',
                    borderColor: 'rgba(255, 255, 255, 0.35)',
                    '& .accent-bar': {
                      backgroundColor: '#f4f4f2',
                    },
                  },
                }}
              >
                {/* Subtle top indicator bar */}
                <Box
                  className="accent-bar"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.35)',
                    transition: 'background-color 0.3s ease',
                  }}
                />

                {/* Round shape icon container with ivory background */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: '#f4f4f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {stat.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#FFFFF0',
                    mb: 1.5,
                    fontSize: { xs: '1.1rem', md: '1.15rem' },
                    lineHeight: 1.35,
                  }}
                >
                  {stat.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#f4f4f2',
                    opacity: 0.9,
                    lineHeight: 1.75,
                    fontSize: '0.88rem',
                    flexGrow: 1,
                  }}
                >
                  {stat.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 5: SUCCESS STORIES PREVIEW (Background: #f4f4f2) */}
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
            badge="Inspiring Journeys"
            title="Voices of Transformation"
            subtitle="Explore how access to compassionate education and mentorship turns student aspirations into tangible achievements."
            textColor="#080131"
          />

          <TableContainer
            component={motion.div}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.25, 0.8, 0.25, 1] }}
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 16px 40px rgba(8, 1, 49, 0.08)',
              overflowX: 'auto',
            }}
          >
            <Table sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#002c62', borderBottom: '2px solid rgba(255, 255, 255, 0.2)' }}>
                  <TableCell
                    align="left"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      py: 2.2,
                      px: 3,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    Student / Scholar
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      py: 2.2,
                      px: 3,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    Initiative
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      py: 2.2,
                      px: 3,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      borderRight: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    Achievement & Outcome
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      py: 2.2,
                      px: 3,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Key Testimonial
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {successStoriesData.slice(0, 4).map((story, idx) => (
                  <TableRow
                    key={story.id}
                    sx={{
                      borderBottom: idx === 3 ? 'none' : '1px solid rgba(8, 1, 49, 0.08)',
                      transition: 'background-color 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(138, 133, 214, 0.06)',
                      },
                    }}
                  >
                    <TableCell
                      align="left"
                      sx={{
                        py: 2.5,
                        px: 3,
                        verticalAlign: 'middle',
                        borderRight: '1px solid rgba(8, 1, 49, 0.08)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2 }}>
                        <Avatar
                          src={story.image}
                          alt={story.name}
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            border: '2px solid #002c62',
                          }}
                        />
                        <Typography sx={{ fontWeight: 700, color: '#000000', fontSize: '1rem', lineHeight: 1.3 }}>
                          {story.name}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell
                      align="left"
                      sx={{
                        py: 2.5,
                        px: 3,
                        verticalAlign: 'middle',
                        borderRight: '1px solid rgba(8, 1, 49, 0.08)',
                      }}
                    >
                      <Typography sx={{ color: '#080131', fontSize: '0.92rem', fontWeight: 600 }}>
                        {story.category}
                      </Typography>
                      <Typography sx={{ color: '#666666', fontSize: '0.78rem', mt: 0.3 }}>
                        {story.verifiedDate}
                      </Typography>
                    </TableCell>

                    <TableCell
                      align="left"
                      sx={{
                        py: 2.5,
                        px: 3,
                        verticalAlign: 'middle',
                        maxWidth: 300,
                        borderRight: '1px solid rgba(8, 1, 49, 0.08)',
                      }}
                    >
                      <Typography sx={{ color: '#000000', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 500 }}>
                        {story.achievement}
                      </Typography>
                    </TableCell>

                    <TableCell
                      align="left"
                      sx={{
                        py: 2.5,
                        px: 3,
                        verticalAlign: 'middle',
                      }}
                    >
                      <Typography
                        sx={{
                          color: '#444444',
                          fontSize: '0.78rem',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: 1.5,
                        }}
                      >
                        "{story.quote}"
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              size="large"
              onClick={() => navigate('/success-stories')}
              endIcon={<ArrowForwardIcon sx={{ color: '#FFFFFF' }} />}
              sx={{
                backgroundColor: '#002c62',
                color: '#FFFFFF',
                px: 4,
                py: 1.4,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '8px',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: '#002c62',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Read More Student Journeys
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SECTION 6: LATEST ANNOUNCEMENTS (Background: #faf6ef) */}
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
            badge="Updates & Notices"
            title="Latest Announcements & News"
            subtitle="Keep track of recent application windows, campus volunteer drives, and foundation outreach events."
            textColor="#080131"
          />

          {/* Auto-scrolling Carousel Container */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              py: 2,
              '&:hover .carousel-track': {
                animationPlayState: 'paused',
              },
            }}
          >
            {/* Soft edge fade masks for high-end look */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: { xs: 40, md: 80 },
                background: 'linear-gradient(to right, #f4f4f2 0%, rgba(244,244,242,0) 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                width: { xs: 40, md: 80 },
                background: 'linear-gradient(to left, #f4f4f2 0%, rgba(244,244,242,0) 100%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Scrolling Track */}
            <Box
              className="carousel-track"
              sx={{
                display: 'flex',
                gap: 3,
                width: 'max-content',
                animation: 'infiniteScroll 24s linear infinite',
                '@keyframes infiniteScroll': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
              }}
            >
              {[...announcementsData, ...announcementsData].map((ann, idx) => (
                <Box
                  key={`${ann.id}-${idx}`}
                  onClick={() => navigate(`/announcements/${ann.id}`)}
                  sx={{
                    flexShrink: 0,
                    width: { xs: 260, sm: 300, md: 340 },
                    backgroundColor: '#FFFFFF',
                    p: 1.5,
                    border: '1.5px solid rgba(8, 1, 49, 0.08)',
                    boxShadow: '0 4px 18px rgba(8, 1, 49, 0.05)',
                    cursor: 'pointer',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 14px 32px rgba(0, 44, 98, 0.15)',
                      borderColor: 'rgba(0, 44, 98, 0.3)',
                      '& img': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 180, sm: 200, md: 220 },
                      overflow: 'hidden',
                      backgroundColor: '#faf6ef',
                      border: '1px solid rgba(8, 1, 49, 0.08)',
                    }}
                  >
                    <Box
                      component="img"
                      src={ann.image}
                      alt={ann.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              size="large"
              onClick={() => navigate('/announcements')}
              endIcon={<ArrowForwardIcon sx={{ color: '#FFFFFF' }} />}
              sx={{
                backgroundColor: '#002c62',
                color: '#FFFFFF',
                px: 4,
                py: 1.4,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '8px',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: '#002c62',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Browse All Announcements
            </Button>
          </Box>
        </Container>
      </Box>

    </PageTransition>
  );
};
