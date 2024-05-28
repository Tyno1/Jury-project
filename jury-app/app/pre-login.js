import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";

export default PreLogin = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.black },
          headerShadowVisible: false,
          headerTitle: "",
          headerTintColor: COLORS.white,
          headerTitleStyle: { color: COLORS.white },
        }}
      />

      <View style={styles.container}>
        <Text style={styles.signIn}> Welcome !</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: COLORS.white,
            marginTop: SIZES.large,
            fontSize: SIZES.medium,
          }}
        >
          or
        </Text>

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By Signing in, you agree to JURY's Conditions of Use and Privacy
          Notice
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  signIn: {
    color: COLORS.white,
    fontSize: SIZES.xxLarge,
  },
  createButton: {
    backgroundColor: COLORS.primary,
    marginTop: SIZES.large,
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: SIZES.medium,
    overflow: "hidden",
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    width: "100%",
    fontSize: SIZES.large,
    textAlign: "center",
  },
  terms: {
    color: COLORS.white,
    marginTop: SIZES.large,
    fontSize: SIZES.small + 2,
    textAlign: "center",
    marginTop: 100,
    width: "70%",
  },
});
