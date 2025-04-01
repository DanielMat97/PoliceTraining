import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Achievement } from '@/util/types';

interface ProgressData {
  coursesProgress: {
    total: number;
    completed: number;
    inProgress: number;
    percentage: number;
  };
  simulationsProgress: {
    total: number;
    completed: number;
    inProgress: number;
    percentage: number;
  };
  achievements: Achievement[];
  monthlyActivity: {
    date: string;
    courses: number;
    simulations: number;
  }[];
}

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.getProgress();
      if (response.data) {
        setProgress(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Error al cargar el progreso');
    } finally {
      setLoading(false);
    }
  };

  const refreshProgress = () => {
    fetchProgress();
  };

  const getAchievementProgress = (achievementId: string) => {
    if (!progress) return null;
    return progress.achievements.find(a => a.id === achievementId);
  };

  const getMonthlyActivity = (month: number, year: number) => {
    if (!progress) return null;
    return progress.monthlyActivity.find(
      activity => {
        const [activityYear, activityMonth] = activity.date.split('-').map(Number);
        return activityYear === year && activityMonth === month;
      }
    );
  };

  const getOverallProgress = () => {
    if (!progress) return 0;

    const coursesWeight = 0.6;
    const simulationsWeight = 0.4;

    return Math.round(
      (progress.coursesProgress.percentage * coursesWeight) +
      (progress.simulationsProgress.percentage * simulationsWeight)
    );
  };

  return {
    progress,
    loading,
    error,
    refreshProgress,
    getAchievementProgress,
    getMonthlyActivity,
    getOverallProgress,
  };
}; 