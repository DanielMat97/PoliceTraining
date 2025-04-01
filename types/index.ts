// Tipos para los cursos
export interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  progress: number;
  image: any;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  content: ModuleContent[];
}

export type ModuleContent = TextContent | ImageContent | ListContent;

export interface TextContent {
  type: "text";
  content: string;
}

export interface ImageContent {
  type: "image";
  source: any;
  caption?: string;
}

export interface ListContent {
  type: "list";
  title?: string;
  items: string[];
}

// Tipos para las simulaciones
export interface Simulation {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  completed: boolean;
  image: any;
  scenario: string;
  objectives: string[];
  lastAttempt?: {
    date: string;
    score: number;
    feedback: string;
  };
}

// Tipos para el perfil
export interface Profile {
  id: string;
  name: string;
  rank: string;
  badge: string;
  station: string;
  experience: number;
  coursesCompleted: number;
  simulationsCompleted: number;
  totalPoints: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

// Tipos para las evaluaciones
export interface Quiz {
  id: string;
  title: string;
  description: string;
  duration: string;
  questions: Question[];
  completed: boolean;
  score?: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Tipos para las notificaciones
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  date: string;
  read: boolean;
} 