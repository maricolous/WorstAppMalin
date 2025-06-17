import React from "react";
// @ts-ignore
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router";
import BlinkandeText from "./components/BlinkandeText";

const OnboardingScreen = () => {
  const router = useRouter();

  const handleFinish = () => {
    router.replace("/landing");
  };

  return (
    <Onboarding
      onSkip={handleFinish}
      onDone={handleFinish}
      pages={[
        {
          backgroundColor: "blue",
          title: "Baguetten för dig framåt",
          subtitle: "Eller.....?",
          image: <BlinkandeText text="Baguette" />,
        },
        {
          backgroundColor: "blue",
          image: <BlinkandeText text="Merde!" />,
          title: "Du har nu loggat ut",
          subtitle: "Oops!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
