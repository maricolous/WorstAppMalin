import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RotatingView from "./components/RotatingView";
import styles from "./ProfilStyles";

const ProfilBaguetteBrie = () => {
  const [message, setMessage] = useState(
    "Välkommen till min ostiga profil! 🧀🥖"
  );
  const [followers, setFollowers] = useState(42);

  const onPressSendBaguette = () => {
    setMessage("Du skickade en baguette! 🥖✨ Merci!");
    setFollowers((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <RotatingView>
        <Image
          source={require("../assets/images/baguette.jpg")}
          style={styles.profileImage}
        />
      </RotatingView>

      <Text style={styles.username}>BaguetteBrieFan</Text>

      <Text style={styles.bio}>
        Ostälskare. Expert på att para ihop brie med baguette. Här för att
        sprida smörgåsglädje!
      </Text>

      <View style={styles.followersContainer}>
        <Text style={styles.followersEmoji}>🥖</Text>
        <Text style={styles.followersText}>{followers} baguette-följare</Text>
      </View>

      <RotatingView>
        <TouchableOpacity style={styles.button} onPress={onPressSendBaguette}>
          <Text style={styles.buttonText}>Skicka baguette</Text>
        </TouchableOpacity>
      </RotatingView>

      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ProfilBaguetteBrie;
