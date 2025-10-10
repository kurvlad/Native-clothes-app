import { useState } from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "@/src/shared/ui/StyledButton";
import StyledTextInput from "@/src/shared/ui/StyledTextInput";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { useRouter } from "expo-router";
import { useAuthContext } from "@/src/appGlobal/contexts/AuthContext";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuthContext();

  const handleLogin = () => {
    login();
    router.replace("/");
  };
  const handleRouteLogin = () => {
    router.replace("/login");
  };

  return (
    <StyledLayout style={styles.container}>
      <View style={styles.content}>
        <StyledText variant="title" style={styles.title}>
          Создание аккаунта
        </StyledText>

        <StyledTextInput
          placeholder="Имя"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
        <StyledTextInput
          placeholder="Фамилия"
          value={family}
          onChangeText={setFamily}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
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
          label="Зарегистрироваться"
          onPress={handleLogin}
          style={styles.button}
        />
        <StyledButton
          label="Назад"
          onPress={handleRouteLogin}
          style={styles.button}
          variant="secondary"
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
