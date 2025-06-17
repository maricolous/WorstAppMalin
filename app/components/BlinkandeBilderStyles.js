import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    width: 420,
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 600,
    resizeMode: "contain",
  },
  label: {
    marginTop: 10,
    fontSize: 58,
    fontWeight: "500",
    color: "red",
  },
});

export default styles;
