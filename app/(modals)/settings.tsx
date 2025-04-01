import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from "react-native";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(colorScheme === "dark");
  const [soundEffects, setSoundEffects] = useState(true);

  const renderSettingItem = (
    icon: string,
    title: string,
    description: string,
    type: "toggle" | "navigation",
    value?: boolean,
    onValueChange?: (value: boolean) => void,
    onPress?: () => void
  ) => (
    <TouchableOpacity
      style={[
        styles.settingItem,
        {
          backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
        },
      ]}
      onPress={type === "navigation" ? onPress : undefined}
    >
      <View style={styles.settingItemContent}>
        <View style={styles.settingItemLeft}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: colorScheme === "dark" ? "#2D2D2D" : "#E6F7FF",
              },
            ]}
          >
            <Ionicons
              name={icon as any}
              size={24}
              color="#0a7ea4"
            />
          </View>
          <View style={styles.settingItemText}>
            <Text
              style={[
                styles.settingItemTitle,
                {
                  color: colorScheme === "dark" ? "#ECEDEE" : "#11181C",
                },
              ]}
            >
              {title}
            </Text>
            <Text
              style={[
                styles.settingItemDescription,
                {
                  color: colorScheme === "dark" ? "#9BA1A6" : "#687076",
                },
              ]}
            >
              {description}
            </Text>
          </View>
        </View>
        {type === "toggle" ? (
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: "#767577", true: "#0a7ea4" }}
            thumbColor={value ? "#fff" : "#f4f3f4"}
          />
        ) : (
          <Ionicons
            name="chevron-forward"
            size={24}
            color={colorScheme === "dark" ? "#9BA1A6" : "#687076"}
          />
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
        <Text
          style={[
            styles.title,
            { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
          ]}
        >
          Configuración
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            Preferencias
          </Text>
          {renderSettingItem(
            "notifications-outline",
            "Notificaciones",
            "Recibir notificaciones sobre nuevos cursos y actualizaciones",
            "toggle",
            notifications,
            setNotifications
          )}
          {renderSettingItem(
            "moon-outline",
            "Modo Oscuro",
            "Cambiar entre tema claro y oscuro",
            "toggle",
            darkMode,
            setDarkMode
          )}
          {renderSettingItem(
            "volume-high-outline",
            "Efectos de Sonido",
            "Activar o desactivar efectos de sonido",
            "toggle",
            soundEffects,
            setSoundEffects
          )}
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            Cuenta
          </Text>
          {renderSettingItem(
            "person-outline",
            "Perfil",
            "Gestionar información personal",
            "navigation",
            undefined,
            undefined,
            () => router.push("/(tabs)/profile")
          )}
          {renderSettingItem(
            "shield-checkmark-outline",
            "Seguridad",
            "Cambiar contraseña y configuración de seguridad",
            "navigation"
          )}
          {renderSettingItem(
            "help-circle-outline",
            "Ayuda y Soporte",
            "Obtener ayuda y contactar soporte",
            "navigation"
          )}
        </View>

        <View style={styles.section}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colorScheme === "dark" ? "#ECEDEE" : "#11181C" },
            ]}
          >
            Sobre la App
          </Text>
          {renderSettingItem(
            "information-circle-outline",
            "Información",
            "Versión y detalles de la aplicación",
            "navigation"
          )}
          {renderSettingItem(
            "document-text-outline",
            "Términos y Condiciones",
            "Leer términos y condiciones de uso",
            "navigation"
          )}
          {renderSettingItem(
            "shield-outline",
            "Política de Privacidad",
            "Información sobre el manejo de datos",
            "navigation"
          )}
        </View>

        <TouchableOpacity
          style={[
            styles.logoutButton,
            {
              backgroundColor: colorScheme === "dark" ? "#1E1E1E" : "#F5F5F5",
            },
          ]}
          onPress={() => router.push("/(auth)/login")}
        >
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#FF3B30"
          />
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  settingItem: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingItemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingItemText: {
    flex: 1,
  },
  settingItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  settingItemDescription: {
    fontSize: 14,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    margin: 16,
    borderRadius: 12,
  },
  logoutButtonText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
}); 