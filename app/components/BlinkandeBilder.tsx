import React, { useEffect, useRef, useState } from "react";
import { View, Animated, Text } from "react-native";
import styles from "./BlinkandeBilderStyles";

interface BlinkandeBilderProps {
  imageSource1: any;
  imageSource2: any;
  label1?: string;
  label2?: string;
}

const BlinkandeBilder: React.FC<BlinkandeBilderProps> = ({
  imageSource1,
  imageSource2,
  label1,
  label2,
}) => {
  const fadeAnim1 = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const animateStep = () => {
      switch (step) {
        case 0:
          Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
          timeout = setTimeout(() => setStep(1), 250);
          break;

        case 1:
          Animated.timing(fadeAnim1, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
          timeout = setTimeout(() => setStep(2), 150);
          break;

        case 2:
          Animated.timing(fadeAnim1, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
          timeout = setTimeout(() => setStep(3), 200);
          break;

        case 3:
          Animated.parallel([
            Animated.timing(fadeAnim1, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim2, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }),
          ]).start();
          timeout = setTimeout(() => setStep(4), 1000);
          break;

        case 4:
          Animated.timing(fadeAnim2, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
          timeout = setTimeout(() => setStep(0), 200);
          break;
      }
    };

    animateStep();

    return () => clearTimeout(timeout);
  }, [step, fadeAnim1, fadeAnim2]);

  const currentLabel = step >= 0 && step <= 2 ? label1 : label2;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={imageSource1}
          style={[styles.image, { opacity: fadeAnim1 }]}
        />
        <Animated.Image
          source={imageSource2}
          style={[styles.image, { opacity: fadeAnim2, position: "absolute" }]}
        />
      </View>
      {currentLabel && <Text style={styles.label}>{currentLabel}</Text>}
    </View>
  );
};

export default BlinkandeBilder;
