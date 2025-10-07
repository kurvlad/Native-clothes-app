import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText, { variantText } from "./StyledText";
import { ComponentProps, FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, COLORSTypes } from "@/src/shared/constants/ui";

interface StyledButtonProps extends TouchableOpacityProps {
  label?: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "large" | "small";
  variant?: "primary" | "danger" | "secondary" | "borderless";
  color?: COLORSTypes;
  textVariant?: variantText;
}

const StyledButton: FC<StyledButtonProps> = ({
  label,
  icon,
  style,
  size = "default",
  variant = "primary",
  disabled,
  color,
  textVariant,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[
        styles.button,
        size === "small" && styles.small,
        size === "large" && styles.large,
        variant === "danger" && styles.danger,
        variant === "secondary" && styles.secondary,
        variant === "borderless" && styles.borderless,
        disabled && styles.diabled,
        style,
      ]}
    >
      {label && (
        <StyledText variant={textVariant} style={styles.text}>
          {label}
        </StyledText>
      )}
      {icon && (
        <Ionicons name={icon} size={14} color={color || COLORS.PRIMARY_ICON} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_TEXT,
  },

  text: {
    color: COLORS.PRIMARY_TEXT,
  },
  //size
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  large: {
    paddingHorizontal: 30,
    height: "100%",
  },
  //variants
  danger: {
    backgroundColor: COLORS.PRIMARY_DANGER,
  },
  secondary: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  borderless: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  diabled: {
    opacity: 0.7,
  },
});

export default StyledButton;
