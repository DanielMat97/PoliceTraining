import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { colors } from "../_layout";
import type { Course } from "../../types";

const courseData: { [key: string]: Course } = {
  "1": {
    id: "1",
    title: "Mejores prácticas en la interacción con la comunidad",
    description: "Aprende técnicas efectivas para mejorar la comunicación y el servicio a la ciudadanía",
    difficulty: "Básico",
    duration: "2 horas",
    progress: 70,
    image: require("../../assets/images/citizen.png"),
    modules: [
      {
        id: "1",
        title: "Comunicación Efectiva",
        description: "Principios básicos de la comunicación con el ciudadano",
        duration: "30 minutos",
        completed: true,
        content: [
          {
            type: "text",
            content: "La comunicación efectiva es fundamental en el servicio policial. Una buena interacción con la comunidad fortalece la confianza y facilita el trabajo policial.",
          },
          {
            type: "image",
            source: require("../../assets/images/citizen.png"),
            caption: "Interacción positiva con la comunidad",
          },
        ],
      },
    ],
  },
  "2": {
    id: "2",
    title: "Manejo de Crisis",
    description: "Gestiona una situación de crisis con múltiples variables",
    difficulty: "Avanzado",
    duration: "4 horas",
    progress: 30,
    image: require("../../assets/images/crisis.png"),
    modules: [
      {
        id: "1",
        title: "Evaluación de Crisis",
        description: "Aprende a evaluar situaciones de crisis",
        duration: "45 minutos",
        completed: false,
        content: [
          {
            type: "text",
            content: "El manejo efectivo de crisis requiere una evaluación rápida y precisa de la situación, considerando múltiples variables y riesgos potenciales.",
          },
          {
            type: "image",
            source: require("../../assets/images/crisis.png"),
            caption: "Evaluación de situaciones críticas",
          },
        ],
      },
    ],
  },
  "3": {
    id: "3",
    title: "Control de Multitudes",
    description: "Estrategias para el manejo de aglomeraciones",
    difficulty: "Avanzado",
    duration: "3 horas",
    progress: 0,
    image: require("../../assets/images/crowd.png"),
    modules: [
      {
        id: "1",
        title: "Principios Básicos",
        description: "Fundamentos del control de multitudes",
        duration: "40 minutos",
        completed: false,
        content: [
          {
            type: "text",
            content: "El control efectivo de multitudes requiere un equilibrio entre la seguridad pública y el respeto a los derechos de manifestación.",
          },
          {
            type: "image",
            source: require("../../assets/images/crowd.png"),
            caption: "Técnicas de control de multitudes",
          },
        ],
      },
    ],
  },
  "4": {
    id: "4",
    title: "Atención a Emergencias",
    description: "Simula una situación de emergencia y toma decisiones críticas",
    difficulty: "Intermedio",
    duration: "2.5 horas",
    progress: 0,
    image: require("../../assets/images/emergency.png"),
    modules: [
      {
        id: "1",
        title: "Respuesta Inicial",
        description: "Protocolos de primera respuesta",
        duration: "35 minutos",
        completed: false,
        content: [
          {
            type: "text",
            content: "La respuesta inicial en una emergencia es crucial. Los primeros minutos pueden determinar el resultado de la situación.",
          },
          {
            type: "image",
            source: require("../../assets/images/emergency.png"),
            caption: "Atención de emergencias",
          },
        ],
      },
    ],
  },
  "5": {
    id: "5",
    title: "Entrevista a Testigos",
    description: "Realiza una entrevista efectiva a un testigo de un incidente",
    difficulty: "Básico",
    duration: "1.5 horas",
    progress: 0,
    image: require("../../assets/images/interview.png"),
    modules: [
      {
        id: "1",
        title: "Técnicas de Entrevista",
        description: "Metodologías efectivas de entrevista",
        duration: "30 minutos",
        completed: false,
        content: [
          {
            type: "text",
            content: "Una entrevista efectiva puede proporcionar información crucial para una investigación. Es importante mantener un ambiente profesional y empático.",
          },
          {
            type: "image",
            source: require("../../assets/images/interview.png"),
            caption: "Entrevista a testigos",
          },
        ],
      },
    ],
  },
  "6": {
    id: "6",
    title: "Sistema de Información Táctico",
    description: "Protocolos y procedimientos del Sistema de Información Táctico",
    difficulty: "Intermedio",
    duration: "2 horas",
    progress: 0,
    image: require("../../assets/images/sitab.png"),
    modules: [
      {
        id: "1",
        title: "Introducción al SITAB",
        description: "Fundamentos del Sistema de Información Táctico",
        duration: "40 minutos",
        completed: false,
        content: [
          {
            type: "text",
            content: "El Sistema de Información Táctico es una herramienta fundamental para la toma de decisiones operativas y estratégicas.",
          },
          {
            type: "image",
            source: require("../../assets/images/sitab.png"),
            caption: "Sistema SITAB",
          },
        ],
      },
    ],
  },
  "7": {
    id: "7",
    title: "Manejo del Estrés",
    description: "Aprende técnicas efectivas para manejar el estrés en situaciones críticas",
    difficulty: "Básico",
    duration: "2 horas",
    progress: 0,
    image: require("../../assets/images/stress.png"),
    modules: [
      {
        id: "1",
        title: "Tipos de Estrés",
        description: "Identificación y comprensión de los diferentes tipos de estrés",
        duration: "30 minutos",
        completed: false,
        content: [
          {
            type: "text",
            content: "El estrés puede manifestarse de diferentes formas en el trabajo policial. Es importante identificar y manejar cada tipo adecuadamente.",
          },
          {
            type: "image",
            source: require("../../assets/images/stress-types.png"),
            caption: "Tipos de estrés y sus efectos",
          },
          {
            type: "list",
            title: "Tipos principales de estrés:",
            items: [
              "Estrés laboral",
              "Estrés emocional",
              "Estrés físico",
              "Estrés acumulativo",
            ],
          },
        ],
      },
    ],
  },
};

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const router = useRouter();
  
  const course = courseData[id as string];
  
  if (!course) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Curso no encontrado</Text>
      </View>
    );
  }

  const renderModuleCard = (module: Course["modules"][0], index: number) => (
    <TouchableOpacity
      key={module.id}
      style={[
        styles.moduleCard,
        { backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5" },
      ]}
      onPress={() => router.push(`/(course)/${id}/module/${module.id}`)}
    >
      <View style={styles.moduleHeader}>
        <View style={styles.moduleNumberContainer}>
          <Text style={styles.moduleNumber}>{index + 1}</Text>
        </View>
        <View style={styles.moduleTitleContainer}>
          <Text
            style={[
              styles.moduleTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {module.title}
          </Text>
          <Text
            style={[
              styles.moduleDuration,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            {module.duration}
          </Text>
        </View>
        {module.completed ? (
          <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
        ) : (
          <Ionicons name="chevron-forward" size={24} color="#687076" />
        )}
      </View>
      <Text
        style={[
          styles.moduleDescription,
          { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
        ]}
      >
        {module.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      <Image source={course.image} style={styles.courseImage} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text
            style={[
              styles.title,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {course.title}
          </Text>
          <View
            style={[
              styles.difficultyBadge,
              {
                backgroundColor:
                  course.difficulty === "Básico"
                    ? "#4CAF50"
                    : course.difficulty === "Intermedio"
                    ? "#FFA000"
                    : "#F44336",
              },
            ]}
          >
            <Text style={styles.difficultyText}>{course.difficulty}</Text>
          </View>
        </View>
        <Text
          style={[
            styles.description,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          {course.description}
        </Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicons name="time-outline" size={20} color="#687076" />
            <Text
              style={[
                styles.statText,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {course.duration}
            </Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="book-outline" size={20} color="#687076" />
            <Text
              style={[
                styles.statText,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {course.modules.length} módulos
            </Text>
          </View>
          <View style={styles.stat}>
            <Ionicons name="trophy-outline" size={20} color="#687076" />
            <Text
              style={[
                styles.statText,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {course.progress}% completado
            </Text>
          </View>
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
              style={[styles.progressFill, { width: `${course.progress}%` }]}
            />
          </View>
        </View>
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          Módulos del Curso
        </Text>
        <View style={styles.modulesList}>
          {course.modules.map((module, index) => renderModuleCard(module, index))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#F44336",
  },
  courseImage: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
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
  description: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
  },
  statText: {
    marginLeft: 4,
    fontSize: 14,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modulesList: {
    gap: 12,
  },
  moduleCard: {
    borderRadius: 12,
    padding: 16,
  },
  moduleHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  moduleNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  moduleNumber: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  moduleTitleContainer: {
    flex: 1,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  moduleDuration: {
    fontSize: 14,
  },
  moduleDescription: {
    fontSize: 14,
    marginLeft: 44,
  },
}); 