import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Course {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  progress: number;
  image: any;
}

// Datos de ejemplo para los cursos
const courses: Course[] = [
  {
    id: "1",
    title: "Manejo del Estrés",
    description: "Técnicas para gestionar el estrés en el servicio policial",
    difficulty: "Básico",
    duration: "15 min",
    progress: 100,
    image: require("../../assets/images/stress.png"),
  },
  {
    id: "2",
    title: "Aplicación del SITAB",
    description: "Protocolos y procedimientos del Sistema de Información Táctico",
    difficulty: "Intermedio",
    duration: "30 min",
    progress: 60,
    image: require("../../assets/images/sitab.png"),
  },
  {
    id: "3",
    title: "Atención Ciudadana",
    description: "Mejores prácticas en la interacción con la comunidad",
    difficulty: "Básico",
    duration: "20 min",
    progress: 0,
    image: require("../../assets/images/citizen.png"),
  },
  {
    id: "4",
    title: "Control de Multitudes",
    description: "Estrategias para el manejo de aglomeraciones",
    difficulty: "Avanzado",
    duration: "45 min",
    progress: 0,
    image: require("../../assets/images/crowd.png"),
  },
];

export default function CoursesScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const renderCourseCard = ({ item }: { item: Course }) => (
    <TouchableOpacity
      style={[
        styles.courseCard,
        {
          backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
        },
      ]}
      onPress={() => router.push(`/(course)/${item.id}`)}
    >
      <Image source={item.image} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text
          style={[
            styles.courseTitle,
            {
              color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
            },
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.courseDescription,
            {
              color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
            },
          ]}
        >
          {item.description}
        </Text>
        <View style={styles.courseMeta}>
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
        {item.progress > 0 && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
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
                {
                  color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
                },
              ]}
            >
              {item.progress}% completado
            </Text>
          </View>
        )}
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
        data={courses}
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
  courseImage: {
    width: 120,
    height: 120,
  },
  courseInfo: {
    flex: 1,
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    marginBottom: 12,
  },
  courseMeta: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 14,
  },
  progressContainer: {
    gap: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#0a7ea4",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
  },
}); 