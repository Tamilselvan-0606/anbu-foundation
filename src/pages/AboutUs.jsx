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
        stats={[
          { value: '2006', title: 'Founded', desc: 'Serving with compassion' },
          { value: '18+', title: 'Dedicated Years', desc: 'Grassroots upliftment' },
        ]}
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
              alignItems: 'stretch',
              justifyContent: 'space-between',
              gap: { xs: 4, md: 5 },
              width: '100%',
            }}
          >
            <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 54%", lg: "0 0 55%" }, width: "100%", display: 'flex' }}>
              <Card
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  p: { xs: 3.5, sm: 5 },
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 16px 40px rgba(0, 44, 98, 0.25)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-block',
                    backgroundColor: '#faf6ef',
                    color: '#002c62',
                    px: 2,
                    py: 0.6,
                    borderRadius: 0,
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    mb: 2,
                    alignSelf: 'flex-start',
                    border: '1px solid rgba(8, 1, 49, 0.12)',
                  }}
                >
                  Inception & Legacy
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '2rem', sm: '2.4rem', md: '2.6rem' },
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    mb: 3,
                  }}
                >
                  Foundation
                </Typography>

                <Typography variant="body1" sx={{ color: '#FFFFFF', opacity: 0.92, lineHeight: 1.75, mb: 2.5 }}>
                  The inception of this idea to serve all is inherited from parents, 2008 had witnessed the first bud in and now it is a garden of happiness with the fragrance of success. The time to share the fruits to all has been arrived in this year of 2016, so the foundation is determined to extend its branches to all directions of enriching human value, where our service is atmost needed.
                </Typography>

                <Box
                  sx={{
                    backgroundColor: '#faf6ef',
                    borderRadius: 0,
                    border: '1px solid rgba(8, 1, 49, 0.12)',
                    p: { xs: 2, sm: 2.2 },
                    my: 2.5,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#002c62',
                      fontWeight: 600,
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                      fontSize: '0.98rem',
                    }}
                  >
                    Integrity in ideation, Introspection in planning and Involvement in execution are principles of our foundation.
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: '#FFFFFF', opacity: 0.92, lineHeight: 1.75, mb: 2.5 }}>
                  To experience the sunrise we should turn towards rising sun. To experience the impact of service to people in complete sense, we should interact and interlace with their lives.
                </Typography>

                <Typography variant="body1" sx={{ color: '#FFFFFF', opacity: 0.92, lineHeight: 1.75 }}>
                  School adoption, Village adoption and many such programs are an embodiment of selflessness and has the objectives as longevity, freedom and peace. We welcome you to this home of love - Anbu.
                </Typography>
              </Card>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              sx={{ flex: { xs: "1 1 100%", md: "0 0 42%", lg: "0 0 40%" }, width: "100%" }}
            >
              <Card
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: 0,
                  overflow: 'hidden',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 16px 40px rgba(8, 1, 49, 0.12)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 24px 50px rgba(8, 1, 49, 0.18)',
                  },
                }}
              >
                <Box sx={{ height: { xs: 280, sm: 340, md: 360 }, overflow: 'hidden', borderRadius: 0, position: 'relative' }}>
                  <Box
                    component="img"
                    src="/images/image-1.jpeg"
                    alt="Anbu Foundation Leadership"
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 0,
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': { transform: 'scale(1.08)' },
                    }}
                  />
                </Box>
                <CardContent sx={{ p: { xs: 3, sm: 3.5 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#000000', mb: 1 }}>
                    Home of Love — Anbu
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75 }}>
                    "To experience the impact of service to people in complete sense, we should interact and interlace with their lives."
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
                  borderRadius: 0,
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
                    borderRadius: '50%',
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
                  Vision
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
                  borderRadius: 0,
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
                    borderRadius: '50%',
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
                  Mission
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
                icon: <VolunteerActivismIcon sx={{ fontSize: 34, color: '#002c62' }} />,
                title: 'Compassion (Anbu)',
                desc: 'Rooting every institutional decision in genuine care, understanding, and personal empathy for student struggles.',
              },
              {
                icon: <Diversity3Icon sx={{ fontSize: 34, color: '#002c62' }} />,
                title: 'Inclusive Dignity',
                desc: 'Championing accessible environments where visually challenged learners and acid attack survivors study with unconditional pride.',
              },
              {
                icon: <EmojiObjectsIcon sx={{ fontSize: 34, color: '#002c62' }} />,
                title: 'Empowerment Through Skill',
                desc: 'Going beyond one-time charity by cultivating practical, future-ready technical and vocational abilities.',
              },
              {
                icon: <HandshakeIcon sx={{ fontSize: 34, color: '#002c62' }} />,
                title: 'Integrity & Transparency',
                desc: 'Maintaining rigorous, transparent selection criteria so every benefit reaches the most deserving applicants.',
              },
            ].map((val, idx) => (
              <Card
                key={idx}
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  p: 3.5,
                  height: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 30px rgba(0, 44, 98, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 40px rgba(0, 44, 98, 0.32)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    backgroundColor: '#faf6ef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  {val.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 1.5, fontSize: '1.25rem' }}>
                  {val.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.9, lineHeight: 1.75 }}>
                  {val.desc}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 4: FOUNDATION DESK (Background: #f4f4f2) */}
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
            badge="Leadership Message"
            title="Foundation Desk"
            subtitle="An inspirational message from our founders on the enduring spirit of service and humanity."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'stretch',
              gap: { xs: 4, lg: 6 },
              width: '100%',
            }}
          >
            {/* Left: Founders Portrait Card */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, ease: [0.25, 0.8, 0.25, 1] }}
              sx={{
                flex: { xs: '1 1 100%', lg: '0 0 42%' },
                width: '100%',
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 0,
                  overflow: 'hidden',
                  width: '100%',
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 12px 36px rgba(8, 1, 49, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 440, sm: 540, lg: '100%' },
                    minHeight: { lg: 580 },
                    overflow: 'hidden',
                    borderRadius: 0,
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/image-2.jpg"
                    alt="Dr. Marie Johnson & Dr. Mariazeena Johnson"
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 0,
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': { transform: 'scale(1.03)' },
                    }}
                  />
                </Box>
              </Card>
            </Box>

            {/* Right: Desk Message & Founders Info */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
              sx={{
                flex: { xs: '1 1 100%', lg: '0 0 54%' },
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  p: { xs: 3.5, sm: 5 },
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 16px 40px rgba(0, 44, 98, 0.25)',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '1.45rem', sm: '1.8rem', md: '2.05rem' },
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    mb: 3,
                  }}
                >
                  "Welcome to the home of Love" — Anbu!
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFFFFF',
                    opacity: 0.92,
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    mb: 2.2,
                  }}
                >
                  Most intrinsic feeling of Life is being Human. Humanity is not an act; it is the way of living. The cause of suffering in people has many reasons but the effect is unique and it is painful. Struggle for Education, Struggle for Survival and Struggle to Empower Self and Nation.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFFFFF',
                    opacity: 0.92,
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    mb: 2.2,
                  }}
                >
                  Anbu Foundation was started to bring back the happiness to the lives of people who are striving to live the life to the fullest. ANBU is committed to serve the Nation with a phenomenon of “Answering the Unanswered” by means of well-established structure. Our agenda of service is imbibed with share love to all.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFFFFF',
                    opacity: 0.92,
                    fontSize: '0.98rem',
                    lineHeight: 1.8,
                    mb: 3.5,
                  }}
                >
                  The framework of the foundation is an aforethought to strengthen the lives of fellow citizens and thereby lifting the spirit of living, which is vital to the development of our Nation. We welcome you to this home of love - Anbu.
                </Typography>

                {/* Founders Leadership Details */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 2.5,
                        backgroundColor: '#faf6ef',
                        borderRadius: 0,
                        border: '1px solid rgba(8, 1, 49, 0.08)',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#002c62', fontSize: '1.05rem', mb: 0.5 }}>
                        Dr. Marie Johnson
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#080131', mb: 0.5 }}>
                        Founder, Anbu Foundation
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#555555', display: 'block', lineHeight: 1.45 }}>
                        President, Sathyabama Institute of Science and Technology
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        p: 2.5,
                        backgroundColor: '#faf6ef',
                        borderRadius: 0,
                        border: '1px solid rgba(8, 1, 49, 0.08)',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#002c62', fontSize: '1.05rem', mb: 0.5 }}>
                        Dr. Mariazeena Johnson
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#080131', mb: 0.5 }}>
                        Founder, Anbu Foundation
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#555555', display: 'block', lineHeight: 1.45 }}>
                        Chancellor, Sathyabama Institute of Science and Technology
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
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
              borderRadius: 0,
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
                  borderRadius: 0,
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
                  borderRadius: 0,
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
