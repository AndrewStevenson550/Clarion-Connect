import React from "react";
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { useFonts } from "@expo-google-fonts/geist/useFonts";
import { Geist_400Regular, Geist_700Bold } from "@expo-google-fonts/geist";
import { Menu, SquarePlus } from "lucide-react-native";

export default function Header() {
  const [fontsLoaded] = useFonts({
    Geist_400Regular,
    Geist_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#94492e" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Menu color="#94492e" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Clarion Connect</Text>

        <TouchableOpacity style={styles.iconButton}>
          <SquarePlus color="#94492e" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 8,
    borderRadius: 999,
    backgroundColor: "#f8ede8",
  },
  title: {
    color: "#94492e",
    fontSize: 20,
    fontFamily: "Geist_700Bold",
    flex: 1,
    textAlign: "center",
  },
});
