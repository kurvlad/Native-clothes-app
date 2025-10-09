import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

function RootNavigator() {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: "Назад",
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="section"
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="address/index"
        options={{
          headerTitle: "Address",
        }}
      />
      <Stack.Screen
        name="product/[uuid_product]"
        options={{
          headerTitle: "",
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  DefaultTheme.colors.background = "rgb(255,255,255)";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
