import { StyleSheet, View } from "react-native";
import StyledButton from "./StyledButton";
import { COLORS } from "../constants/ui";
import { ReactElement } from "react";
interface InfoSectionProps {
  onPress: () => void;
  children: ReactElement;
}

const InfoSection = ({ onPress, children }: InfoSectionProps) => {
  return (
    <View style={styles.userSection}>
      <View style={styles.contentContainer}>{children}</View>
      <StyledButton
        variant="borderless"
        color={"PRIMARY_ACTIVE_BUTTON"}
        label="Изменить"
        textStyle={styles.textButton}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    marginRight: 12,
    flexShrink: 1,
  },
  textButton: {
    color: COLORS.PRIMARY_ACTIVE_BUTTON,
    flexShrink: 0,
  },
});

export default InfoSection;
