import { Stack } from "expo-router";

export default function SimulationLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Simulaciones",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Simulación",
        }}
      />
    </Stack>
  );
} 