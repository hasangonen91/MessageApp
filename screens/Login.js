import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
  Animated,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

import { BlurView } from 'expo-blur';


class ImageLoader extends Component {
    state = {
      opacity: new Animated.Value(0),
    }
  
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    }
  
    render() {
      return (
        <Animated.Image
          onLoad={this.onLoad}
          {...this.props}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  })
                },
              ],
            },
            this.props.style,
          ]}
        />
      );
    }
  }


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {height} = Dimensions.get('window');
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
      <Image source={{
              uri: 'https://i.pinimg.com/originals/62/44/3d/62443df70f4d745953dbae0214825a99.jpg',
            }} style={styles.backImage} />
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentContainer}>
            
          <BlurView intensity={150} style={styles.contentContainer}>
           
            <Text style={styles.text}>Login Message App!</Text>

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
                  color: "black",
                  fontWeight: "600",
                  fontSize: 14,
                  marginTop: 0,
                }}
              >
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text
                  style={{ color: "#1F51FF", fontWeight: "bold", fontSize: 15 }}
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
            </BlurView>
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
    justifyContent: "center",
    padding: 5,
  },
  contentContainer: {
    paddingHorizontal: 10,
    
    borderRadius: 16,
  },

  text: {
    padding: 20,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "black",
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

    backgroundColor: "transparent",
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
    
  },
  backImage: {
    width: "150%",
    height: "150%",
    position: "absolute",
  },
});
