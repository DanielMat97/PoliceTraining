import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './theme';
import { ROUTES } from './constants';

// Importar pantallas
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/auth/ResetPasswordScreen';

import HomeScreen from './screens/main/HomeScreen';
import CoursesScreen from './screens/main/CoursesScreen';
import SimulationsScreen from './screens/main/SimulationsScreen';
import ProgressScreen from './screens/main/ProgressScreen';
import ProfileScreen from './screens/main/ProfileScreen';

import CourseDetailScreen from './screens/course/CourseDetailScreen';
import LessonScreen from './screens/course/LessonScreen';
import QuizScreen from './screens/course/QuizScreen';

import SimulationDetailScreen from './screens/simulation/SimulationDetailScreen';
import SimulationPlayScreen from './screens/simulation/SimulationPlayScreen';
import SimulationResultsScreen from './screens/simulation/SimulationResultsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={ROUTES.AUTH.LOGIN} component={LoginScreen} />
    <Stack.Screen name={ROUTES.AUTH.REGISTER} component={RegisterScreen} />
    <Stack.Screen name={ROUTES.AUTH.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
    <Stack.Screen name={ROUTES.AUTH.RESET_PASSWORD} component={ResetPasswordScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name={ROUTES.MAIN.HOME} component={HomeScreen} />
    <Tab.Screen name={ROUTES.MAIN.COURSES} component={CoursesScreen} />
    <Tab.Screen name={ROUTES.MAIN.SIMULATIONS} component={SimulationsScreen} />
    <Tab.Screen name={ROUTES.MAIN.PROGRESS} component={ProgressScreen} />
    <Tab.Screen name={ROUTES.MAIN.PROFILE} component={ProfileScreen} />
  </Tab.Navigator>
);

const CourseStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={ROUTES.COURSE.DETAIL} component={CourseDetailScreen} />
    <Stack.Screen name={ROUTES.COURSE.LESSON} component={LessonScreen} />
    <Stack.Screen name={ROUTES.COURSE.QUIZ} component={QuizScreen} />
  </Stack.Navigator>
);

const SimulationStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={ROUTES.SIMULATION.DETAIL} component={SimulationDetailScreen} />
    <Stack.Screen name={ROUTES.SIMULATION.PLAY} component={SimulationPlayScreen} />
    <Stack.Screen name={ROUTES.SIMULATION.RESULTS} component={SimulationResultsScreen} />
  </Stack.Navigator>
);

const RootStack = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Course" component={CourseStack} />
        <Stack.Screen name="Simulation" component={SimulationStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack; 