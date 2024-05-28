import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default Register = () => {
  const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState();
  const { register } = useContext(AuthContext);
  const [payload, setPayload] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChangeFname = (text) => {
    setPayload({ ...payload, firstName: text });
  };
  const handleChangeLname = (text) => {
    setPayload({ ...payload, lastName: text });
  };

  const handleChangeUserName = (text) => {
    setPayload({ ...payload, username: text });
  };

  const handleChangeEmail = (text) => {
    setPayload({ ...payload, email: text.toLowerCase() });
  };

  const handleChangePassword = (text) => {
    setPayload({ ...payload, password: text });
  };

  const handleConfirmPassword = (text) => {
    setConfirmPassword(text);
  };

  const handleRegister = () => {
    let _payload = { ...payload };
    if (payload.password === confirmPassword) {
      // Passwords match, proceed with form submission
      // console.log("Passwords match!");

      if (_payload) {
        register(_payload)
          .then((res) => {
            console.log(res);
            alert("Account created successfully, now login")
            router.replace("/login");
          })
          .catch((error) => {
            console.error(error);
          });
      }
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
      {/* remember to edit function to handle change */}
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.header}>JURY</Text>
          <TextInput
            style={styles.nameInput}
            placeholder="First Name"
            onChangeText={handleChangeFname}
            value={payload.firstName}
          />

          <TextInput
            style={styles.nameInput}
            placeholder="Last Name"
            onChangeText={handleChangeLname}
            value={payload.lastName}
          />

          <TextInput
            style={styles.nameInput}
            placeholder="Username"
            onChangeText={handleChangeUserName}
            value={payload.username}
          />

          <TextInput
            style={styles.nameInput}
            placeholder="Email@address.com"
            onChangeText={handleChangeEmail}
            value={payload.email}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.passwordInput}
            placeholder="JURY password"
            onChangeText={handleChangePassword}
            secureTextEntry={true}
            value={payload.password}
          />

          <TextInput
            style={styles.passwordInput}
            placeholder="confirm JURY password"
            value={confirmPassword}
            onChangeText={handleConfirmPassword}
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginText}>Create your JURY account</Text>
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
          <Text style={{ color: COLORS.white }}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => router.push("/login")}
          >
            <Text style={{ color: COLORS.primary }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  nameInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.medium,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  passwordInput: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: SIZES.medium,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%",
    padding: SIZES.medium,
    display: "flex",
    alignItems: "center",
    gap: SIZES.small,
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
});
