export const APP_NAME = 'Police Training';
export const APP_VERSION = '1.0.0';
export const APP_BUILD = '1';

export const API_URL = __DEV__ 
  ? 'http://localhost:3000/api'
  : 'https://api.policetraining.com/api';

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
  SETTINGS: '@settings',
  THEME: '@theme',
  LANGUAGE: '@language',
};

export const ROUTES = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },
  MAIN: {
    HOME: '/',
    COURSES: '/courses',
    SIMULATIONS: '/simulations',
    PROGRESS: '/progress',
    PROFILE: '/profile',
  },
  COURSE: {
    DETAIL: '/course/:id',
    LESSON: '/course/:id/lesson/:lessonId',
    QUIZ: '/course/:id/quiz/:quizId',
  },
  SIMULATION: {
    DETAIL: '/simulation/:id',
    PLAY: '/simulation/:id/play',
    RESULTS: '/simulation/:id/results',
  },
};

export const DIFFICULTY_LEVELS = {
  BASIC: 'básico',
  INTERMEDIATE: 'intermedio',
  ADVANCED: 'avanzado',
} as const;

export const SIMULATION_TYPES = {
  SITUATIONAL: 'situacional',
  TECHNICAL: 'técnica',
  EVALUATIVE: 'evaluativa',
} as const;

export const NOTIFICATION_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  INSTRUCTOR: 'instructor',
  STUDENT: 'student',
} as const;

export const SETTINGS = {
  FONT_SIZES: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
  },
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
  },
  LANGUAGES: {
    ES: 'es',
    EN: 'en',
  },
};

export const ACHIEVEMENTS = {
  COURSE_COMPLETION: {
    id: 'course_completion',
    title: 'Completador de Cursos',
    description: 'Completa un curso',
    icon: '🎓',
  },
  SIMULATION_MASTER: {
    id: 'simulation_master',
    title: 'Maestro de Simulaciones',
    description: 'Completa 5 simulaciones',
    icon: '🏆',
  },
  PERFECT_SCORE: {
    id: 'perfect_score',
    title: 'Puntuación Perfecta',
    description: 'Obtén 100% en una evaluación',
    icon: '💯',
  },
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Por favor, verifica tu conexión a internet.',
  SERVER_ERROR: 'Error del servidor. Por favor, intenta más tarde.',
  UNAUTHORIZED: 'No autorizado. Por favor, inicia sesión.',
  FORBIDDEN: 'Acceso denegado.',
  NOT_FOUND: 'Recurso no encontrado.',
  VALIDATION_ERROR: 'Por favor, verifica los datos ingresados.',
  UNKNOWN_ERROR: 'Ha ocurrido un error inesperado.',
};

export const SUCCESS_MESSAGES = {
  LOGIN: 'Inicio de sesión exitoso.',
  REGISTER: 'Registro exitoso.',
  PASSWORD_RESET: 'Contraseña restablecida exitosamente.',
  COURSE_COMPLETED: '¡Felicitaciones! Has completado el curso.',
  SIMULATION_COMPLETED: '¡Felicitaciones! Has completado la simulación.',
  SETTINGS_UPDATED: 'Configuración actualizada exitosamente.',
}; 