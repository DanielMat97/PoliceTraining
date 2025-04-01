import { useNavigation as useNavigationBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  Course: NavigatorScreenParams<CourseStackParamList>;
  Simulation: NavigatorScreenParams<SimulationStackParamList>;
};

export type AuthStackParamList = {
  'auth/login': undefined;
  'auth/register': undefined;
  'auth/forgot-password': undefined;
  'auth/reset-password': {
    token: string;
  };
};

export type MainTabParamList = {
  'main/home': undefined;
  'main/courses': undefined;
  'main/simulations': undefined;
  'main/progress': undefined;
  'main/profile': undefined;
};

export type CourseStackParamList = {
  'course/detail': {
    id: string;
  };
  'course/lesson': {
    id: string;
    lessonId: string;
  };
  'course/quiz': {
    id: string;
    quizId: string;
  };
};

export type SimulationStackParamList = {
  'simulation/detail': {
    id: string;
  };
  'simulation/play': {
    id: string;
  };
  'simulation/results': {
    id: string;
    score: number;
  };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
export type CourseStackNavigationProp = NativeStackNavigationProp<CourseStackParamList>;
export type SimulationStackNavigationProp = NativeStackNavigationProp<SimulationStackParamList>;

export const useNavigation = () => {
  const navigation = useNavigationBase<RootStackNavigationProp>();

  const navigateToAuth = () => {
    navigation.navigate('Auth', {
      screen: 'auth/login',
    });
  };

  const navigateToMain = () => {
    navigation.navigate('Main', {
      screen: 'main/home',
    });
  };

  const navigateToCourse = () => {
    navigation.navigate('Course', {
      screen: 'course/detail',
      params: { id: '' },
    });
  };

  const navigateToSimulation = () => {
    navigation.navigate('Simulation', {
      screen: 'simulation/detail',
      params: { id: '' },
    });
  };

  const navigateToLogin = () => {
    navigation.navigate('Auth', {
      screen: 'auth/login',
    });
  };

  const navigateToRegister = () => {
    navigation.navigate('Auth', {
      screen: 'auth/register',
    });
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('Auth', {
      screen: 'auth/forgot-password',
    });
  };

  const navigateToResetPassword = (token: string) => {
    navigation.navigate('Auth', {
      screen: 'auth/reset-password',
      params: { token },
    });
  };

  const navigateToHome = () => {
    navigation.navigate('Main', {
      screen: 'main/home',
    });
  };

  const navigateToCourses = () => {
    navigation.navigate('Main', {
      screen: 'main/courses',
    });
  };

  const navigateToSimulations = () => {
    navigation.navigate('Main', {
      screen: 'main/simulations',
    });
  };

  const navigateToProgress = () => {
    navigation.navigate('Main', {
      screen: 'main/progress',
    });
  };

  const navigateToProfile = () => {
    navigation.navigate('Main', {
      screen: 'main/profile',
    });
  };

  const navigateToCourseDetail = (id: string) => {
    navigation.navigate('Course', {
      screen: 'course/detail',
      params: { id },
    });
  };

  const navigateToLesson = (id: string, lessonId: string) => {
    navigation.navigate('Course', {
      screen: 'course/lesson',
      params: { id, lessonId },
    });
  };

  const navigateToQuiz = (id: string, quizId: string) => {
    navigation.navigate('Course', {
      screen: 'course/quiz',
      params: { id, quizId },
    });
  };

  const navigateToSimulationDetail = (id: string) => {
    navigation.navigate('Simulation', {
      screen: 'simulation/detail',
      params: { id },
    });
  };

  const navigateToSimulationPlay = (id: string) => {
    navigation.navigate('Simulation', {
      screen: 'simulation/play',
      params: { id },
    });
  };

  const navigateToSimulationResults = (id: string, score: number) => {
    navigation.navigate('Simulation', {
      screen: 'simulation/results',
      params: { id, score },
    });
  };

  return {
    navigation,
    navigateToAuth,
    navigateToMain,
    navigateToCourse,
    navigateToSimulation,
    navigateToLogin,
    navigateToRegister,
    navigateToForgotPassword,
    navigateToResetPassword,
    navigateToHome,
    navigateToCourses,
    navigateToSimulations,
    navigateToProgress,
    navigateToProfile,
    navigateToCourseDetail,
    navigateToLesson,
    navigateToQuiz,
    navigateToSimulationDetail,
    navigateToSimulationPlay,
    navigateToSimulationResults,
  };
}; 