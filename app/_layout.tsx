import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="landing" />
      <Stack.Screen name="profil" />
      <Stack.Screen name="galleri" />
    </Stack>
  );
}
