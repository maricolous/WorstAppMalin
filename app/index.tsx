import { View } from "react-native";
import LoginForm from "./components/LoginForm";
import styles from "./IndexStyles";

const Index = () => {
  return (
    <View style={styles.container}>
      <LoginForm></LoginForm>
    </View>
  );
};
export default Index;
