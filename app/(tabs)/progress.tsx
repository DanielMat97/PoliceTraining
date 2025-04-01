import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface ProgressItem {
  id: string;
  title: string;
  type: "course" | "simulation";
  progress: number;
  lastActivity: string;
  status: "completed" | "in_progress" | "not_started";
}

// Datos de ejemplo para el progreso
const progressData: ProgressItem[] = [
  {
    id: "1",
    title: "Manejo del Estrés",
    type: "course",
    progress: 100,
    lastActivity: "2024-03-15",
    status: "completed",
  },
  {
    id: "2",
    title: "Aplicación del SITAB",
    type: "course",
    progress: 60,
    lastActivity: "2024-03-14",
    status: "in_progress",
  },
  {
    id: "3",
    title: "Atención a Emergencia",
    type: "simulation",
    progress: 100,
    lastActivity: "2024-03-13",
    status: "completed",
  },
  {
    id: "4",
    title: "Control de Multitudes",
    type: "simulation",
    progress: 0,
    lastActivity: "",
    status: "not_started",
  },
];

export default function ProgressScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const getStatusColor = (status: ProgressItem["status"]) => {
    switch (status) {
      case "completed":
        return "#0a7ea4";
      case "in_progress":
        return "#FFA500";
      case "not_started":
        return "#9BA1A6";
      default:
        return "#9BA1A6";
    }
  };

  const getStatusText = (status: ProgressItem["status"]) => {
    switch (status) {
      case "completed":
        return "Completado";
      case "in_progress":
        return "En Progreso";
      case "not_started":
        return "No Iniciado";
      default:
        return "";
    }
  };

  const renderProgressItem = (item: ProgressItem) => (
    <TouchableOpacity
      key={item.id}
      style={[
        styles.progressCard,
        {
          backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
        },
      ]}
      onPress={() =>
        router.push(
          `/(${item.type === "course" ? "course" : "simulation"})/${item.id}`
        )
      }
    >
      <View style={styles.progressHeader}>
        <View style={styles.progressTitleContainer}>
          <Ionicons
            name={item.type === "course" ? "book" : "game-controller"}
            size={24}
            color={colorScheme === "dark" ? "#ECEDEE" : "#11181C"}
          />
          <Text
            style={[
              styles.progressTitle,
              {
                color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
              },
            ]}
          >
            {item.title}
          </Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: `${getStatusColor(item.status)}20` },
          ]}
        >
          <Text
            style={[styles.statusText, { color: getStatusColor(item.status) }]}
          >
            {getStatusText(item.status)}
          </Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${item.progress}%` },
          ]}
        />
      </View>
      <View style={styles.progressFooter}>
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
        {item.lastActivity && (
          <Text
            style={[
              styles.lastActivityText,
              {
                color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
              },
            ]}
          >
            Última actividad: {new Date(item.lastActivity).toLocaleDateString()}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const completedItems = progressData.filter(
    (item) => item.status === "completed"
  );
  const inProgressItems = progressData.filter(
    (item) => item.status === "in_progress"
  );
  const notStartedItems = progressData.filter(
    (item) => item.status === "not_started"
  );

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.title,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          Progreso
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          {completedItems.length} de {progressData.length} elementos completados
        </Text>
      </View>

      {inProgressItems.length > 0 && (
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            En Progreso
          </Text>
          {inProgressItems.map(renderProgressItem)}
        </View>
      )}

      {notStartedItems.length > 0 && (
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            No Iniciados
          </Text>
          {notStartedItems.map(renderProgressItem)}
        </View>
      )}

      {completedItems.length > 0 && (
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            Completados
          </Text>
          {completedItems.map(renderProgressItem)}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  progressCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  progressTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#0a7ea4",
    borderRadius: 2,
  },
  progressFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressText: {
    fontSize: 12,
  },
  lastActivityText: {
    fontSize: 12,
  },
}); 