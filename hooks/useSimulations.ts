import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Simulation } from '@/util/types';

export const useSimulations = (initialPage: number = 1, limit: number = 10) => {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    fetchSimulations();
  }, [page]);

  const fetchSimulations = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.getSimulations(page, limit);
      if (response.data) {
        const { items, total: totalItems, hasMore: hasMoreItems } = response.data;
        setSimulations(prev => page === 1 ? items : [...prev, ...items]);
        setTotal(totalItems);
        setHasMore(hasMoreItems);
      }
    } catch (err: any) {
      setError(err.message || 'Error al cargar las simulaciones');
    } finally {
      setLoading(false);
    }
  };

  const refreshSimulations = () => {
    setPage(1);
    fetchSimulations();
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev: number) => prev + 1);
    }
  };

  return {
    simulations,
    loading,
    error,
    hasMore,
    total,
    refreshSimulations,
    loadMore,
  };
};

export const useSimulation = (id: string) => {
  const [simulation, setSimulation] = useState<Simulation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSimulation();
  }, [id]);

  const fetchSimulation = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.getSimulationById(id);
      if (response.data) {
        setSimulation(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Error al cargar la simulación');
    } finally {
      setLoading(false);
    }
  };

  const startSimulation = async () => {
    try {
      setLoading(true);
      setError(null);

      // Aquí iría la llamada a la API para iniciar la simulación
      // Por ahora solo actualizamos el estado local
      if (simulation) {
        const updatedSimulation = {
          ...simulation,
          attempts: simulation.attempts + 1,
        };
        setSimulation(updatedSimulation);
      }
    } catch (err: any) {
      setError(err.message || 'Error al iniciar la simulación');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const completeSimulation = async (score: number) => {
    try {
      setLoading(true);
      setError(null);

      // Aquí iría la llamada a la API para completar la simulación
      // Por ahora solo actualizamos el estado local
      if (simulation) {
        const updatedSimulation = {
          ...simulation,
          completed: true,
          score,
        };
        setSimulation(updatedSimulation);
      }
    } catch (err: any) {
      setError(err.message || 'Error al completar la simulación');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    simulation,
    loading,
    error,
    startSimulation,
    completeSimulation,
  };
}; 