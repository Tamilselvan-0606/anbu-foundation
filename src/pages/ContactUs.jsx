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
  IconButton,
  Tooltip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        stats={[
          { value: 'Office', title: 'Advisory Desk', desc: 'Sathyabama campus' },
          { value: '6 Days', title: 'Mon – Sat Support', desc: '9:00 AM – 4:30 PM' },
        ]}
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
          {/* 1. WELCOMING CONTACT DESK IMAGE (Left) & DIRECTORS CARD (Right) */}
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
            {/* Left: Contact Support & Help Desk Image */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '0 0 calc(58% - 16px)', lg: '0 0 calc(60% - 20px)' },
                width: '100%',
                position: 'relative',
                minHeight: { xs: 260, md: 'auto' },
                borderRadius: 0,
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

            {/* Right: Directors Card */}
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
                  borderRadius: 0,
                  p: { xs: 3.5, sm: 4.5 },
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 8px 30px rgba(8, 1, 49, 0.06)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
                  {/* Header: Directors / Anbu Foundation */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#002c62', lineHeight: 1.2, mb: 0.5 }}>
                      Directors
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666666', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                      Anbu Foundation
                    </Typography>
                  </Box>

                  {/* Institution & Address with Round Location Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        backgroundColor: '#002c62',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        mt: 0.3,
                      }}
                    >
                      <LocationOnIcon sx={{ color: '#FFFFFF', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ color: '#000000', fontWeight: 600, mb: 0.2 }}>
                        Sathyabama Institute of Science and Technology
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#555555', fontStyle: 'italic', mb: 0.5 }}>
                        (Deemed to be University)
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.5 }}>
                        Jeppiaar Nagar, Chennai-119, Tamil Nadu
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ height: '1px', backgroundColor: 'rgba(8, 1, 49, 0.08)', my: 1.5 }} />

                  {/* Phone Details with Round Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        backgroundColor: '#002c62',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        mt: 0.3,
                      }}
                    >
                      <PhoneIcon sx={{ color: '#FFFFFF', fontSize: 19 }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ textTransform: 'uppercase', color: '#666666', fontWeight: 700, display: 'block' }}>
                        Phone Number
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#000000', fontWeight: 600 }}>
                        +91 44 24503200, +91 9940058263
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email Details with Round Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        backgroundColor: '#002c62',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        mt: 0.3,
                      }}
                    >
                      <EmailIcon sx={{ color: '#FFFFFF', fontSize: 19 }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ textTransform: 'uppercase', color: '#666666', fontWeight: 700, display: 'block' }}>
                        E-Mail
                      </Typography>
                      <Typography
                        component="a"
                        href="mailto:anbuscholarship@gmail.com"
                        variant="body2"
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

                  <Box sx={{ height: '1px', backgroundColor: 'rgba(8, 1, 49, 0.08)', my: 1.5 }} />

                  {/* Connect With Us: Social Media Icons */}
                  <Box sx={{ mt: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        textTransform: 'uppercase',
                        color: '#666666',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        display: 'block',
                        mb: 1.2,
                      }}
                    >
                      Connect With Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center', flexWrap: 'wrap' }}>
                      <Tooltip title="Facebook" arrow>
                        <IconButton
                          component="a"
                          href="https://www.facebook.com/pages/Sathyabama-University-Chennai/797852633568767"
                          target="_blank"
                          rel="noreferrer"
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            backgroundColor: '#002c62',
                            color: '#FFFFFF',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              backgroundColor: '#1877F2',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <FacebookIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Instagram" arrow>
                        <IconButton
                          component="a"
                          href="https://www.instagram.com/sathyabama.official"
                          target="_blank"
                          rel="noreferrer"
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            backgroundColor: '#002c62',
                            color: '#FFFFFF',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              backgroundColor: '#E4405F',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <InstagramIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="WhatsApp" arrow>
                        <IconButton
                          component="a"
                          href="https://wa.me/919940058263"
                          target="_blank"
                          rel="noreferrer"
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            backgroundColor: '#002c62',
                            color: '#FFFFFF',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              backgroundColor: '#25D366',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <WhatsAppIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Twitter / X" arrow>
                        <IconButton
                          component="a"
                          href="https://twitter.com/sathyabamaSIST"
                          target="_blank"
                          rel="noreferrer"
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            backgroundColor: '#002c62',
                            color: '#FFFFFF',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              backgroundColor: '#1DA1F2',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <TwitterIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="LinkedIn" arrow>
                        <IconButton
                          component="a"
                          href="https://www.linkedin.com/school/sathyabama-institute-of-science-and-technology"
                          target="_blank"
                          rel="noreferrer"
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            backgroundColor: '#002c62',
                            color: '#FFFFFF',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              backgroundColor: '#0A66C2',
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <LinkedInIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>

          {/* 2. CONTACT FORM */}
          <Box sx={{ mb: 6 }}>
            <Card
              sx={{
                backgroundColor: '#002c62',
                color: '#FFFFFF',
                borderRadius: 0,
                p: { xs: 3.5, sm: 5 },
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 12px 36px rgba(0, 44, 98, 0.25)',
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3.5 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 1 }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  Fill in the details below and our team will get back to you promptly.
                </Typography>
              </Box>

              {submitted ? (
                <Box sx={{ p: 4, backgroundColor: '#faf6ef', borderRadius: 0, textAlign: 'center', border: '1.5px solid rgba(8, 1, 49, 0.1)' }}>
                  <CheckCircleIcon sx={{ fontSize: 52, color: '#002c62', mb: 1.5 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#002c62', mb: 1 }}>
                    Message Sent Successfully!
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#333333', mb: 3 }}>
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
                      backgroundColor: '#002c62',
                      color: '#FFFFFF',
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      borderRadius: 0,
                      '&:hover': {
                        backgroundColor: '#001e44',
                      },
                    }}
                  >
                    Send Another Message
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={1.5} alignItems="flex-start">
                    <Grid item xs={12} sm={6} md={2}>
                      <TextField
                        fullWidth
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{
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
                            fontSize: '0.9rem',
                            px: 1.5,
                            '&::placeholder': {
                              color: '#555555',
                              opacity: 0.9,
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#ffcdd2',
                            mx: 0,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                      <TextField
                        fullWidth
                        placeholder="Email *"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
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
                            fontSize: '0.9rem',
                            px: 1.5,
                            '&::placeholder': {
                              color: '#555555',
                              opacity: 0.9,
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#ffcdd2',
                            mx: 0,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                      <TextField
                        fullWidth
                        placeholder="Mobile Number *"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                        sx={{
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
                            fontSize: '0.9rem',
                            px: 1.5,
                            '&::placeholder': {
                              color: '#555555',
                              opacity: 0.9,
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#ffcdd2',
                            mx: 0,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                      <TextField
                        fullWidth
                        placeholder="Reason *"
                        required
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        error={!!errors.reason}
                        helperText={errors.reason}
                        sx={{
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
                            fontSize: '0.9rem',
                            px: 1.5,
                            '&::placeholder': {
                              color: '#555555',
                              opacity: 0.9,
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#ffcdd2',
                            mx: 0,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                      <TextField
                        fullWidth
                        placeholder="Comments *"
                        required
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        error={!!errors.comments}
                        helperText={errors.comments}
                        sx={{
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
                            fontSize: '0.9rem',
                            px: 1.5,
                            '&::placeholder': {
                              color: '#555555',
                              opacity: 0.9,
                            },
                          },
                          '& .MuiFormHelperText-root': {
                            color: '#ffcdd2',
                            mx: 0,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                      <Button
                        type="submit"
                        fullWidth
                        size="large"
                        disabled={submitting}
                        endIcon={submitting ? <CircularProgress size={18} sx={{ color: '#002c62' }} /> : <SendIcon sx={{ color: '#002c62', fontSize: '1.05rem', ml: 0.5 }} />}
                        sx={{
                          height: 52,
                          backgroundColor: '#faf6ef',
                          color: '#002c62',
                          px: 1.5,
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          letterSpacing: '-0.01em',
                          borderRadius: 0,
                          border: '1.5px solid #faf6ef',
                          whiteSpace: 'nowrap',
                          display: 'inline-flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
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
                        {submitting ? 'Sending...' : 'Submit Message'}
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
              borderRadius: 0,
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
