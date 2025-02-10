// src/routes/index.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeComponent } from '../pages/HomeComponent';
import { AboutComponent } from '../pages/AboutComponent';

export const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/about" element={<AboutComponent />} />
    </Routes>
  );
};
