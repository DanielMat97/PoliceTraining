import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { colors } from "../_layout";
import type { Course } from "../../types";

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Mejores prácticas en la interacción con la comunidad",
    description: "Aprende técnicas efectivas para mejorar la comunicación y el servicio a la ciudadanía",
    difficulty: "Básico",
    duration: "2 horas",
    progress: 70,
    image: require("../../assets/images/citizen.png"),
    modules: [],
  },
  {
    id: "2",
    title: "Manejo de Crisis",
    description: "Gestiona una situación de crisis con múltiples variables",
    difficulty: "Avanzado",
    duration: "4 horas",
    progress: 30,
    image: require("../../assets/images/crisis.png"),
    modules: [],
  },
  {
    id: "3",
    title: "Control de Multitudes",
    description: "Estrategias para el manejo de aglomeraciones",
    difficulty: "Avanzado",
    duration: "3 horas",
    progress: 0,
    image: require("../../assets/images/crowd.png"),
    modules: [],
  },
  {
    id: "4",
    title: "Atención a Emergencias",
    description: "Simula una situación de emergencia y toma decisiones críticas",
    difficulty: "Intermedio",
    duration: "2.5 horas",
    progress: 0,
    image: require("../../assets/images/emergency.png"),
    modules: [],
  },
  {
    id: "5",
    title: "Entrevista a Testigos",
    description: "Realiza una entrevista efectiva a un testigo de un incidente",
    difficulty: "Básico",
    duration: "1.5 horas",
    progress: 0,
    image: require("../../assets/images/interview.png"),
    modules: [],
  },
  {
    id: "6",
    title: "Sistema de Información Táctico",
    description: "Protocolos y procedimientos del Sistema de Información Táctico",
    difficulty: "Intermedio",
    duration: "2 horas",
    progress: 0,
    image: require("../../assets/images/sitab.png"),
    modules: [],
  },
  {
    id: "7",
    title: "Manejo del Estrés",
    description: "Aprende técnicas efectivas para manejar el estrés en situaciones críticas",
    difficulty: "Básico",
    duration: "2 horas",
    progress: 0,
    image: require("../../assets/images/stress.png"),
    modules: [],
  },
];

export default function CoursesScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const renderCourseCard = ({ item }: { item: Course }) => (
    <TouchableOpacity
      style={[
        styles.courseCard,
        { backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5" },
      ]}
      onPress={() => router.push(`/(course)/${item.id}`)}
    >
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <View style={styles.courseHeader}>
          <Text
            style={[
              styles.courseTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {item.title}
          </Text>
          <View
            style={[
              styles.difficultyBadge,
              {
                backgroundColor:
                  item.difficulty === "Básico"
                    ? "#4CAF50"
                    : item.difficulty === "Intermedio"
                    ? "#FFA000"
                    : "#F44336",
              },
            ]}
          >
            <Text style={styles.difficultyText}>{item.difficulty}</Text>
          </View>
        </View>
        <Text
          style={[
            styles.courseDescription,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          {item.description}
        </Text>
        <View style={styles.courseFooter}>
          <View style={styles.courseStats}>
            <Ionicons name="time-outline" size={16} color="#687076" />
            <Text
              style={[
                styles.courseStatsText,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {item.duration}
            </Text>
          </View>
          <View style={styles.progressContainer}>
            <View
              style={[
                styles.progressBar,
                {
                  backgroundColor: colorScheme === "dark" ? "#2D2D2D" : "#E0E0E0",
                },
              ]}
            >
              <View
                style={[
                  styles.progressFill,
                  { width: `${item.progress}%` },
                ]}
              />
            </View>
            <Text
              style={[
                styles.progressText,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {item.progress}%
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
        data={mockCourses}
        renderItem={renderCourseCard}
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
  courseCard: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
  },
  courseImage: {
    width: "100%",
    height: 160,
  },
  courseInfo: {
    padding: 16,
  },
  courseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginRight: 8,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  courseDescription: {
    fontSize: 14,
    marginBottom: 16,
  },
  courseFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  courseStatsText: {
    marginLeft: 4,
    fontSize: 14,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    width: 100,
    height: 4,
    borderRadius: 2,
    marginRight: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    minWidth: 35,
  },
}); 