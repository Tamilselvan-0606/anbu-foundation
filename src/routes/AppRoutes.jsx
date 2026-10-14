import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AboutUs } from '../pages/AboutUs';
import { Initiatives } from '../pages/Initiatives';
import { SuccessStories } from '../pages/SuccessStories';
import { Announcements } from '../pages/Announcements';
import { AnnouncementDetails } from '../pages/AnnouncementDetails';
import { Admission } from '../pages/Admission';
import { ContactUs } from '../pages/ContactUs';
import { NotFound } from '../pages/NotFound';

export const AppRoutes = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/initiatives" element={<Initiatives />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/announcements/:id" element={<AnnouncementDetails />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
