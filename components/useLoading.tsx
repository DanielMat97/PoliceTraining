import { useState, useCallback } from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface LoadingState {
  visible: boolean;
  message?: string;
}

export const useLoading = () => {
  const [loading, setLoading] = useState<LoadingState>({
    visible: false,
  });
  const { colors } = useTheme();

  const showLoading = useCallback((message?: string) => {
    setLoading({
      visible: true,
      message,
    });
  }, []);

  const hideLoading = useCallback(() => {
    setLoading({
      visible: false,
    });
  }, []);

  const LoadingOverlay = () => {
    if (!loading.visible) return null;

    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        {loading.message && (
          <View style={styles.messageContainer}>
            <Text style={[styles.message, { color: colors.text }]}>
              {loading.message}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return {
    loading,
    showLoading,
    hideLoading,
    LoadingOverlay,
  };
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  messageContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
}); 