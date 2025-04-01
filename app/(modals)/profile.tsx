import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileModal() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Profile</Text>
      <Pressable
        onPress={() => router.back()}
        style={{
          padding: 10,
          backgroundColor: '#007AFF',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: '#fff' }}>Close</Text>
      </Pressable>
    </View>
  );
} 