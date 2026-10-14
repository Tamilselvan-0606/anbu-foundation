import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

import { PageTransition } from '../components/PageTransition';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { foundationData } from '../data/foundationData';
import { motion } from 'framer-motion';

export const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* PAGE HERO (Background: #0a0a3a) */}
      <PageBanner
        title="About Anbu Foundation"
        subtitle="Learn about our purpose, institutional heritage at Sathyabama, and enduring commitment to empowering students through education and equity."
        badge="Our Heritage & Mission"
        breadcrumbCurrent="About Us"
      />

      {/* SECTION 1: OUR STORY (Background: #faf6ef) */}
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
              gap: { xs: 5, md: 6 },
              width: '100%',
            }}
          >
            <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 54%", lg: "0 0 55%" }, width: "100%" }}>
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
                  mb: 2,
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                }}
              >
                Inception & Legacy
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' },
                  color: '#080131',
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Our Story: From a Bud of Compassion to a Garden of Hope
              </Typography>

              <Typography variant="body1" sx={{ color: '#080131', opacity: 0.95, lineHeight: 1.75, mb: 2.5 }}>
                Anbu Foundation was started with a heartfelt philosophy: to bring back happiness to the lives of people who are striving to live life to the fullest. Inherited from the philanthropic ideals of parents, the first bud sprouted in 2006, and has now flourished into a vibrant sanctuary of learning and human empowerment.
              </Typography>

              <Typography variant="body1" sx={{ color: '#080131', opacity: 0.95, lineHeight: 1.75, mb: 2.5 }}>
                Rooted within Sathyabama Institute of Science and Technology, the foundation operates under the principle of "Answering the Unanswered" — proactively identifying systemic gaps where deserving minds are held back solely by socio-economic challenges.
              </Typography>

              <Typography variant="body1" sx={{ color: '#080131', opacity: 0.92, lineHeight: 1.75 }}>
                By establishing robust partnerships with community leaders, government schools, and specialized welfare trusts, Anbu Foundation provides transparency, dignity, and sustainable educational upliftment across generations.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
              sx={{ flex: { xs: "1 1 100%", md: "0 0 42%", lg: "0 0 40%" }, width: "100%" }}
            >
              <Card
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 16px 40px rgba(8, 1, 49, 0.12)',
                }}
              >
                <Box sx={{ height: 320, overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                    alt="University Academic Mentorship"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#000000', mb: 1 }}>
                    18 Years of Transformative Service
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75 }}>
                    "Anbu Scholarship is more than financial aid; it is a beacon of hope for students who dare to dream beyond their circumstances."
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECTION 2: VISION AND MISSION (Background: #f4f4f2) */}
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
            badge="Guiding Principles"
            title="Vision & Mission"
            subtitle="The strategic North Star defining every initiative, scholarship grant, and community outreach program."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'stretch',
              gap: 4,
              width: '100%',
            }}
          >
            {/* Vision Card */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
              sx={{ flex: 1, minWidth: 0, display: 'flex' }}
            >
              <Card
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '18px',
                  p: { xs: 3.5, md: 5 },
                  width: '100%',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 14px 38px rgba(8, 1, 49, 0.14)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '14px',
                    backgroundColor: '#002c62',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <VisibilityIcon sx={{ color: '#FFFFFF', fontSize: 32 }} />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 600, color: '#000000', mb: 2 }}>
                  Our Vision
                </Typography>

                <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  {foundationData.vision}
                </Typography>
              </Card>
            </Box>

            {/* Mission Card */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
              sx={{ flex: 1, minWidth: 0, display: 'flex' }}
            >
              <Card
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '18px',
                  p: { xs: 3.5, md: 5 },
                  width: '100%',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 14px 38px rgba(8, 1, 49, 0.14)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '14px',
                    backgroundColor: '#002c62',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <TrackChangesIcon sx={{ color: '#FFFFFF', fontSize: 32 }} />
                </Box>

                <Typography variant="h4" sx={{ fontWeight: 600, color: '#000000', mb: 2 }}>
                  Our Mission
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                  {foundationData.mission.map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: '#002c62',
                          mt: 1.1,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75, fontSize: '0.96rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SECTION 3: OUR CORE VALUES (Background: #faf6ef) */}
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
            badge="Ethical Pillars"
            title="Our Core Values"
            subtitle="The enduring virtues guiding how we interact with scholars, volunteers, and rural communities."
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
            {[
              {
                icon: <VolunteerActivismIcon sx={{ fontSize: 34, color: '#FFFFFF' }} />,
                title: 'Compassion (Anbu)',
                desc: 'Rooting every institutional decision in genuine care, understanding, and personal empathy for student struggles.',
              },
              {
                icon: <Diversity3Icon sx={{ fontSize: 34, color: '#FFFFFF' }} />,
                title: 'Inclusive Dignity',
                desc: 'Championing accessible environments where visually challenged learners and acid attack survivors study with unconditional pride.',
              },
              {
                icon: <EmojiObjectsIcon sx={{ fontSize: 34, color: '#FFFFFF' }} />,
                title: 'Empowerment Through Skill',
                desc: 'Going beyond one-time charity by cultivating practical, future-ready technical and vocational abilities.',
              },
              {
                icon: <HandshakeIcon sx={{ fontSize: 34, color: '#FFFFFF' }} />,
                title: 'Integrity & Transparency',
                desc: 'Maintaining rigorous, transparent selection criteria so every benefit reaches the most deserving applicants.',
              },
            ].map((val, idx) => (
              <Card
                key={idx}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '16px',
                  p: 3.5,
                  height: '100%',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '12px',
                    backgroundColor: '#002c62',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  {val.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#000000', mb: 1.5, fontSize: '1.25rem' }}>
                  {val.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75 }}>
                  {val.desc}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: OUR APPROACH (Background: #f4f4f2) */}
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
            badge="Systemic Execution"
            title="Our Strategic Approach"
            subtitle="A cohesive three-pillar framework connecting student potential with long-term socio-economic self-reliance."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
              width: '100%',
            }}
          >
            {[
              {
                step: 'Pillar 01',
                title: 'Identify & Remove Barriers',
                image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
                desc: 'Conducting transparent merit-cum-means identification to ensure no capable student is forced to discontinue studies due to economic distress.',
                details: 'Our grassroots verification committee collaborates with government schools and district education offices to evaluate genuine need. Over 1,200 eligible students undergo standardized screening each year, guaranteeing unbiased and prompt tuition fee coverage, free campus boarding, and academic learning kits.',
              },
              {
                step: 'Pillar 02',
                title: 'Nurture & Upskill',
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
                desc: 'Providing collegiate mentoring, modern assistive lab access, certified vocational courses, and professional aptitude training throughout their tenure.',
                details: 'Scholars are integrated into university research clusters, dedicated assistive screen-reader labs, and coding academies. Weekly personalized faculty counseling and career soft-skills workshops ensure 100% placement readiness upon graduation.',
              },
              {
                step: 'Pillar 03',
                title: 'Give Back & Pay Forward',
                image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80',
                desc: 'Inspiring scholarship alumni and university student volunteers to teach in adopted schools, conduct rural workshops, and mentor subsequent cohorts.',
                details: 'Every beneficiary becomes an active ambassador of positive social change. Through weekend educational outreach and rural village adoption drives, alumni return to train juniors and conduct digital literacy drives across 20+ partner villages.',
              },
            ].map((approach, idx) => (
              <Box
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.25, 0.8, 0.25, 1] }}
                sx={{ height: '100%' }}
              >
                <Card
                  sx={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    height: 400,
                    boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
                    border: '1.5px solid rgba(8, 1, 49, 0.08)',
                    cursor: 'pointer',
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 45px rgba(8, 1, 49, 0.16)',
                      '& .card-bg-image': {
                        transform: 'scale(1.08)',
                      },
                      '& .hover-overlay': {
                        opacity: 1,
                        visibility: 'visible',
                      },
                      '& .hover-content': {
                        transform: 'translateY(0)',
                        opacity: 1,
                      },
                      '& .initial-card-view': {
                        opacity: 0,
                        transform: 'translateY(-8px)',
                      },
                    },
                  }}
                >
                {/* 1. Full Image Background */}
                <Box
                  className="card-bg-image"
                  component="img"
                  src={approach.image}
                  alt={approach.title}
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
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'opacity 0.35s ease, transform 0.35s ease',
                    pointerEvents: 'none',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-block',
                      backgroundColor: '#002c62',
                      color: '#FFFFFF',
                      px: 2,
                      py: 0.6,
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {approach.step}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#FFFFFF',
                      fontSize: { xs: '1.25rem', md: '1.4rem' },
                      lineHeight: 1.3,
                      textShadow: '0 2px 10px rgba(0,0,0,0.85)',
                    }}
                  >
                    {approach.title}
                  </Typography>
                </Box>

                {/* 3. Hover Overlay with #002c62 color transition and animated reveal */}
                <Box
                  className="hover-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#002c62',
                    opacity: 0,
                    visibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: { xs: 3, sm: 3.5 },
                    transition: 'opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s ease',
                  }}
                >
                  <Box
                    className="hover-content"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'center',
                      transform: 'translateY(20px)',
                      opacity: 0,
                      transition: 'transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1) 0.05s, opacity 0.45s ease 0.05s',
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#FFFFFF',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        mb: 1,
                        opacity: 0.9,
                      }}
                    >
                      {approach.step}
                    </Typography>

                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        color: '#FFFFFF',
                        fontSize: { xs: '1.25rem', md: '1.4rem' },
                        lineHeight: 1.3,
                        mb: 1.5,
                      }}
                    >
                      {approach.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        lineHeight: 1.6,
                        fontSize: '0.92rem',
                        mb: 1.5,
                      }}
                    >
                      {approach.desc}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#FFFFFF',
                        opacity: 0.92,
                        lineHeight: 1.6,
                        fontSize: '0.85rem',
                      }}
                    >
                      {approach.details}
                    </Typography>
                  </Box>
                </Box>
              </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 5: JOIN OUR MISSION (Background: #faf6ef) */}
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
              color: '#000000',
              borderRadius: '24px',
              p: { xs: 4, md: 7 },
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: 600, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#000000', mb: 2 }}>
              Join Our Mission of Love and Empowerment
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#333333',
                fontSize: { xs: '0.96rem', md: '1.05rem' },
                maxWidth: 720,
                mx: 'auto',
                lineHeight: 1.75,
                mb: 4.5,
              }}
            >
              Whether you are an aspiring scholar seeking admission aid, a student keen to volunteer as an academic mentor, or an organization eager to collaborate on community initiatives — our doors are always open.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2.5 }}>
              <Button
                size="large"
                onClick={() => navigate('/initiatives')}
                endIcon={<ArrowForwardIcon sx={{ color: '#FFFFFF' }} />}
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  border: '1.5px solid #002c62',
                  '&:hover': {
                    backgroundColor: '#002c62',
                  },
                }}
              >
                Explore Initiatives
              </Button>

              <Button
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  border: '1.5px solid #002c62',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#002c62',
                  },
                }}
              >
                Get in Touch With Us
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
