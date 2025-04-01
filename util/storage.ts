import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from './constants';
import { User, Settings } from './types';

export const storage = {
  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving data:', error);
      throw error;
    }
  },

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error reading data:', error);
      throw error;
    }
  },

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
      throw error;
    }
  },

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  },

  // Métodos específicos para la aplicación
  async setAuthToken(token: string): Promise<void> {
    return this.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  async getAuthToken(): Promise<string | null> {
    return this.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  async setUserData(user: User): Promise<void> {
    return this.setItem(STORAGE_KEYS.USER_DATA, user);
  },

  async getUserData(): Promise<User | null> {
    return this.getItem(STORAGE_KEYS.USER_DATA);
  },

  async setSettings(settings: Settings): Promise<void> {
    return this.setItem(STORAGE_KEYS.SETTINGS, settings);
  },

  async getSettings(): Promise<Settings | null> {
    return this.getItem(STORAGE_KEYS.SETTINGS);
  },

  async setTheme(theme: 'light' | 'dark' | 'system'): Promise<void> {
    return this.setItem(STORAGE_KEYS.THEME, theme);
  },

  async getTheme(): Promise<'light' | 'dark' | 'system' | null> {
    return this.getItem(STORAGE_KEYS.THEME);
  },

  async setLanguage(language: string): Promise<void> {
    return this.setItem(STORAGE_KEYS.LANGUAGE, language);
  },

  async getLanguage(): Promise<string | null> {
    return this.getItem(STORAGE_KEYS.LANGUAGE);
  },

  // Método para limpiar datos de autenticación
  async clearAuthData(): Promise<void> {
    await Promise.all([
      this.removeItem(STORAGE_KEYS.AUTH_TOKEN),
      this.removeItem(STORAGE_KEYS.USER_DATA),
    ]);
  },
}; 