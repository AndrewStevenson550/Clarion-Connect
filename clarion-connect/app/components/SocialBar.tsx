import { StyleSheet, ScrollView, Image, View ,Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const SocialBar = () => {
  return (
    <ScrollView
      style={styles.socialBarView}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.itemRow}>
        <View style={styles.itemColumn}>
          <LinearGradient
            colors={["#a45f3e", "#eec484"]}
            style={styles.gradientItem}
          >
            <View style={styles.outerCircle}>
              <Image
                source={require("../../assets/images/react-logo.png")}
                style={styles.socialIcon}
              />
            </View>
          </LinearGradient>
          <View style={styles.textRow}>
            <Text style={styles.itemName}>Name</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  socialBarView: {
    backgroundColor: "white",
    flex: 1,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  itemColumn: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  gradientItem: {
    borderRadius: 999,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  socialIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  outerCircle: {
    backgroundColor: "white",
    borderRadius: 999,
    padding: 4,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  textRow: {
    marginTop: 6,
    paddingHorizontal: 4,
  },
  itemName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});

export default SocialBar;
