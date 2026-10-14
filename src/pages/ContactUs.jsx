import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { PageTransition } from '../components/PageTransition';
import { PageBanner } from '../components/PageBanner';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    reason: '',
    comments: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.mobile.trim()) {
      errs.mobile = 'Please provide your mobile number';
    }
    if (!formData.reason.trim()) {
      errs.reason = 'Please enter reason for contact';
    }
    if (!formData.comments.trim()) {
      errs.comments = 'Please enter your comments';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <PageTransition>
      {/* PAGE BANNER */}
      <PageBanner
        title="Let's Start a Conversation"
        subtitle="Reach out to Anbu Foundation for information about our initiatives, admission opportunities, events, and ways to get involved."
      />

      {/* MAIN CONTENT SECTION: DIRECTORS CARD, FORM & MAP */}
      <Box
        sx={{
          backgroundColor: '#faf6ef',
          color: '#080131',
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          {/* 1. DIRECTORS CARD & WELCOMING CONTACT DESK IMAGE (Side by Side) */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'stretch',
              gap: { xs: 3.5, md: 4, lg: 5 },
              mb: 6,
              width: '100%',
            }}
          >
            {/* Left: Directors Card */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '0 0 calc(42% - 16px)', lg: '0 0 calc(40% - 20px)' },
                width: '100%',
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  borderRadius: '16px',
                  p: { xs: 3.5, sm: 4.5 },
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.06)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        backgroundColor: '#002c62',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: 26 }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: '#000000', lineHeight: 1.2 }}>
                        Directors
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666666', fontWeight: 500 }}>
                        Anbu Foundation
                      </Typography>
                    </Box>
                  </Box>

                  {/* Institution & Address */}
                  <Typography variant="body1" sx={{ color: '#000000', fontWeight: 600, mb: 0.5 }}>
                    Sathyabama Institute of Science and Technology
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555555', fontStyle: 'italic', mb: 1.5 }}>
                    (Deemed to be University)
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.6, mb: 3 }}>
                    Jeppiaar Nagar,<br />
                    Chennai-119, Tamil Nadu
                  </Typography>

                  <Box sx={{ height: '1px', backgroundColor: 'rgba(8, 1, 49, 0.08)', my: 2.5 }} />

                  {/* Phone Details */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2.5 }}>
                    <PhoneIcon sx={{ color: '#002c62', fontSize: 22, mt: 0.3 }} />
                    <Box>
                      <Typography variant="caption" sx={{ textTransform: 'uppercase', color: '#666666', fontWeight: 700, display: 'block' }}>
                        Phone Number
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#000000', fontWeight: 500 }}>
                        +91 44 24503200, +91 9940058263
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email Details */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <EmailIcon sx={{ color: '#002c62', fontSize: 22, mt: 0.3 }} />
                    <Box>
                      <Typography variant="caption" sx={{ textTransform: 'uppercase', color: '#666666', fontWeight: 700, display: 'block' }}>
                        E-Mail
                      </Typography>
                      <Typography
                        component="a"
                        href="mailto:anbuscholarship@gmail.com"
                        variant="body1"
                        sx={{
                          color: '#002c62',
                          fontWeight: 600,
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        anbuscholarship@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>

            {/* Right: Contact Support & Help Desk Image */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '0 0 calc(58% - 16px)', lg: '0 0 calc(60% - 20px)' },
                width: '100%',
                position: 'relative',
                minHeight: { xs: 260, md: 'auto' },
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
                boxShadow: '0 8px 30px rgba(8, 1, 49, 0.06)',
                display: 'flex',
              }}
            >
              <Box
                component="img"
                src="/images/contact-desk.jpg"
                alt="Anbu Foundation Student Advisory and Contact Desk"
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: { xs: 260, md: 380 },
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0, 44, 98, 0.9) 0%, rgba(0, 44, 98, 0.5) 55%, rgba(0, 44, 98, 0) 100%)',
                  p: { xs: 2.5, sm: 3 },
                  color: '#FFFFFF',
                }}
              >
                <Typography variant="subtitle1" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 0.5 }}>
                  Admissions & Student Advisory Desk
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.86rem' }}>
                  Visit our office at Sathyabama campus for scholarship guidance, eligibility verification, and general inquiries.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* 2. CONTACT FORM */}
          <Box sx={{ mb: 6 }}>
            <Card
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                borderRadius: '16px',
                p: { xs: 3.5, sm: 5 },
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
                boxShadow: '0 8px 30px rgba(8, 1, 49, 0.06)',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#000000', mb: 1 }}>
                Send Us a Message
              </Typography>
              <Typography variant="body1" sx={{ color: '#555555', mb: 3.5 }}>
                Fill in the details below and our team will get back to you promptly.
              </Typography>

              {submitted ? (
                <Box sx={{ p: 4, backgroundColor: '#002c62', borderRadius: '12px', textAlign: 'center' }}>
                  <CheckCircleIcon sx={{ fontSize: 52, color: '#FFFFFF', mb: 1.5 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 1 }}>
                    Message Sent Successfully!
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#FFFFFF', opacity: 0.95, mb: 3 }}>
                    Thank you, {formData.name}. We have received your message regarding "{formData.reason}" and will respond to {formData.email} soon.
                  </Typography>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        reason: '',
                        comments: '',
                      });
                    }}
                    sx={{
                      backgroundColor: '#FFFFFF',
                      color: '#080131',
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#FFFFFF',
                      },
                    }}
                  >
                    Send Another Message
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={2.4}>
                      <TextField
                        fullWidth
                        label="Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={!!errors.name}
                        helperText={errors.name}
                        placeholder="Name"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2.4}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={!!errors.email}
                        helperText={errors.email}
                        placeholder="Email"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2.4}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                        placeholder="Mobile Number"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2.4}>
                      <TextField
                        fullWidth
                        label="Reason"
                        required
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        error={!!errors.reason}
                        helperText={errors.reason}
                        placeholder="Reason"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2.4}>
                      <TextField
                        fullWidth
                        label="Comments"
                        required
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        error={!!errors.comments}
                        helperText={errors.comments}
                        placeholder="Comments"
                      />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 1.5, display: 'flex', justifyContent: 'center' }}>
                      <Button
                        type="submit"
                        size="large"
                        disabled={submitting}
                        endIcon={submitting ? <CircularProgress size={20} sx={{ color: '#FFFFFF' }} /> : <SendIcon sx={{ color: '#FFFFFF' }} />}
                        sx={{
                          backgroundColor: '#002c62',
                          color: '#FFFFFF',
                          px: 5,
                          py: 1.4,
                          fontWeight: 600,
                          fontSize: '1rem',
                          minWidth: 200,
                          '&:hover': { backgroundColor: '#002c62' },
                        }}
                      >
                        {submitting ? 'Sending Message...' : 'Submit Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Card>
          </Box>

          {/* 3. GOOGLE MAP */}
          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 8px 30px rgba(8, 1, 49, 0.06)',
            }}
          >
            <Box
              component="iframe"
              title="Sathyabama Institute Location - Anbu Foundation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509890287515!2d80.21842931482142!3d12.872288090920956!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x3a525b6a71578335%3A0x6b8250c60965e6d6!2sSathyabama%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              sx={{
                width: '100%',
                height: { xs: 320, md: 450 },
                border: 0,
                display: 'block',
              }}
              allowFullScreen=""
              loading="lazy"
            />
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
