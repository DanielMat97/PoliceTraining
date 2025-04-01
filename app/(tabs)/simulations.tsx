import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function SimulationsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Simulaciones</Text>
      <Pressable
        onPress={() => router.push('/(modals)/settings')}
        style={{
          padding: 10,
          backgroundColor: '#007AFF',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff' }}>Abrir Configuración</Text>
      </Pressable>
    </View>
  );
} 