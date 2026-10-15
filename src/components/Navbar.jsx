import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Initiatives', path: '/initiatives' },
  { name: 'Success Stories', path: '/success-stories' },
  { name: 'Announcements', path: '/announcements' },
  { name: 'Admission', path: '/admission' },
  { name: 'Contact Us', path: '/contact' },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#002c62',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 76, md: 88 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Branding */}
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              py: 0.5,
            }}
          >
            <Box
              component="img"
              src="/images/image.png"
              alt="Anbu Foundation"
              sx={{
                height: { xs: 52, sm: 60, md: 68 },
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.name}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    color: '#FFFFFF',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    border: isActive ? '1px solid rgba(255, 255, 255, 0.28)' : '1px solid transparent',
                    borderRadius: '20px',
                    px: 1.8,
                    py: 0.6,
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.01em',
                    boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.18)' : 'none',
                    backdropFilter: isActive ? 'blur(8px)' : 'none',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 255, 255, 0.08)',
                      color: '#FFFFFF',
                      transform: 'none',
                    },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>



          {/* Mobile Hamburger Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { lg: 'none' }, color: '#FFFFFF' }}
          >
            <MenuIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 290,
            backgroundColor: '#002c62',
            color: '#FFFFFF',
            borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
            p: 2.5,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
            Navigation
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
            <CloseIcon sx={{ color: '#FFFFFF' }} />
          </IconButton>
        </Box>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    borderLeft: isActive ? '4px solid #FFFFFF' : '4px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      color: '#FFFFFF',
                      fontSize: '1rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>


      </Drawer>
    </AppBar>
  );
};
