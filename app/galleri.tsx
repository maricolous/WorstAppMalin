import { View } from "react-native";
import BlinkandeBilder from "./components/BlinkandeBilder";
import styles from "./GalleriStyles";

export default function Galleri() {
  return (
    <View style={styles.container}>
      <BlinkandeBilder
        imageSource1={require("../assets/images/baguette.jpg")}
        imageSource2={require("../assets/images/brie.jpg")}
        label1="Baguette"
        label2="Brie"
      />
    </View>
  );
}
