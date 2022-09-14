import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
const backImage = require("../assets/backImage.png");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Hello Again!</Text>
            <Text style={styles.body}>Welcome back you've been missed!</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={true}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity>
              <Text
                style={[
                  styles.buttonsText,
                  { fontWeight: "bold", lineHeight: 30, textAlign: "right" },
                ]}
              >
                Recovery Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={onHandleLogin}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontWeight: "600",
                  fontSize: 14,
                  marginTop: 0,
                }}
              >
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text
                  style={{ color: "#1F51FF", fontWeight: "600", fontSize: 14 }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ textAlign: "center", marginTop: 10 }}>
              Or continue with
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button1}>
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
                  }}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1}>
                <Image
                  source={{
                    uri: "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
                  }}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
                  }}
                  style={{ width: 40, height: 40, borderRadius: 50 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B6D0E2",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 35,
    textAlign: "center",
    color: "#353147",
  },
  body: {
    padding: 20,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 20,
    fontWeight: "400",
    textAlign: "center",
    color: "#353147",
  },
  buttonsText: {
    fontWeight: "500",
    color: "#353147",
  },
  button1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff70",
    padding: 16,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 16,
    marginHorizontal: 10,
  },
  button2: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",

    backgroundColor: "#DFE3E630",
    marginTop: 40,
  },
  input: {
    backgroundColor: "#F7F7F7",
    padding: 20,
    borderRadius: 16,
    marginBottom: 10,
  },
  signInButton: {
    backgroundColor: "#0096FF",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
