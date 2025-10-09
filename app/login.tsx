import { useState } from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "@/src/shared/ui/StyledButton";
import StyledTextInput from "@/src/shared/ui/StyledTextInput";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/");
  };

  return (
    <StyledLayout style={styles.container}>
      <View style={styles.content}>
        <StyledText variant="title" style={styles.title}>
          Вход в аккаунт
        </StyledText>

        <StyledTextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />

        <StyledTextInput
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <StyledButton
          label="Войти"
          onPress={handleLogin}
          style={styles.button}
        />
      </View>
    </StyledLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});
