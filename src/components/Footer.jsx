import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link as RouterLink } from 'react-router-dom';
import { foundationData } from '../data/foundationData';

export const Footer = () => {
  return (
    <Box
      component="footer"
      id="site-footer"
      sx={{
        backgroundColor: '#002c62',
        color: '#FFFFFF',
        pt: { xs: 8, md: 10 },
        pb: 5,
        borderTop: '2px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, sm: 3, md: 4 }} justifyContent="space-between" alignItems="flex-start">
          {/* Column 1: Logo & Social Media Icons */}
          <Grid item xs={12} sm={6} md={3.2} lg={3}>
            <Box sx={{ mb: 3 }}>
              <Box
                component="img"
                src="/images/image.png"
                alt="Anbu Foundation"
                sx={{
                  height: { xs: 64, sm: 74, md: 84 },
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center' }}>
              <IconButton
                component="a"
                href={foundationData.contact.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: 38,
                  height: 38,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <FacebookIcon sx={{ color: '#FFFFFF', fontSize: 18 }} />
              </IconButton>

              <IconButton
                component="a"
                href={foundationData.contact.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: 38,
                  height: 38,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <TwitterIcon sx={{ color: '#FFFFFF', fontSize: 18 }} />
              </IconButton>

              <IconButton
                component="a"
                href={foundationData.contact.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: 38,
                  height: 38,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <YouTubeIcon sx={{ color: '#FFFFFF', fontSize: 18 }} />
              </IconButton>

              <IconButton
                component="a"
                href={foundationData.contact.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: 38,
                  height: 38,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <WhatsAppIcon sx={{ color: '#FFFFFF', fontSize: 18 }} />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={2.8} lg={2.5}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.88rem',
              }}
            >
              Quick Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                { title: 'Home', path: '/' },
                { title: 'About the Foundation', path: '/about' },
                { title: 'Our Initiatives', path: '/initiatives' },
                { title: 'Success Stories', path: '/success-stories' },
                { title: 'Latest Announcements', path: '/announcements' },
                { title: 'Admission & Eligibility', path: '/admission' },
                { title: 'Contact Office', path: '/contact' },
              ].map((link) => (
                <MuiLink
                  key={link.title}
                  component={RouterLink}
                  to={link.path}
                  sx={{
                    color: '#FFFFFF',
                    opacity: 0.9,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateX(3px)',
                      color: '#FFFFFF',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontSize: '0.75rem', opacity: 0.7 }}>•</Box>
                  {link.title}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Key Initiatives */}
          <Grid item xs={12} sm={6} md={2.8} lg={2.8}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 800,
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.88rem',
              }}
            >
              Key Initiatives
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                'Anbu Scholarship',
                'Inclusive Education',
                'School Supporting Programs',
                'Rural Development',
                'Skill Development',
                'Joy of Giving',
              ].map((prog) => (
                <MuiLink
                  key={prog}
                  component={RouterLink}
                  to="/initiatives"
                  sx={{
                    color: '#FFFFFF',
                    opacity: 0.9,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateX(3px)',
                      color: '#FFFFFF',
                    },
                  }}
                >
                  <Box component="span" sx={{ fontSize: '0.75rem', opacity: 0.7 }}>•</Box>
                  {prog}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Column 4: Contact Details with Left Border Divider */}
          <Grid item xs={12} sm={6} md={3.2} lg={3.7}>
            <Box
              sx={{
                borderLeft: { md: '2px solid rgba(255, 255, 255, 0.4)' },
                pl: { md: 3.5, lg: 4 },
                pr: 0,
                width: '100%',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontSize: '0.88rem',
                }}
              >
                Contact Details
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6 }}>
                <Box>
                  <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.92rem' }}>
                    Directors,
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.92rem' }}>
                    Anbu Foundation
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      letterSpacing: '0.04em',
                      display: 'block',
                      textTransform: 'uppercase',
                    }}
                  >
                    SATHYABAMA INSTITUTE OF SCIENCE AND TECHNOLOGY
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.78rem', display: 'block', mb: 0.5 }}>
                    (Deemed to be University)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    Jeppiaar Nagar, Chennai – 600 119, Tamil Nadu, India
                  </Typography>
                </Box>

                <Box sx={{ pt: 0.5 }}>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.78rem', display: 'block' }}>
                    Phone:
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem' }}>
                    +91 44 24503200, +91 9940058263
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.78rem', display: 'block' }}>
                    Email:
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem' }}>
                    {foundationData.contact.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.85 }}>
            © {new Date().getFullYear()} Anbu Foundation | Sathyabama Institute of Science and Technology. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
