import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Settings } from '@/util/types';
import { SETTINGS } from '@/util/constants';
import { storage } from '@/util/storage';

const defaultSettings: Settings = {
  language: SETTINGS.LANGUAGES.ES,
  fontSize: SETTINGS.FONT_SIZES.MEDIUM as 'small' | 'medium' | 'large',
  highContrast: false,
  notifications: {
    enabled: true,
    sound: true,
    vibration: true,
  },
  theme: SETTINGS.THEMES.SYSTEM as 'light' | 'dark' | 'system',
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      setLoading(true);
      setError(null);

      const savedSettings = await storage.getSettings();
      if (savedSettings) {
        setSettings(savedSettings);
      }
    } catch (err: any) {
      setError(err.message || 'Error al cargar la configuración');
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = async (newSettings: Partial<Settings>) => {
    try {
      setLoading(true);
      setError(null);

      const updatedSettings = {
        ...settings,
        ...newSettings,
      };

      await storage.setSettings(updatedSettings);
      await api.updateSettings(updatedSettings);
      setSettings(updatedSettings);
    } catch (err: any) {
      setError(err.message || 'Error al actualizar la configuración');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetSettings = async () => {
    try {
      setLoading(true);
      setError(null);

      await storage.setSettings(defaultSettings);
      await api.updateSettings(defaultSettings);
      setSettings(defaultSettings);
    } catch (err: any) {
      setError(err.message || 'Error al restablecer la configuración');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const toggleNotification = async (type: 'enabled' | 'sound' | 'vibration') => {
    try {
      setLoading(true);
      setError(null);

      const updatedSettings = {
        ...settings,
        notifications: {
          ...settings.notifications,
          [type]: !settings.notifications[type],
        },
      };

      await storage.setSettings(updatedSettings);
      await api.updateSettings(updatedSettings);
      setSettings(updatedSettings);
    } catch (err: any) {
      setError(err.message || 'Error al actualizar la configuración de notificaciones');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const setLanguage = async (language: string) => {
    try {
      setLoading(true);
      setError(null);

      const updatedSettings = {
        ...settings,
        language,
      };

      await storage.setSettings(updatedSettings);
      await storage.setLanguage(language);
      await api.updateSettings(updatedSettings);
      setSettings(updatedSettings);
    } catch (err: any) {
      setError(err.message || 'Error al actualizar el idioma');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const setTheme = async (theme: 'light' | 'dark' | 'system') => {
    try {
      setLoading(true);
      setError(null);

      const updatedSettings = {
        ...settings,
        theme,
      };

      await storage.setSettings(updatedSettings);
      await storage.setTheme(theme);
      await api.updateSettings(updatedSettings);
      setSettings(updatedSettings);
    } catch (err: any) {
      setError(err.message || 'Error al actualizar el tema');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    settings,
    loading,
    error,
    updateSettings,
    resetSettings,
    toggleNotification,
    setLanguage,
    setTheme,
  };
}; 