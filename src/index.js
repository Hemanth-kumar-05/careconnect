import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

const mainRoute = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/services',
    component: ServicesPage
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      {mainRoute.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
