// C:\Users\hp\Agro-SMS-Alerts\frontend\src\contexts\AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import type { AxiosError } from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = axios.create({
    baseURL: 'http://localhost:5000/dashboard',
    withCredentials: true, // Ensure cookies are sent
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/auth/profile');
        const data = response.data as { id: number; email: string; name?: string };
        const userData: User = {
          id: data.id,
          email: data.email,
          name: data.name || '',
          role: 'admin',
        };
        setUser(userData);
        localStorage.setItem('smartFarmUser', JSON.stringify(userData));
      } catch {
        setUser(null);
        localStorage.removeItem('smartFarmUser');
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => { // Line ~44
    setIsLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      const data = response.data as { access_token: string; user: Omit<User, 'role'> };
      const userData: User = {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name || '',
        role: 'admin',
      };
      setUser(userData);
      localStorage.setItem('smartFarmUser', JSON.stringify(userData));
    } catch (error) {
      // const axiosError = error as AxiosError<{ message?: string }>;
      // throw new Error(axiosError.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch {
      // Ignore errors
    }
    setUser(null);
    localStorage.removeItem('smartFarmUser');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};