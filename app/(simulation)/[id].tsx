import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

interface Simulation {
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
    time: string;
  };
}

const simulationData: { [key: string]: Simulation } = {
  "1": {
    id: "1",
    title: "Atención a Ciudadanos",
    description: "Practica tus habilidades de comunicación y atención al ciudadano en diferentes escenarios.",
    difficulty: "Intermedio",
    duration: "15 min",
    completed: false,
    image: require("../../assets/images/citizen.png"),
    scenario: "Te encuentras en una comisaría local atendiendo a varios ciudadanos con diferentes necesidades y quejas. Debes manejar cada situación de manera profesional y efectiva.",
    objectives: [
      "Mantener la calma y profesionalismo",
      "Escuchar activamente al ciudadano",
      "Identificar la raíz del problema",
      "Proponer soluciones efectivas",
      "Documentar adecuadamente el caso"
    ],
  },
  "2": {
    id: "2",
    title: "Control de Multitudes",
    description: "Aprende técnicas efectivas para el control y manejo de multitudes en situaciones de alta tensión.",
    difficulty: "Avanzado",
    duration: "20 min",
    completed: true,
    image: require("../../assets/images/crowd.png"),
    scenario: "Una manifestación pacífica ha comenzado a escalar en tensión. Debes coordinar con tu equipo para mantener el orden y la seguridad.",
    objectives: [
      "Evaluar el nivel de riesgo",
      "Coordinar con el equipo",
      "Implementar protocolos de seguridad",
      "Mantener la comunicación efectiva",
      "Documentar incidentes"
    ],
    lastAttempt: {
      date: "2024-03-15",
      score: 85,
      time: "18:30"
    }
  }
};

export default function SimulationDetailScreen() {
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const simulation = simulationData[id as string];

  if (!simulation) {
    return (
      <View style={styles.container}>
        <Text>Simulación no encontrada</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={colorScheme === "dark" ? "#ECEDEE" : "#11181C"}
          />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text
            style={[
              styles.title,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {simulation.title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            {simulation.description}
          </Text>
        </View>
      </View>

      <Image source={simulation.image} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={20} color="#0a7ea4" />
            <Text
              style={[
                styles.infoText,
                { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
              ]}
            >
              {simulation.duration}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="speedometer-outline" size={20} color="#0a7ea4" />
            <Text
              style={[
                styles.infoText,
                { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
              ]}
            >
              {simulation.difficulty}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            Escenario
          </Text>
          <Text
            style={[
              styles.sectionText,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            {simulation.scenario}
          </Text>
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            Objetivos
          </Text>
          {simulation.objectives.map((objective, index) => (
            <View key={index} style={styles.objectiveItem}>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color="#0a7ea4"
                style={styles.objectiveIcon}
              />
              <Text
                style={[
                  styles.objectiveText,
                  { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
                ]}
              >
                {objective}
              </Text>
            </View>
          ))}
        </View>

        {simulation.lastAttempt && (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
              ]}
            >
              Último Intento
            </Text>
            <View style={styles.lastAttemptContainer}>
              <View style={styles.lastAttemptItem}>
                <Text
                  style={[
                    styles.lastAttemptLabel,
                    { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
                  ]}
                >
                  Fecha
                </Text>
                <Text
                  style={[
                    styles.lastAttemptValue,
                    { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
                  ]}
                >
                  {simulation.lastAttempt.date}
                </Text>
              </View>
              <View style={styles.lastAttemptItem}>
                <Text
                  style={[
                    styles.lastAttemptLabel,
                    { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
                  ]}
                >
                  Puntuación
                </Text>
                <Text
                  style={[
                    styles.lastAttemptValue,
                    { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
                  ]}
                >
                  {simulation.lastAttempt.score}%
                </Text>
              </View>
              <View style={styles.lastAttemptItem}>
                <Text
                  style={[
                    styles.lastAttemptLabel,
                    { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
                  ]}
                >
                  Tiempo
                </Text>
                <Text
                  style={[
                    styles.lastAttemptValue,
                    { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
                  ]}
                >
                  {simulation.lastAttempt.time}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.startButton,
          {
            backgroundColor: simulation.completed ? "#0a7ea4" : "#E0E0E0",
          },
        ]}
        disabled={simulation.completed}
      >
        <Text style={styles.startButtonText}>
          {simulation.completed ? "Simulación Completada" : "Iniciar Simulación"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  objectiveItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  objectiveIcon: {
    marginRight: 8,
  },
  objectiveText: {
    fontSize: 16,
    flex: 1,
  },
  lastAttemptContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 8,
  },
  lastAttemptItem: {
    alignItems: "center",
  },
  lastAttemptLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  lastAttemptValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  startButton: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  startButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
}); 