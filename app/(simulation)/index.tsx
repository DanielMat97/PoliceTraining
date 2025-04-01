import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Simulation {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  completed: boolean;
  image: any;
}

// Datos de ejemplo para las simulaciones
const simulations: Simulation[] = [
  {
    id: "1",
    title: "Atención a Emergencia",
    description: "Simula una situación de emergencia y toma decisiones críticas",
    difficulty: "Intermedio",
    duration: "10 min",
    completed: true,
    image: require("../../assets/images/emergency.png"),
  },
  {
    id: "2",
    title: "Control de Multitudes",
    description: "Practica técnicas de control de multitudes en diferentes escenarios",
    difficulty: "Avanzado",
    duration: "15 min",
    completed: false,
    image: require("../../assets/images/crowd.png"),
  },
  {
    id: "3",
    title: "Entrevista a Testigo",
    description: "Realiza una entrevista efectiva a un testigo de un incidente",
    difficulty: "Básico",
    duration: "8 min",
    completed: false,
    image: require("../../assets/images/interview.png"),
  },
  {
    id: "4",
    title: "Manejo de Crisis",
    description: "Gestiona una situación de crisis con múltiples variables",
    difficulty: "Avanzado",
    duration: "20 min",
    completed: false,
    image: require("../../assets/images/crisis.png"),
  },
];

export default function SimulationsScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const renderSimulationCard = ({ item }: { item: Simulation }) => (
    <TouchableOpacity
      style={[
        styles.simulationCard,
        {
          backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
        },
      ]}
      onPress={() => router.push(`/(simulation)/${item.id}`)}
    >
      <Image source={item.image} style={styles.simulationImage} />
      <View style={styles.simulationInfo}>
        <View style={styles.simulationHeader}>
          <Text
            style={[
              styles.simulationTitle,
              {
                color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
              },
            ]}
          >
            {item.title}
          </Text>
          {item.completed && (
            <View style={styles.completedBadge}>
              <Ionicons name="checkmark-circle" size={16} color="#0a7ea4" />
              <Text style={styles.completedText}>Completado</Text>
            </View>
          )}
        </View>
        <Text
          style={[
            styles.simulationDescription,
            {
              color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
            },
          ]}
        >
          {item.description}
        </Text>
        <View style={styles.simulationMeta}>
          <View style={styles.metaItem}>
            <Ionicons
              name="time-outline"
              size={16}
              color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
            />
            <Text
              style={[
                styles.metaText,
                {
                  color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
                },
              ]}
            >
              {item.duration}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons
              name="speedometer-outline"
              size={16}
              color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
            />
            <Text
              style={[
                styles.metaText,
                {
                  color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
                },
              ]}
            >
              {item.difficulty}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      <FlatList
        data={simulations}
        renderItem={renderSimulationCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
  },
  simulationCard: {
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  simulationImage: {
    width: 120,
    height: 120,
  },
  simulationInfo: {
    flex: 1,
    padding: 16,
  },
  simulationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  simulationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  completedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F7FF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  completedText: {
    color: "#0a7ea4",
    fontSize: 12,
    marginLeft: 4,
  },
  simulationDescription: {
    fontSize: 14,
    marginBottom: 12,
  },
  simulationMeta: {
    flexDirection: "row",
    gap: 16,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 14,
  },
}); 