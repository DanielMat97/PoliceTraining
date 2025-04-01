import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

// Datos de ejemplo para el curso
const courseData = {
  "1": {
    title: "Manejo del Estrés",
    description: "Técnicas para gestionar el estrés en el servicio policial",
    difficulty: "Básico",
    duration: "15 min",
    progress: 100,
    image: require("../../assets/images/stress.png"),
    modules: [
      {
        id: "1",
        title: "Introducción al Estrés",
        description: "Conceptos básicos y tipos de estrés",
        duration: "5 min",
        completed: true,
      },
      {
        id: "2",
        title: "Técnicas de Respiración",
        description: "Ejercicios prácticos de respiración",
        duration: "5 min",
        completed: true,
      },
      {
        id: "3",
        title: "Gestión Emocional",
        description: "Estrategias para manejar emociones",
        duration: "5 min",
        completed: true,
      },
    ],
  },
  "2": {
    title: "Aplicación del SITAB",
    description: "Protocolos y procedimientos del Sistema de Información Táctico",
    difficulty: "Intermedio",
    duration: "30 min",
    progress: 60,
    image: require("../../assets/images/sitab.png"),
    modules: [
      {
        id: "1",
        title: "Introducción al SITAB",
        description: "Conceptos básicos del sistema",
        duration: "10 min",
        completed: true,
      },
      {
        id: "2",
        title: "Procedimientos Básicos",
        description: "Operaciones fundamentales",
        duration: "10 min",
        completed: true,
      },
      {
        id: "3",
        title: "Casos Especiales",
        description: "Manejo de situaciones específicas",
        duration: "10 min",
        completed: false,
      },
    ],
  },
};

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const course = courseData[id as keyof typeof courseData];

  if (!course) {
    return (
      <View style={styles.container}>
        <Text>Curso no encontrado</Text>
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
      <Image source={course.image} style={styles.courseImage} />
      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          {course.title}
        </Text>
        <Text
          style={[
            styles.description,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          {course.description}
        </Text>
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons
              name="time-outline"
              size={16}
              color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
            />
            <Text
              style={[
                styles.metaText,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {course.duration}
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
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {course.difficulty}
            </Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${course.progress}%` }]}
            />
          </View>
          <Text
            style={[
              styles.progressText,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            {course.progress}% completado
          </Text>
        </View>
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          Módulos del Curso
        </Text>
        {course.modules.map((module) => (
          <TouchableOpacity
            key={module.id}
            style={[
              styles.moduleCard,
              {
                backgroundColor:
                  colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
              },
            ]}
            onPress={() => router.push(`/(course)/${id}/module/${module.id}`)}
          >
            <View style={styles.moduleHeader}>
              <View style={styles.moduleIcon}>
                <Ionicons
                  name={module.completed ? "checkmark-circle" : "ellipse-outline"}
                  size={24}
                  color={module.completed ? "#0a7ea4" : "#9BA1A6"}
                />
              </View>
              <View style={styles.moduleInfo}>
                <Text
                  style={[
                    styles.moduleTitle,
                    {
                      color:
                        colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                    },
                  ]}
                >
                  {module.title}
                </Text>
                <Text
                  style={[
                    styles.moduleDescription,
                    {
                      color:
                        colorScheme === "dark" ? "#9BA1A6" : "#687076",
                    },
                  ]}
                >
                  {module.description}
                </Text>
              </View>
            </View>
            <View style={styles.moduleMeta}>
              <Ionicons
                name="time-outline"
                size={16}
                color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
              />
              <Text
                style={[
                  styles.moduleDuration,
                  {
                    color:
                      colorScheme === "dark" ? "#9BA1A6" : "#687076",
                  },
                ]}
              >
                {module.duration}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  courseImage: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
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
    marginBottom: 24,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#0a7ea4",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  moduleCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  moduleHeader: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
  },
  moduleIcon: {
    justifyContent: "center",
  },
  moduleInfo: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
  },
  moduleMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  moduleDuration: {
    fontSize: 14,
  },
}); 