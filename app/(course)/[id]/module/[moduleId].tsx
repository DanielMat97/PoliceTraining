import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useColorScheme } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { colors } from "../../../_layout";
import type { Course } from "../../../../types";

const moduleData: { [key: string]: Course } = {
  "1": {
    id: "1",
    title: "Mejores prácticas en la interacción con la comunidad",
    description: "Aprende técnicas efectivas para mejorar la comunicación y el servicio a la ciudadanía",
    difficulty: "Básico",
    duration: "2 horas",
    progress: 70,
    image: require("../../../../assets/images/citizen.png"),
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
            content: "La comunicación efectiva es la base de una buena relación entre la policía y la comunidad. Una interacción positiva puede marcar la diferencia en la percepción ciudadana y la efectividad del servicio policial.\n\nPrincipios fundamentales de la comunicación efectiva:\n\n1. Escucha activa\n2. Empatía\n3. Lenguaje claro y respetuoso\n4. Atención a la comunicación no verbal",
          },
          {
            type: "image",
            source: require("../../../../assets/images/citizen.png"),
            caption: "Interacción positiva con la comunidad",
          },
          {
            type: "list",
            title: "Elementos clave para una buena comunicación:",
            items: [
              "Mantener contacto visual apropiado",
              "Usar un tono de voz calmado y profesional",
              "Mostrar interés genuino en las preocupaciones ciudadanas",
              "Mantener una postura corporal abierta y receptiva",
              "Explicar claramente los procedimientos y razones",
            ],
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
    image: require("../../../../assets/images/crisis.png"),
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
            content: "El manejo efectivo de crisis requiere una evaluación rápida y precisa de la situación. La capacidad de analizar múltiples variables y tomar decisiones bajo presión es crucial.\n\nPasos clave en la evaluación de crisis:\n\n1. Identificación de la amenaza principal\n2. Evaluación de riesgos inmediatos\n3. Análisis de recursos disponibles\n4. Establecimiento de prioridades",
          },
          {
            type: "image",
            source: require("../../../../assets/images/crisis.png"),
            caption: "Evaluación de situaciones críticas",
          },
          {
            type: "list",
            title: "Factores a considerar en una crisis:",
            items: [
              "Nivel de amenaza inmediata",
              "Número de personas involucradas",
              "Recursos disponibles",
              "Tiempo de respuesta necesario",
              "Impacto potencial en la comunidad",
            ],
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
    image: require("../../../../assets/images/crowd.png"),
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
            content: "El control efectivo de multitudes requiere un equilibrio entre la seguridad pública y el respeto a los derechos de manifestación. Es fundamental entender la dinámica de las multitudes y aplicar estrategias apropiadas.\n\nPrincipios fundamentales:\n\n1. Prevención y planificación\n2. Comunicación clara\n3. Uso proporcional de la fuerza\n4. Coordinación táctica",
          },
          {
            type: "image",
            source: require("../../../../assets/images/crowd.png"),
            caption: "Técnicas de control de multitudes",
          },
          {
            type: "list",
            title: "Aspectos clave del control de multitudes:",
            items: [
              "Evaluación continua de la situación",
              "Establecimiento de perímetros de seguridad",
              "Mantenimiento de rutas de evacuación",
              "Identificación de líderes y agitadores",
              "Protección de infraestructura crítica",
            ],
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
    image: require("../../../../assets/images/emergency.png"),
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
            content: "La respuesta inicial en una emergencia es crucial para el resultado final. Los primeros minutos pueden determinar la diferencia entre la vida y la muerte.\n\nPasos críticos en la respuesta inicial:\n\n1. Evaluación rápida de la escena\n2. Establecimiento de prioridades\n3. Solicitud de recursos adicionales\n4. Inicio de primeros auxilios si es necesario",
          },
          {
            type: "image",
            source: require("../../../../assets/images/emergency.png"),
            caption: "Atención de emergencias",
          },
          {
            type: "list",
            title: "Prioridades en la respuesta inicial:",
            items: [
              "Seguridad del personal de respuesta",
              "Protección de la vida",
              "Estabilización de la escena",
              "Preservación de evidencia",
              "Documentación de acciones tomadas",
            ],
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
    image: require("../../../../assets/images/interview.png"),
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
            content: "La entrevista a testigos es una habilidad fundamental en la investigación policial. Una entrevista bien conducida puede proporcionar información crucial para resolver un caso.\n\nPrincipios de la entrevista efectiva:\n\n1. Establecimiento de rapport\n2. Uso de preguntas abiertas\n3. Escucha activa\n4. Documentación precisa",
          },
          {
            type: "image",
            source: require("../../../../assets/images/interview.png"),
            caption: "Entrevista a testigos",
          },
          {
            type: "list",
            title: "Elementos clave de una entrevista efectiva:",
            items: [
              "Preparación adecuada",
              "Ambiente apropiado",
              "Secuencia lógica de preguntas",
              "Atención a detalles",
              "Verificación de la información",
            ],
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
    image: require("../../../../assets/images/sitab.png"),
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
            content: "El Sistema de Información Táctico (SITAB) es una herramienta fundamental para la toma de decisiones operativas y estratégicas en el servicio policial.\n\nComponentes principales del SITAB:\n\n1. Gestión de información operativa\n2. Análisis de datos tácticos\n3. Coordinación de recursos\n4. Seguimiento de operaciones",
          },
          {
            type: "image",
            source: require("../../../../assets/images/sitab.png"),
            caption: "Sistema SITAB",
          },
          {
            type: "list",
            title: "Funcionalidades clave del SITAB:",
            items: [
              "Registro de incidentes",
              "Análisis de patrones delictivos",
              "Gestión de recursos policiales",
              "Generación de reportes tácticos",
              "Coordinación interinstitucional",
            ],
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
    image: require("../../../../assets/images/stress.png"),
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
            content: "El estrés es una respuesta natural del cuerpo ante situaciones desafiantes o amenazantes. En el contexto policial, el manejo efectivo del estrés es crucial para mantener un desempeño óptimo.\n\nTipos principales de estrés:\n\n1. Estrés laboral: Relacionado con las responsabilidades del trabajo\n2. Estrés emocional: Causado por situaciones emocionalmente intensas\n3. Estrés físico: Resultado del desgaste físico\n4. Estrés acumulativo: Combinación de factores a lo largo del tiempo",
          },
          {
            type: "image",
            source: require("../../../../assets/images/stress-types.png"),
            caption: "Tipos de estrés y sus efectos",
          },
          {
            type: "list",
            title: "Señales comunes de estrés:",
            items: [
              "Irritabilidad y cambios de humor",
              "Dificultad para concentrarse",
              "Problemas de sueño",
              "Tensión muscular",
              "Fatiga constante",
              "Cambios en el apetito",
            ],
          },
        ],
      },
    ],
  },
};

export default function ModuleDetailScreen() {
  const { id, moduleId } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  
  const course = moduleData[id as string];
  const module = course?.modules.find(m => m.id === moduleId);
  
  if (!module) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Módulo no encontrado</Text>
      </View>
    );
  }

  const renderContent = (content: Course["modules"][0]["content"][0], index: number) => {
    switch (content.type) {
      case "text":
        return (
          <Text
            key={index}
            style={[
              styles.text,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {content.content}
          </Text>
        );
      case "image":
        return (
          <View key={index} style={styles.imageContainer}>
            <Image source={content.source} style={styles.image} />
            {content.caption && (
              <Text
                style={[
                  styles.caption,
                  { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
                ]}
              >
                {content.caption}
              </Text>
            )}
          </View>
        );
      case "list":
        return (
          <View key={index} style={styles.listContainer}>
            {content.title && (
              <Text
                style={[
                  styles.listTitle,
                  { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
                ]}
              >
                {content.title}
              </Text>
            )}
            {content.items.map((item, i) => (
              <View key={i} style={styles.listItem}>
                <Text
                  style={[
                    styles.listItemDot,
                    { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
                  ]}
                >
                  •
                </Text>
                <Text
                  style={[
                    styles.listItemText,
                    { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
                  ]}
                >
                  {item}
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
      <View style={styles.content}>
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
            styles.duration,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          Duración: {module.duration}
        </Text>
        <View style={styles.contentContainer}>
          {module.content.map((content, index) => renderContent(content, index))}
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
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  duration: {
    fontSize: 14,
    marginBottom: 24,
  },
  contentContainer: {
    gap: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  imageContainer: {
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
  caption: {
    fontSize: 14,
    textAlign: "center",
  },
  listContainer: {
    gap: 12,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  listItemDot: {
    fontSize: 16,
    marginRight: 8,
    marginTop: -2,
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
}); 