import { COLORS } from "@/src/shared/constants/ui";
import NavigationButton from "@/src/shared/ui/NavigationButton";
import StyledAvatar from "@/src/shared/ui/StyledAvatar";
import StyledButton from "@/src/shared/ui/StyledButton";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { StyleSheet, View } from "react-native";

const User = () => {
  return (
    <StyledLayout>
      <View style={styles.avatarSection}>
        <StyledAvatar image="https://media.2x2tv.ru/content/images/2021/02/_00-9.jpg" />
      </View>
      <View style={styles.userSection}>
        <View>
          <StyledText variant="heading">Gilbert Jones</StyledText>
          <StyledText>Gilbertjones@gmail.com</StyledText>
          <StyledText>123-323-7890</StyledText>
        </View>
        <StyledButton
          variant="borderless"
          color={"PRIMARY_ACTIVE_BUTTON"}
          label="Edit"
          textStyle={styles.textButton}
        />
      </View>
      <View style={styles.navSection}>
        <NavigationButton title={"Адрес"} onPress={() => {}} />
        <NavigationButton title={"Вишлист"} onPress={() => {}} />
        <NavigationButton title={"Платежная система"} onPress={() => {}} />
        <NavigationButton title={"Помощь"} onPress={() => {}} />
        <NavigationButton title={"FAQ"} onPress={() => {}} />
      </View>
      <StyledButton label="Выйти" variant="danger" />
    </StyledLayout>
  );
};

const styles = StyleSheet.create({
  userSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  avatarSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  textButton: {
    color: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
  navSection: {
    gap: 12,
    marginBottom: 30,
  },
});

export default User;
