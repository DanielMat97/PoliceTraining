export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'instructor' | 'student';
  avatar?: string;
  createdAt: Date;
  lastLogin: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: 'básico' | 'intermedio' | 'avanzado';
  duration: number; // en minutos
  progress: number; // porcentaje
  image: string;
  instructor: string;
  totalLessons: number;
  completedLessons: number;
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Simulation {
  id: string;
  title: string;
  description: string;
  type: 'situacional' | 'técnica' | 'evaluativa';
  duration: number; // en minutos
  completed: boolean;
  image: string;
  difficulty: 'básico' | 'intermedio' | 'avanzado';
  score?: number;
  attempts: number;
  maxAttempts: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  total: number;
  unlockedAt?: Date;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: Date;
  link?: string;
}

export interface Settings {
  language: string;
  fontSize: 'small' | 'medium' | 'large';
  highContrast: boolean;
  notifications: {
    enabled: boolean;
    sound: boolean;
    vibration: boolean;
  };
  theme: 'light' | 'dark' | 'system';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ErrorResponse {
  code: string;
  message: string;
  details?: Record<string, any>;
} 