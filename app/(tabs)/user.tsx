import InfoSection from "@/src/shared/ui/InfoSection";
import NavigationButton from "@/src/shared/ui/NavigationButton";
import StyledAvatar from "@/src/shared/ui/StyledAvatar";
import StyledButton from "@/src/shared/ui/StyledButton";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const User = () => {
  const router = useRouter();
  const hangleOut = () => {
    router.replace("/login");
  };

  return (
    <StyledLayout>
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <StyledAvatar image="https://media.2x2tv.ru/content/images/2021/02/_00-9.jpg" />
        </View>
        <InfoSection
          onPress={() => {
            router.push("/user_card");
          }}
        >
          <View>
            <StyledText variant="heading">Gilbert Jones</StyledText>
            <StyledText>Gilbertjones@gmail.com</StyledText>
            <StyledText>123-323-7890</StyledText>
          </View>
        </InfoSection>
        <View style={styles.navSection}>
          <NavigationButton
            title={"Адрес"}
            onPress={() => {
              router.push("/address");
            }}
          />
          <NavigationButton
            title={"Вишлист"}
            onPress={() => {
              router.push("/wishlist");
            }}
          />
          <NavigationButton
            title={"Платежная система"}
            onPress={() => {
              router.push("/cards");
            }}
          />
          <NavigationButton title={"Помощь"} onPress={() => {}} />
          <NavigationButton title={"FAQ"} onPress={() => {}} />
        </View>
        <StyledButton label="Выйти" variant="danger" onPress={hangleOut} />
      </View>
    </StyledLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  avatarSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  navSection: {
    gap: 12,
    marginBottom: 30,
  },
});

export default User;
