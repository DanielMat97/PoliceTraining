import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

// Interfaces para el contenido del módulo
interface TextContent {
  type: "text";
  content: string;
}

interface ImageContent {
  type: "image";
  source: any;
  caption: string;
}

interface ListContent {
  type: "list";
  items: string[];
}

type ModuleContent = TextContent | ImageContent | ListContent;

interface Module {
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  content: ModuleContent[];
}

interface CourseModules {
  [key: string]: Module;
}

interface ModuleData {
  [key: string]: CourseModules;
}

// Datos de ejemplo para los módulos
const moduleData: ModuleData = {
  "1": {
    "1": {
      title: "Introducción al Estrés",
      description: "Conceptos básicos y tipos de estrés",
      duration: "5 min",
      completed: true,
      content: [
        {
          type: "text",
          content: "El estrés es una respuesta natural del cuerpo a situaciones de presión o demanda. En el contexto policial, el estrés puede manifestarse de diferentes maneras y afectar el desempeño profesional.",
        },
        {
          type: "image",
          source: require("../../../../assets/images/stress-types.png"),
          caption: "Tipos de estrés en el servicio policial",
        },
        {
          type: "text",
          content: "Es importante reconocer los signos de estrés y aprender técnicas para manejarlo efectivamente. Algunos síntomas comunes incluyen:",
        },
        {
          type: "list",
          items: [
            "Aumento del ritmo cardíaco",
            "Tensión muscular",
            "Dificultad para concentrarse",
            "Irritabilidad",
            "Problemas de sueño",
          ],
        },
      ],
    },
    "2": {
      title: "Técnicas de Respiración",
      description: "Ejercicios prácticos de respiración",
      duration: "5 min",
      completed: true,
      content: [
        {
          type: "text",
          content: "La respiración consciente es una herramienta poderosa para manejar el estrés. Aprenderemos tres técnicas básicas:",
        },
        {
          type: "list",
          items: [
            "Respiración diafragmática",
            "Respiración 4-7-8",
            "Respiración cuadrada",
          ],
        },
        {
          type: "text",
          content: "Practica cada técnica durante 2-3 minutos al día para desarrollar el hábito.",
        },
      ],
    },
    "3": {
      title: "Gestión Emocional",
      description: "Estrategias para manejar emociones",
      duration: "5 min",
      completed: true,
      content: [
        {
          type: "text",
          content: "La gestión emocional es clave para mantener el control en situaciones de alta presión. Algunas estrategias efectivas incluyen:",
        },
        {
          type: "list",
          items: [
            "Identificar y etiquetar emociones",
            "Practicar la empatía",
            "Usar técnicas de distanciamiento",
            "Mantener un diario emocional",
          ],
        },
      ],
    },
  },
};

export default function ModuleDetailScreen() {
  const { id, moduleId } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  const router = useRouter();
  const module = moduleData[id as string]?.[moduleId as string];

  if (!module) {
    return (
      <View style={styles.container}>
        <Text>Módulo no encontrado</Text>
      </View>
    );
  }

  const renderContent = (item: ModuleContent, index: number) => {
    switch (item.type) {
      case "text":
        return (
          <Text
            key={index}
            style={[
              styles.textContent,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {item.content}
          </Text>
        );
      case "image":
        return (
          <View key={index} style={styles.imageContainer}>
            <Image source={item.source} style={styles.contentImage} />
            <Text
              style={[
                styles.imageCaption,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              {item.caption}
            </Text>
          </View>
        );
      case "list":
        return (
          <View key={index} style={styles.listContainer}>
            {item.items.map((listItem: string, listIndex: number) => (
              <View key={listIndex} style={styles.listItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color="#0a7ea4"
                  style={styles.listIcon}
                />
                <Text
                  style={[
                    styles.listText,
                    { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
                  ]}
                >
                  {listItem}
                </Text>
              </View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

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
            {module.title}
          </Text>
          <Text
            style={[
              styles.description,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            {module.description}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        {module.content.map((item: ModuleContent, index: number) =>
          renderContent(item, index)
        )}
      </View>
      <TouchableOpacity
        style={[
          styles.completeButton,
          {
            backgroundColor: module.completed ? "#0a7ea4" : "#E0E0E0",
          },
        ]}
        disabled={module.completed}
      >
        <Text style={styles.completeButtonText}>
          {module.completed ? "Módulo Completado" : "Marcar como Completado"}
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
  content: {
    padding: 16,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  imageContainer: {
    marginBottom: 16,
  },
  contentImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  imageCaption: {
    fontSize: 14,
    textAlign: "center",
  },
  listContainer: {
    marginBottom: 16,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  listIcon: {
    marginRight: 8,
  },
  listText: {
    fontSize: 16,
    flex: 1,
  },
  completeButton: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  completeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
}); 