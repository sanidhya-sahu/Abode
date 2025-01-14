import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = async ({ children }) => {
  const { isAuth } = useAuth();
  const logged = isAuth()
  if (!logged) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;