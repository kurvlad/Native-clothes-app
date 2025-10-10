import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Redirect, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  AuthProvider,
  useAuthContext,
} from "@/src/appGlobal/contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";

export const unstable_settings = {
  anchor: "(tabs)",
};

const PUBLIC_ROUTES = ["/login", "/registration"];

function RootNavigator() {
  const { isAuth, isLoading } = useAuthContext();
  const pathname = usePathname();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isAuth && !PUBLIC_ROUTES.includes(pathname)) {
    return <Redirect href="/login" />;
  }

  if (isAuth && PUBLIC_ROUTES.includes(pathname)) {
    return <Redirect href="/(tabs)" />;
  }

  if (!isAuth) {
    return (
      <Stack
        screenOptions={{
          headerBackTitle: "Назад",
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="registration" options={{ headerShown: false }} />
      </Stack>
    );
  }

  if (isAuth) {
    return (
      <Stack
        screenOptions={{
          headerBackTitle: "Назад",
        }}
      >
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
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  DefaultTheme.colors.background = "rgb(255,255,255)";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
