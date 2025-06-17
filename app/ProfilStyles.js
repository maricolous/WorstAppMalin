import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    padding: 30,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "#f4d35e",
    marginBottom: 15,
  },
  username: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    fontStyle: "italic",
  },
  followersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  followersEmoji: {
    fontSize: 28,
    marginRight: 8,
  },
  followersText: {
    fontSize: 18,
    color: "red",
  },
  button: {
    backgroundColor: "#f4d35e",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "red",
  },
  message: {
    marginTop: 25,
    fontSize: 16,
    color: "red",
    fontWeight: "600",
  },
});

export default styles;
