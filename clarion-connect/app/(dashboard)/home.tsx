import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Homescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
  heroCard: {
    backgroundColor: "#f8ede8",
    borderRadius: 20,
    padding: 20,
  },
  eyebrow: {
    color: "#94492e",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  heroTitle: {
    color: "#2f241f",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  heroText: {
    color: "#5f463b",
    fontSize: 15,
    lineHeight: 22,
  },
});

export default Homescreen;
