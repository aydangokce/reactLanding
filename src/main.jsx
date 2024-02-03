import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './common/nav';
import Hero from './sections/hero/hero';
import PerformanceMarketing from './sections/pmarketing';
import GrowthConsulting from './sections/gconsulting';
import AppAudit from './sections/appaudit';
import Footer from './sections/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/app-audit" element={<AppAudit />} />
        <Route path="/contact" element={<Footer />} />
        <Route
          path="/performance-marketing"
          element={<PerformanceMarketing />}
        />
        <Route path="/growth-consulting" element={<GrowthConsulting />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
