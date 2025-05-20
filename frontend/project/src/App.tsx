import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import FarmerRegistration from './pages/FarmerRegistration';
import FarmerList from './pages/FarmerList';
import WeatherInfo from './pages/WeatherInfo';
import ProductGuidance from './pages/ProductGuidance';
import MessageCenter from './pages/MessageCenter';
import Layout from './components/layout/Layout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="farmers/register" element={<FarmerRegistration />} />
            <Route path="farmers/list" element={<FarmerList />} />
            <Route path="weather" element={<WeatherInfo />} />
            <Route path="guidance" element={<ProductGuidance />} />
            <Route path="messages" element={<MessageCenter />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;