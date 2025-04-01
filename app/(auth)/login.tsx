import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useColorScheme } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) return;
    
    setLoading(true);
    // Simular delay de autenticación
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.title,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          Entrenamiento Policial
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          POLICE TRAINING
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
              color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
            },
          ]}
          placeholder="Número de Placa"
          placeholderTextColor={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="numeric"
        />

        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
              color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
            },
          ]}
          placeholder="Contraseña"
          placeholderTextColor={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={[
            styles.loginButton,
            (!username || !password) && styles.loginButtonDisabled,
          ]}
          onPress={handleLogin}
          disabled={loading || !username || !password}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
          )}
        </TouchableOpacity>

        <Text
          style={[
            styles.forgotPassword,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  formContainer: {
    width: "100%",
    gap: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0a7ea4",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  loginButtonDisabled: {
    backgroundColor: "#ccc",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 14,
  },
}); 