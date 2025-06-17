import { Link } from "expo-router";
import LogoutButton from "./components/LogoutButton";
import React from "react";
import { View } from "react-native";
import BlinkandeText from "./components/BlinkandeText";
import FlyttbarKnapp from "./components/FlyttbarKnapp";
import styles from "./LandingStyles";

const Landing = () => {
  const handleButtonPress = () => {
    console.log("Knappen har tryckts, men den flyttade sig!");
  };

  return (
    <View style={styles.container}>
      <BlinkandeText
        text="Föreställ dig en baguette som försöker lära sig dansa balett medan brie-osten spelar schack med en osynlig giraff. Låter konstigt? Det är precis så vi gillar det här! Om du undrar varför baguetten plötsligt började sjunga nationalsången eller varför brien har en hatt, då är du på rätt spår. Håll fast i din ostkniv och håll utkik efter flygande smörgåsar – för här är allt möjligt och inget är som det ser ut. Välkommen till världens mest ostiga förvirring! 🥖🧀🤪  
"
      />
      <FlyttbarKnapp
        onPress={handleButtonPress}
        buttonText="Få ett smakprov..."
      />
      <Link style={styles.link} href="./profil">
        Profil
      </Link>
      <Link style={styles.link} href="./galleri">
        Gallleri
      </Link>
      <LogoutButton />
    </View>
  );
};

export default Landing;
