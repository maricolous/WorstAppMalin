import React, { useRef } from "react";
import { Animated, TouchableOpacity, Text } from "react-native";

interface FlyttbarKnappProps {
  onPress: () => void;
  buttonText: string;
}

const FlyttbarKnapp: React.FC<FlyttbarKnappProps> = ({
  onPress,
  buttonText,
}) => {
  const buttonX = useRef(new Animated.Value(0)).current;

  const moveButton = () => {
    const newX = Math.random() * 250;
    Animated.timing(buttonX, {
      toValue: newX,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={{ left: buttonX }}>
      <TouchableOpacity
        onPress={() => {
          moveButton();
          onPress();
        }}
      >
        <Text>{buttonText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FlyttbarKnapp;
