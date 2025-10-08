import { StyleSheet, TouchableOpacity, View } from "react-native";
import StyledText from "./StyledText";
import { COLORS } from "../constants/ui";
import { Ionicons } from "@expo/vector-icons";

interface NavigationButtonProps {
  title: string;
  onPress: () => void;
}

const NavigationButton = ({ title, onPress }: NavigationButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.userSection}>
        <View>
          <StyledText variant="heading">{title}</StyledText>
        </View>
        <Ionicons name="chevron-forward-outline" size={18} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatarSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default NavigationButton;
