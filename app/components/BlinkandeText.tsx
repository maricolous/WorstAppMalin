import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

interface BlinkandeTextProps {
  text: string;
}

const BlinkandeText: React.FC<BlinkandeTextProps> = ({ text }) => {
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return textVisible && <Text style={styles.blinkingText}>{text}</Text>;
};

const styles = StyleSheet.create({
  blinkingText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BlinkandeText;
