import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 4,
    marginBottom: 20,
    color: "black",
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    color: "black",
    fontSize: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 5,
    color: "black",
    fontSize: 4,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "blue",
    fontWeight: "bold",
  },
  toggleContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  toggleText: {
    color: "#007AFF",
    paddingLeft: 5,
  },
  error: {
    marginTop: 10,
    color: "red",
  },
  toggleTextWhite: {
    color: "black",
  },
});

export default styles;
