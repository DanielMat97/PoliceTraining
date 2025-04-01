import { ERROR_MESSAGES } from '@/util/constants';
import { useState, useCallback } from 'react';
import { Alert } from 'react-native';

interface ErrorState {
  message: string;
  code?: string;
  details?: Record<string, any>;
}

export const useErrorHandler = () => {
  const [error, setError] = useState<ErrorState | null>(null);

  const handleError = useCallback((err: any) => {
    const errorMessage = err.message || ERROR_MESSAGES.UNKNOWN_ERROR;
    const errorCode = err.code;
    const errorDetails = err.details;

    setError({
      message: errorMessage,
      code: errorCode,
      details: errorDetails,
    });

    // Mostrar alerta al usuario
    Alert.alert(
      'Error',
      errorMessage,
      [
        {
          text: 'OK',
          onPress: () => setError(null),
        },
      ]
    );

    // Aquí podrías agregar lógica adicional como:
    // - Enviar el error a un servicio de monitoreo
    // - Registrar el error en el historial
    // - Manejar casos específicos de error
    if (errorCode === '401') {
      // Manejar error de autenticación
      // Por ejemplo, redirigir al login
    } else if (errorCode === '403') {
      // Manejar error de permisos
    } else if (errorCode === '404') {
      // Manejar error de recurso no encontrado
    } else if (errorCode === '500') {
      // Manejar error del servidor
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const isNetworkError = useCallback((err: any) => {
    return err.message?.includes('network') || err.message?.includes('conexión');
  }, []);

  const isAuthError = useCallback((err: any) => {
    return err.code === '401' || err.code === '403';
  }, []);

  const isServerError = useCallback((err: any) => {
    return err.code === '500' || err.code === '502' || err.code === '503' || err.code === '504';
  }, []);

  const isValidationError = useCallback((err: any) => {
    return err.code === '400' || err.message?.includes('validación');
  }, []);

  return {
    error,
    handleError,
    clearError,
    isNetworkError,
    isAuthError,
    isServerError,
    isValidationError,
  };
}; 