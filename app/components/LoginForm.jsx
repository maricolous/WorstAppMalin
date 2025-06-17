import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import styles from "./LoginFormStyles";
import { useRouter } from "expo-router";
import RandomPositionWrapper from "./RandomPositionWrapper";

const WelcomeScreen = ({ onLogout }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Välkommen!</Text>
    <TouchableOpacity style={styles.button} onPress={onLogout}>
      <Text style={styles.buttonText}>Logga ut</Text>
    </TouchableOpacity>
  </View>
);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!isLogin && password !== confirmPassword) {
      alert("Lösenorden matchar inte");
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setIsLoggedIn(true);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setIsLoggedIn(true);
      }
      router.replace("/onboarding");
    } catch (err) {
      setError("Fel användarnamn eller lösenord");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  if (isLoggedIn) {
    return <WelcomeScreen onLogout={handleLogout} />;
  }

  return (
    <RandomPositionWrapper>
      <View>
        <Text style={styles.title}>{isLogin ? "Logga in" : "Skapa konto"}</Text>

        <Text style={styles.label}>E-post</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Lösenord</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {!isLogin && (
          <>
            <Text style={styles.label}>Bekräfta lösenord</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </>
        )}

        {error && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {isLogin ? "Logga in" : "Registrera"}
          </Text>
        </TouchableOpacity>

        <View style={styles.toggleContainer}>
          <Text style={styles.toggleTextWhite}>
            {isLogin ? "Har du inget konto?" : "Har du redan ett konto?"}
          </Text>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.toggleText}>
              {isLogin ? "Registrera dig här" : "Logga in här"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </RandomPositionWrapper>
  );
};

export default LoginForm;
