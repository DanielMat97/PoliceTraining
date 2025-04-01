import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useSettings } from './useSettings';
import { Notification } from '@/util/types';

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { settings } = useSettings();

  useEffect(() => {
    if (settings.notifications.enabled) {
      fetchNotifications();
    }
  }, [settings.notifications.enabled]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get<Notification[]>('/notifications');
      if (response.data) {
        setNotifications(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Error al cargar las notificaciones');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      setLoading(true);
      setError(null);

      await api.put(`/notifications/${notificationId}/read`, {});
      setNotifications(prev =>
        prev.map(notification =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );
    } catch (err: any) {
      setError(err.message || 'Error al marcar la notificación como leída');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = async () => {
    try {
      setLoading(true);
      setError(null);

      await api.put('/notifications/read-all', {});
      setNotifications(prev =>
        prev.map(notification => ({ ...notification, read: true }))
      );
    } catch (err: any) {
      setError(err.message || 'Error al marcar todas las notificaciones como leídas');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteNotification = async (notificationId: string) => {
    try {
      setLoading(true);
      setError(null);

      await api.delete(`/notifications/${notificationId}`);
      setNotifications(prev =>
        prev.filter(notification => notification.id !== notificationId)
      );
    } catch (err: any) {
      setError(err.message || 'Error al eliminar la notificación');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearAllNotifications = async () => {
    try {
      setLoading(true);
      setError(null);

      await api.delete('/notifications/clear-all');
      setNotifications([]);
    } catch (err: any) {
      setError(err.message || 'Error al eliminar todas las notificaciones');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getUnreadCount = () => {
    return notifications.filter(notification => !notification.read).length;
  };

  const refreshNotifications = () => {
    fetchNotifications();
  };

  return {
    notifications,
    loading,
    error,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAllNotifications,
    getUnreadCount,
    refreshNotifications,
  };
}; 