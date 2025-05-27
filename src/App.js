import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Profiles from './pages/Profiles';
import ProfileDetails from './pages/ProfileDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /profiles */}
        <Route path="/" element={<Navigate to="/profiles" replace />} />

        {/* Profiles list */}
        <Route path="/profiles" element={<Profiles />} />

        {/* Profile detail page */}
        <Route path="/profile/:id" element={<ProfileDetails />} />

        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
