import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../../constants";
import { AuthContext } from "../../contexts/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.ImageContainer}>
        <AntDesign name="user" size={100} color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>FullName</Text>
        <Text style={styles.text}>{user.user.fullName}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Username</Text>
        <Text style={styles.text}>{user.user.username}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.text}>{user.user.email}</Text>
      </View>
      <TouchableOpacity onPress={logout} style={styles.logOutButton}>
        <Text style={styles.logOutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    display: "flex",
    gap: SIZES.xxLarge,
    paddingTop: SIZES.xxLarge + 30,
  },
  ImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: 12,
    paddingHorizontal: 50,
    gap: 5,
    justifyContent: "space-between",
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.xxLarge,
    fontWeight: "medium",
  },
  logOutButton: {
    marginBottom: 60,
    backgroundColor: COLORS.primary,
    padding: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
