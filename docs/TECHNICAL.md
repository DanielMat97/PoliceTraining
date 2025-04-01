# Documentación Técnica - PoliceTrainingApp

## Arquitectura de la Aplicación

### Estructura de Navegación

La aplicación utiliza Expo Router para la navegación, implementando un sistema de rutas basado en archivos:

```typescript
app/
├── (auth)/           // Rutas de autenticación
├── (tabs)/           // Navegación principal con tabs
├── (modals)/         // Pantallas modales
├── (course)/         // Módulo de cursos
├── (simulation)/     // Módulo de simulaciones
└── _layout.tsx       // Layout principal
```

### Componentes Principales

#### Layout Principal (`app/_layout.tsx`)
- Implementa la navegación principal usando `Stack` de Expo Router
- Configura el tema global (claro/oscuro)
- Define las opciones de navegación para cada ruta

#### Navegación por Tabs (`app/(tabs)/_layout.tsx`)
- Implementa la navegación inferior con 5 tabs principales
- Utiliza `Tabs` de Expo Router
- Configura iconos y estilos para cada tab

### Gestión de Estado

La aplicación utiliza estados locales con `useState` para:
- Autenticación
- Preferencias de usuario
- Progreso de cursos
- Estado de simulaciones

### Temas y Estilos

#### Sistema de Temas
- Implementa modo claro/oscuro usando `useColorScheme`
- Define paleta de colores consistente:
  ```typescript
  {
    primary: '#0a7ea4',
    background: {
      light: '#fff',
      dark: '#151718'
    },
    text: {
      light: '#11181C',
      dark: '#ECEDEE'
    }
  }
  ```

#### Estilos
- Utiliza `StyleSheet` de React Native
- Implementa diseño responsive
- Mantiene consistencia en espaciado y tipografía

### Tipos y Interfaces

```typescript
interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  progress: number;
  image: any;
}

interface Simulation {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  completed: boolean;
  image: any;
}

interface ProgressItem {
  id: string;
  title: string;
  type: "course" | "simulation";
  progress: number;
  lastActivity: string;
  status: "completed" | "in_progress" | "not_started";
}
```

### Componentes Reutilizables

#### SettingItem
```typescript
const renderSettingItem = (
  icon: string,
  title: string,
  description: string,
  type: "toggle" | "navigation",
  value?: boolean,
  onValueChange?: (value: boolean) => void,
  onPress?: () => void
) => {
  // Implementación del componente
}
```

#### ProgressCard
```typescript
const renderProgressItem = (item: ProgressItem) => {
  // Implementación del componente
}
```

### Manejo de Rutas

La aplicación utiliza rutas dinámicas para:
- Detalles de cursos: `/(course)/[id]`
- Detalles de módulos: `/(course)/[id]/module/[moduleId]`
- Detalles de simulaciones: `/(simulation)/[id]`

### Optimizaciones

1. **Rendimiento**
   - Uso de `FlatList` para listas largas
   - Lazy loading de imágenes
   - Memoización de componentes cuando es necesario

2. **Accesibilidad**
   - Soporte para lectores de pantalla
   - Contraste adecuado en modo oscuro
   - Tamaños de texto legibles

3. **UX/UI**
   - Feedback visual en interacciones
   - Animaciones suaves
   - Diseño consistente

### Próximas Mejoras Técnicas

1. Implementar un sistema de gestión de estado global (Redux/Context)
2. Añadir pruebas unitarias y de integración
3. Implementar caché local para datos offline
4. Mejorar la tipificación de datos
5. Implementar sistema de logs y monitoreo 