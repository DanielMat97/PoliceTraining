import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      {/* Perfil del Agente */}
      <View
        style={[
          styles.profileCard,
          {
            backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
          },
        ]}
      >
        <View style={styles.profileHeader}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text
              style={[
                styles.agentName,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Juan Pérez
            </Text>
            <Text
              style={[
                styles.agentRank,
                {
                  color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
                },
              ]}
            >
              Subintendente
            </Text>
          </View>
        </View>

        {/* Progreso General */}
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle}>
            <Text
              style={[
                styles.progressText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              70%
            </Text>
            <Text
              style={[
                styles.progressLabel,
                {
                  color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
                },
              ]}
            >
              Completado
            </Text>
          </View>
          <View style={styles.progressDetails}>
            <Text
              style={[
                styles.progressDetailText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Cursos completados: 7/10
            </Text>
            <Text
              style={[
                styles.progressDetailText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Última actividad: 01/04/2024
            </Text>
          </View>
        </View>
      </View>

      {/* Acciones Rápidas */}
      <View
        style={[
          styles.actionsCard,
          {
            backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
          },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
            },
          ]}
        >
          Acciones Rápidas
        </Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/(course)")}
          >
            <Ionicons name="book" size={24} color="#0a7ea4" />
            <Text
              style={[
                styles.actionText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Continuar Curso
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/(simulation)")}
          >
            <Ionicons name="game-controller" size={24} color="#0a7ea4" />
            <Text
              style={[
                styles.actionText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Nueva Simulación
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/(quiz)")}
          >
            <Ionicons name="help-circle" size={24} color="#0a7ea4" />
            <Text
              style={[
                styles.actionText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Evaluación
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logros Recientes */}
      <View
        style={[
          styles.achievementsCard,
          {
            backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
          },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
            },
          ]}
        >
          Logros Recientes
        </Text>
        <View style={styles.achievementsList}>
          <View style={styles.achievementItem}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text
              style={[
                styles.achievementText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Módulo de Manejo del Estrés completado
            </Text>
          </View>
          <View style={styles.achievementItem}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text
              style={[
                styles.achievementText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Simulación de Control de Multitud superada
            </Text>
          </View>
          <View style={styles.achievementItem}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text
              style={[
                styles.achievementText,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              Quiz de Atención Ciudadana aprobado
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  agentRank: {
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#0a7ea4",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  progressLabel: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
  progressDetails: {
    flex: 1,
    marginLeft: 16,
  },
  progressDetailText: {
    fontSize: 16,
    marginBottom: 8,
  },
  actionsCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  actionButton: {
    flex: 1,
    minWidth: "30%",
    alignItems: "center",
    padding: 12,
    backgroundColor: "rgba(10, 126, 164, 0.1)",
    borderRadius: 8,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },
  achievementsCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  achievementsList: {
    gap: 12,
  },
  achievementItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  achievementText: {
    fontSize: 16,
    flex: 1,
  },
}); 