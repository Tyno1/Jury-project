import { Stack, useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import { AuthContext } from "../contexts/AuthContext";

export default Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (text) => {
    setPayload({ ...payload, email: text.toLowerCase() });
  };

  const handleChangePassword = (text) => {
    setPayload({ ...payload, password: text });
  };

  const handleLogin = () => {
    if (payload) {
      login(payload)
        .then((res) => {
          router.replace("/games");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

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
      <View style={styles.form}>
        <Text style={styles.header}>JURY</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Email@address.com"
          onChangeText={handleChangeEmail}
          value={payload.email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="JURY password"
          secureTextEntry={true}
          onChangeText={handleChangePassword}
          value={payload.password}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          padding: SIZES.medium,
          display: "flex",
          alignItems: "center",
          gap: SIZES.medium,
        }}
      >
        <Text style={{ color: COLORS.white }}>New to Jury?</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => router.push("/register")}
        >
          <Text style={{ color: COLORS.primary }}>
            Create a new JURY account
          </Text>
        </TouchableOpacity>
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
  header: {
    color: COLORS.white,
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
  },
  emailInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.medium,
    marginBottom: SIZES.large,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: SIZES.large,
  },
  passwordInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.medium,
    marginBottom: SIZES.large,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: SIZES.large,
  },
  form: {
    width: "100%",
    padding: SIZES.medium,
    display: "flex",
    alignItems: "center",
    gap: SIZES.medium,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.medium,
    marginBottom: SIZES.large,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  createButton: {
    backgroundColor: COLORS.black,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.medium,
    marginBottom: SIZES.large,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: COLORS.black,
    fontSize: SIZES.large,
    textAlign: "center",
  },
});
