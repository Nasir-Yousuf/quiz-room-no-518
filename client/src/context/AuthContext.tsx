import React, { createContext, useContext, useState, useEffect } from 'react';
import { IUser, UserRole } from '../types/index.js';
import { api } from '../api/client.js';

interface AuthContextType {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  updateUser: (updatedUser: IUser) => void;
  demoLogin: (role: 'teacher' | 'student') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('quiz_token'));
  const [loading, setLoading] = useState<boolean>(true);

  // Check current session on mount
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('quiz_token');
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await api.get('/api/auth/me');
        if (res.success && res.user) {
          setUser(res.user);
        } else {
          localStorage.removeItem('quiz_token');
          setToken(null);
        }
      } catch (err) {
        console.warn('Failed to restore auth session:', err);
        localStorage.removeItem('quiz_token');
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post('/api/auth/login', { email, password });
    if (res.success && res.token && res.user) {
      localStorage.setItem('quiz_token', res.token);
      setToken(res.token);
      setUser(res.user);
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    const res = await api.post('/api/auth/register', { name, email, password, role });
    if (res.success && res.token && res.user) {
      localStorage.setItem('quiz_token', res.token);
      setToken(res.token);
      setUser(res.user);
    }
  };

  const logout = () => {
    localStorage.removeItem('quiz_token');
    setToken(null);
    setUser(null);
  };

  const updateUser = (updatedUser: IUser) => {
    setUser(updatedUser);
  };

  const demoLogin = async (role: 'teacher' | 'student') => {
    const email = role === 'teacher' ? 'teacher@example.com' : 'student@example.com';
    await login(email, 'password123');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        updateUser,
        demoLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
