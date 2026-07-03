import React from "react";
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import { useFonts } from '@expo-google-fonts/geist/useFonts';
import { Geist_400Regular, Geist_700Bold } from '@expo-google-fonts/geist';
import { Menu } from 'lucide-react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  // Load the Geist variants at runtime
  const [fontsLoaded] = useFonts({
    Geist_400Regular,
    Geist_700Bold,
  });

  // Stop the app from crashing while the font downloads/loads
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#94492e" />
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <TouchableOpacity>
              <Menu color="#94492e" size={24} style={styles.menu} />
            </TouchableOpacity>
            <Text style={styles.title}>Clarion Connect</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Adjust this background color to match your app's theme
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: 15,
  },
  title: {
    color: "#94492e",
    fontSize: 20,
    fontFamily: "Geist_700Bold",
    marginLeft: 10,
  },
  menu: {
    // Styling managed via component props
  }
});
