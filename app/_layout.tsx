import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
        },
        headerTintColor: colorScheme === "dark" ? "#fff" : "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(modals)"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(course)"
        options={{
          headerTitle: "Detalle del Curso",
        }}
      />
      <Stack.Screen
        name="(simulation)"
        options={{
          headerTitle: "Simulación",
        }}
      />
      <Stack.Screen
        name="(quiz)"
        options={{
          headerTitle: "Evaluación",
        }}
      />
      <Stack.Screen
        name="(feedback)"
        options={{
          headerTitle: "Retroalimentación",
        }}
      />
      <Stack.Screen
        name="(notifications)"
        options={{
          headerTitle: "Notificaciones",
        }}
      />
    </Stack>
  );
} 