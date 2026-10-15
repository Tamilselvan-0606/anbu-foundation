import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  MenuItem,
  CircularProgress,
  Alert,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useNavigate } from 'react-router-dom';

import { PageTransition } from '../components/PageTransition';
import { PageBanner } from '../components/PageBanner';
import { SectionHeading } from '../components/SectionHeading';
import { admissionTimeline, admissionFaqs } from '../data/foundationData';

export const Admission = () => {
  const navigate = useNavigate();

  // Form State & Validation
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'Anbu Higher Education Scholarship',
    qualification: '+2 / Higher Secondary (Passed)',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const programs = [
    'Anbu Higher Education Scholarship',
    'Inclusive Education Program (Visual Support)',
    'Diploma in Cosmetology for Women',
    'Vocational AI & Digital Skills Track',
  ];

  const qualifications = [
    '+2 / Higher Secondary (Passed)',
    '+2 / Higher Secondary (Appearing)',
    'Diploma / Polytechnic Graduate',
    'Undergraduate Student',
    'Other / Vocational Candidate',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errs.email = 'Invalid email address format';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^\+?[0-9]{10,14}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the verification terms';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 900);
  };

  return (
    <PageTransition>
      {/* PAGE HERO (Background: #0a0a3a) */}
      <PageBanner
        title="Take the First Step Towards Your Future"
        subtitle="Explore available scholarship opportunities, understand eligibility and documentation requirements, and begin your journey with Anbu Foundation."
        badge="Admissions & Eligibility"
        breadcrumbCurrent="Admission"
      />



      {/* SECTION 2: ELIGIBILITY AND REQUIREMENTS (Background: #f4f4f2) */}
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
            badge="Checklist"
            title="Eligibility & Required Documentation"
            subtitle="Please review the foundational eligibility requirements prior to submitting your application."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            <Card
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#080131',
                borderRadius: 0,
                p: { xs: 3.5, sm: 4.5 },
                height: '100%',
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
                boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#080131', mb: 2.5 }}>
                Eligibility Criteria
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  'Must have passed Higher Secondary (+2) examinations or recognized polytechnic diploma from an accredited educational board.',
                  'Demonstrated economic need with valid annual family income certificate from the competent government revenue authority.',
                  'First-generation collegiate learners are given prioritized consideration across general and vocational quotas.',
                  'Dedicated reservation for visually impaired candidates and specially challenged groups under the Inclusive Education charter.',
                ].map((rule, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: '#002c62', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75 }}>
                      {rule}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>

            <Card
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#080131',
                borderRadius: 0,
                p: { xs: 3.5, sm: 4.5 },
                height: '100%',
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
                boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#080131', mb: 2.5 }}>
                Mandatory Documents to Prepare
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  'Copies of 10th and 12th Grade official mark sheets / diplomas.',
                  'School Transfer Certificate (TC) and Conduct Certificate.',
                  'Valid Family Income Certificate (issued within the last 12 months).',
                  'Government-issued photo identification (Aadhaar Card or Voter ID).',
                  'Disability / Medical certificate (applicable only for Inclusive Education applicants).',
                  'Recent passport-size color photographs.',
                ].map((doc, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <AssignmentTurnedInIcon sx={{ color: '#002c62', fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: '#333333', lineHeight: 1.75 }}>
                      {doc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* SECTION 3: APPLICATION PROCESS TIMELINE (Background: #faf6ef) */}
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
            badge="Step-by-Step Guide"
            title="Application & Verification Workflow"
            subtitle="Follow these sequential steps to ensure smooth evaluation and timely sanctioning of your application."
            textColor="#080131"
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(5, 1fr)',
              },
              gap: 3,
            }}
          >
            {admissionTimeline.map((step) => (
              <Card
                key={step.step}
                sx={{
                  backgroundColor: '#002c62',
                  color: '#FFFFFF',
                  borderRadius: 0,
                  p: 3,
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
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#faf6ef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    fontWeight: 800,
                    fontSize: '1.15rem',
                    color: '#002c62',
                    border: '1px solid rgba(8, 1, 49, 0.1)',
                  }}
                >
                  {step.step}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFFFFF', mb: 1, fontSize: '1.05rem' }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#FFFFFF', opacity: 0.9, lineHeight: 1.75 }}>
                  {step.desc}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>



      {/* SECTION 5: ADMISSION FAQS (Background: #faf6ef) */}
      <Box
        sx={{
          backgroundColor: '#faf6ef',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Admission & Scholarship Inquiries"
            subtitle="Find verified answers to common questions about eligibility criteria, documentation, and the selection schedule."
            textColor="#080131"
          />

          <Box sx={{ mt: 4 }}>
            {admissionFaqs.map((faq, idx) => (
              <Accordion
                key={idx}
                defaultExpanded={idx === 0}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#080131',
                  borderRadius: '0 !important',
                  mb: 2,
                  border: '1.5px solid rgba(8, 1, 49, 0.08)',
                  boxShadow: '0 4px 20px rgba(8, 1, 49, 0.06)',
                  overflow: 'hidden',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#002c62', fontSize: 28 }} />}
                  sx={{ p: 2.5 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: '#002c62',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        flexShrink: 0,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#080131', fontSize: { xs: '1rem', md: '1.15rem' } }}>
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: '#002c62',
                    color: '#FFFFFF',
                    px: { xs: 2.5, md: 3.5 },
                    py: 3,
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#FFFFFF', opacity: 0.95, lineHeight: 1.8, fontSize: '0.98rem' }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 6: ADMISSION SUPPORT (Background: #f4f4f2) */}
      <Box
        sx={{
          backgroundColor: '#f4f4f2',
          color: '#080131',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(8, 1, 49, 0.12)',
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#080131',
              borderRadius: 0,
              p: { xs: 4, sm: 6 },
              border: '1.5px solid rgba(8, 1, 49, 0.08)',
              boxShadow: '0 8px 30px rgba(8, 1, 49, 0.08)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 600, color: '#080131', mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Need Help With Your Application?
            </Typography>
            <Typography variant="body1" sx={{ color: '#333333', lineHeight: 1.7, mb: 4, maxWidth: 600, mx: 'auto' }}>
              Our dedicated admissions counselors at Sathyabama University are available to clarify eligibility, course curricula, and document verification procedures.
            </Typography>
            <Button
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<ArrowForwardIcon sx={{ color: '#FFFFFF' }} />}
              sx={{
                backgroundColor: '#002c62',
                color: '#FFFFFF',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 0,
                border: '1.5px solid rgba(8, 1, 49, 0.08)',
                '&:hover': { backgroundColor: '#002c62', color: '#FFFFFF', boxShadow: 'none' },
              }}
            >
              Contact Admissions Helpdesk
            </Button>
          </Card>
        </Container>
      </Box>
    </PageTransition>
  );
};
