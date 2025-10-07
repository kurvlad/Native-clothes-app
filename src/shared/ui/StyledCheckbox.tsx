import { COLORS } from "@/src/shared/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import { FC, ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type StyledCheckboxProps = {
  checked: boolean;
  onChecked: () => void;
  children: ReactNode;
};

const StyledCheckbox: FC<StyledCheckboxProps> = ({
  checked,
  children,
  onChecked,
}) => {
  return (
    <TouchableOpacity onPress={onChecked} style={styles.checkTitleContainer}>
      <Ionicons
        name={checked ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER}
      />
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkTitleContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default StyledCheckbox;
