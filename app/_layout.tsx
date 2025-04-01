import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export const colors = {
  primary: "#0a7ea4",
  secondary: "#f4511e",
  accent: "#0a7ea4",
  background: {
    light: "#fff",
    dark: "#151718",
  },
  card: {
    light: "#F5F5F5",
    dark: "#1E1E1E",
  },
  text: {
    light: {
      primary: "#11181C",
      secondary: "#687076",
    },
    dark: {
      primary: "#ECEDEE",
      secondary: "#9BA1A6",
    },
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? colors.background.dark : colors.background.light,
        },
        headerTintColor: colorScheme === "dark" ? colors.text.dark.primary : colors.text.light.primary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="(auth)/login" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="(course)" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="(simulation)" 
        options={{ 
          headerShown: false 
        }} 
      />
    </Stack>
  );
} 