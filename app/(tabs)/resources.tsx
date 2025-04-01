import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../_layout";

const resources = [
  {
    title: "Documentos Oficiales",
    items: [
      {
        name: "Manual de Procedimientos de la Policía Nacional",
        url: "https://www.policia.gov.co/",
        icon: "document-text-outline",
      },
      {
        name: "Código Nacional de Policía y Convivencia",
        url: "https://www.policia.gov.co/codigo-nacional-policia",
        icon: "book-outline",
      },
    ],
  },
  {
    title: "Plataformas de Aprendizaje",
    items: [
      {
        name: "DINAE - Dirección Nacional de Escuelas",
        url: "https://www.policia.gov.co/direcciones/educacion-policial",
        icon: "school-outline",
      },
      {
        name: "Biblioteca Virtual Policial",
        url: "https://bibliotecapolicial.edu.co/",
        icon: "library-outline",
      },
    ],
  },
  {
    title: "Recursos de Bienestar",
    items: [
      {
        name: "Línea de Atención Psicológica",
        url: "tel:123",
        icon: "call-outline",
      },
      {
        name: "Portal de Bienestar Policial",
        url: "https://www.policia.gov.co/direcciones/bienestar-social",
        icon: "heart-outline",
      },
    ],
  },
  {
    title: "Herramientas y Apps",
    items: [
      {
        name: "ADenunciar - App Oficial",
        url: "https://adenunciar.policia.gov.co/",
        icon: "phone-portrait-outline",
      },
      {
        name: "Portal de Servicios Ciudadanos",
        url: "https://www.policia.gov.co/",
        icon: "globe-outline",
      },
    ],
  },
];

export default function ResourcesScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const handlePress = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Error al abrir el enlace:", error);
    }
  };

  return (
    <ScrollView 
      style={[
        styles.container,
        { backgroundColor: isDark ? colors.background.dark : colors.background.light }
      ]}
    >
      <View style={styles.header}>
        <Text style={[
          styles.headerTitle,
          { color: isDark ? colors.text.dark.primary : colors.text.light.primary }
        ]}>
          Recursos de Interés
        </Text>
        <Text style={[
          styles.headerSubtitle,
          { color: isDark ? colors.text.dark.secondary : colors.text.light.secondary }
        ]}>
          Encuentra información y herramientas útiles para tu desarrollo profesional
        </Text>
      </View>

      {resources.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={[
            styles.sectionTitle,
            { color: isDark ? colors.text.dark.primary : colors.text.light.primary }
          ]}>
            {section.title}
          </Text>
          {section.items.map((item, itemIndex) => (
            <TouchableOpacity
              key={itemIndex}
              style={[
                styles.resourceItem,
                { backgroundColor: isDark ? colors.card.dark : colors.card.light }
              ]}
              onPress={() => handlePress(item.url)}
            >
              <Ionicons
                name={item.icon as any}
                size={24}
                color={colors.primary}
                style={styles.icon}
              />
              <View style={styles.resourceContent}>
                <Text style={[
                  styles.resourceTitle,
                  { color: isDark ? colors.text.dark.primary : colors.text.light.primary }
                ]}>
                  {item.name}
                </Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={isDark ? colors.text.dark.secondary : colors.text.light.secondary}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  resourceItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  icon: {
    marginRight: 16,
  },
  resourceContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resourceTitle: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
}); 