import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Datos de ejemplo para el perfil
const profileData = {
  name: "Juan Pérez",
  rank: "Subintendente",
  badge: "12345",
  station: "ESCUELA DE POLICÍA",
  experience: "5 años",
  coursesCompleted: 8,
  simulationsCompleted: 4,
  totalPoints: 1250,
  achievements: [
    {
      id: "1",
      title: "Primer Curso Completado",
      description: "Completaste tu primer curso de capacitación",
      date: "2024-03-01",
      icon: "trophy",
    },
    {
      id: "2",
      title: "Simulación Exitosa",
      description: "Completaste tu primera simulación con excelente calificación",
      date: "2024-03-10",
      icon: "star",
    },
    {
      id: "3",
      title: "1000 Puntos",
      description: "Alcanzaste los 1000 puntos de experiencia",
      date: "2024-03-15",
      icon: "medal",
    },
  ],
};

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const renderAchievement = (achievement: typeof profileData.achievements[0]) => (
    <View
      key={achievement.id}
      style={[
        styles.achievementCard,
        {
          backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
        },
      ]}
    >
      <View style={styles.achievementIcon}>
        <Ionicons
          name={achievement.icon as any}
          size={24}
          color="#0a7ea4"
        />
      </View>
      <View style={styles.achievementInfo}>
        <Text
          style={[
            styles.achievementTitle,
            {
              color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
            },
          ]}
        >
          {achievement.title}
        </Text>
        <Text
          style={[
            styles.achievementDescription,
            {
              color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
            },
          ]}
        >
          {achievement.description}
        </Text>
        <Text
          style={[
            styles.achievementDate,
            {
              color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
            },
          ]}
        >
          {new Date(achievement.date).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#151718" : "#fff" },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="camera" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.name,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          {profileData.name}
        </Text>
        <Text
          style={[
            styles.rank,
            { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
          ]}
        >
          {profileData.rank}
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text
            style={[
              styles.statValue,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {profileData.coursesCompleted}
          </Text>
          <Text
            style={[
              styles.statLabel,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            Cursos
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text
            style={[
              styles.statValue,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {profileData.simulationsCompleted}
          </Text>
          <Text
            style={[
              styles.statLabel,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            Simulaciones
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text
            style={[
              styles.statValue,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            {profileData.totalPoints}
          </Text>
          <Text
            style={[
              styles.statLabel,
              { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
            ]}
          >
            Puntos
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          Información Personal
        </Text>
        <View
          style={[
            styles.infoCard,
            {
              backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
            },
          ]}
        >
          <View style={styles.infoItem}>
            <Ionicons
              size={20}
              color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
            />
            <Text
              style={[
                styles.infoLabel,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              Placa:
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
              ]}
            >
              {profileData.badge}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons
              name="location-outline"
              size={20}
              color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
            />
            <Text
              style={[
                styles.infoLabel,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              Estación:
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
              ]}
            >
              {profileData.station}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons
              name="time-outline"
              size={20}
              color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
            />
            <Text
              style={[
                styles.infoLabel,
                { color: colorScheme === "dark" ? "#9BA1A6" : "#687076" },
              ]}
            >
              Experiencia:
            </Text>
            <Text
              style={[
                styles.infoValue,
                { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
              ]}
            >
              {profileData.experience}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text
          style={[
            styles.sectionTitle,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          Logros
        </Text>
        {profileData.achievements.map(renderAchievement)}
      </View>

      <TouchableOpacity
        style={[
          styles.settingsButton,
          {
            backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
          },
        ]}
        onPress={() => router.push("/(modals)/settings")}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={colorScheme === "dark" ? "#ECEDEE" : "#11181C"}
        />
        <Text
          style={[
            styles.settingsButtonText,
            {
              color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
            },
          ]}
        >
          Configuración
        </Text>
        <Ionicons
          name="chevron-forward"
          size={24}
          color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0a7ea4",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  rank: {
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statLabel: {
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
  infoCard: {
    padding: 16,
    borderRadius: 12,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    marginLeft: 8,
    marginRight: 8,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "500",
  },
  achievementCard: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E6F7FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  achievementDate: {
    fontSize: 12,
  },
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    margin: 16,
    borderRadius: 12,
  },
  settingsButtonText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
}); 