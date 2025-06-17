import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
    justifyContent: "center",
    color: "#fff",
  },
  nonsenseText: {
    color: "#ccc",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 50,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 100,
  },
  button: {
    backgroundColor: "#ff0033",
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignItems: "center",
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    color: "#fff",
    marginBottom: 10,
  },
});

export default styles;
