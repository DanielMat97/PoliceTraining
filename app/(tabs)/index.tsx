import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { colors } from "../_layout";

const mockUserData = {
  name: "Juan Pérez",
  rank: "Subintendente",
  progress: 70,
  recentActivities: [
    {
      id: "1",
      title: "Módulo de Manejo del Estrés",
      type: "course",
      date: "Hoy",
      completed: true,
    },
    {
      id: "2",
      title: "Simulación de Control de Multitudes",
      type: "simulation",
      date: "Ayer",
      completed: true,
    },
    {
      id: "3",
      title: "Atención al Ciudadano",
      type: "quiz",
      date: "Hace 2 días",
      completed: true,
    },
  ],
};

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const renderActivityIcon = (type: string) => {
    switch (type) {
      case "course":
        return "book-outline";
      case "simulation":
        return "game-controller-outline";
      case "quiz":
        return "checkbox-outline";
      default:
        return "document-outline";
    }
  };

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      {/* Perfil Card */}
      <View style={styles.profileCard}>
        <Image
          source={require("../../assets/images/profile.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{mockUserData.name}</Text>
          <Text style={styles.rank}>{mockUserData.rank}</Text>
        </View>
      </View>

      {/* Progress Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tu Progreso</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle}>
            <Text style={styles.progressText}>{mockUserData.progress}%</Text>
          </View>
          <Text style={styles.progressLabel}>Completado</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/(course)")}
          >
            <Ionicons name="play-circle" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Continuar Curso</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/(simulation)")}
          >
            <Ionicons name="game-controller" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Nueva Simulación</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/(quiz)")}
          >
            <Ionicons name="checkbox" size={24} color={colors.primary} />
            <Text style={styles.actionButtonText}>Evaluación</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Activities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actividades Recientes</Text>
        {mockUserData.recentActivities.map((activity) => (
          <TouchableOpacity
            key={activity.id}
            style={styles.activityItem}
            onPress={() => {
              router.push(`/(${activity.type})/${activity.id}`);
            }}
          >
            <View style={styles.activityIcon}>
              <Ionicons
                name={renderActivityIcon(activity.type)}
                size={24}
                color={colors.primary}
              />
            </View>
            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityDate}>{activity.date}</Text>
            </View>
            <Ionicons
              name="checkmark-circle"
              size={24}
              color={activity.completed ? "#4CAF50" : "#E0E0E0"}
            />
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
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.primary,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  rank: {
    fontSize: 16,
    color: "#E0E0E0",
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.primary,
  },
  progressContainer: {
    alignItems: "center",
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  progressLabel: {
    fontSize: 16,
    color: "#687076",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    backgroundColor: "#F1F3F5",
    borderRadius: 8,
    marginHorizontal: 4,
  },
  actionButtonText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
    color: colors.primary,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#F1F3F5",
    borderRadius: 8,
    marginBottom: 8,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    marginBottom: 4,
    color: "#11181C",
  },
  activityDate: {
    fontSize: 14,
    color: "#687076",
  },
}); 