import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { User } from '@/util/types';
import { storage } from '@/util/storage';
import { api } from '@/services/api';
import { ROUTES } from '@/util/constants';

interface AuthResponse {
  token: string;
  user: User;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userData = await storage.getUserData();
      const token = await storage.getAuthToken();

      if (userData && token) {
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (err) {
      setError('Error al verificar la autenticación');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.login(email, password);
      if (response.data) {
        const { token, user } = response.data;
        await storage.setAuthToken(token);
        await storage.setUserData(user);
        setUser(user);
        navigation.navigate(ROUTES.MAIN.HOME as never);
      }
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: any) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.register(userData);
      if (response.data) {
        const { token, user } = response.data;
        await storage.setAuthToken(token);
        await storage.setUserData(user);
        setUser(user);
        navigation.navigate(ROUTES.MAIN.HOME as never);
      }
    } catch (err: any) {
      setError(err.message || 'Error al registrar usuario');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);

      await storage.clearAuthData();
      setUser(null);

      navigation.navigate(ROUTES.AUTH.LOGIN as never);
    } catch (err: any) {
      setError(err.message || 'Error al cerrar sesión');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      setLoading(true);
      setError(null);

      await api.forgotPassword(email);
      navigation.navigate(ROUTES.AUTH.RESET_PASSWORD as never);
    } catch (err: any) {
      setError(err.message || 'Error al solicitar recuperación de contraseña');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (token: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      await api.resetPassword(token, password);
      navigation.navigate(ROUTES.AUTH.LOGIN as never);
    } catch (err: any) {
      setError(err.message || 'Error al restablecer la contraseña');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };
}; 