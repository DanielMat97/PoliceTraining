import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Course } from '@/util/types';

export const useCourses = (initialPage: number = 1, limit: number = 10) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    fetchCourses();
  }, [page]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.getCourses(page, limit);
      if (response.data) {
        const { items, total: totalItems, hasMore: hasMoreItems } = response.data;
        setCourses(prev => page === 1 ? items : [...prev, ...items]);
        setTotal(totalItems);
        setHasMore(hasMoreItems);
      }
    } catch (err: any) {
      setError(err.message || 'Error al cargar los cursos');
    } finally {
      setLoading(false);
    }
  };

  const refreshCourses = () => {
    setPage(1);
    fetchCourses();
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev: number) => prev + 1);
    }
  };

  return {
    courses,
    loading,
    error,
    hasMore,
    total,
    refreshCourses,
    loadMore,
  };
};

export const useCourse = (id: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.getCourseById(id);
      if (response.data) {
        setCourse(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Error al cargar el curso');
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (lessonId: string) => {
    try {
      setLoading(true);
      setError(null);

      // Aquí iría la llamada a la API para actualizar el progreso
      // Por ahora solo actualizamos el estado local
      if (course) {
        const updatedCourse = {
          ...course,
          completedLessons: course.completedLessons + 1,
          progress: ((course.completedLessons + 1) / course.totalLessons) * 100,
        };
        setCourse(updatedCourse);
      }
    } catch (err: any) {
      setError(err.message || 'Error al actualizar el progreso');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    course,
    loading,
    error,
    updateProgress,
  };
}; 