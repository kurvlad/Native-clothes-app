import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ComponentProps, FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, COLORSTypes } from "@/src/shared/constants/ui";

interface StyledIconButtonProps extends TouchableOpacityProps {
  label?: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "large" | "small";
  variant?: "primary" | "danger" | "secondary" | "borderless";
  color?: COLORSTypes;
}

const StyledIconButton: FC<StyledIconButtonProps> = ({
  label,
  icon,
  style,
  disabled,
  color,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[style, styles.button, disabled && styles.diabled]}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={30}
          color={(color && COLORS[color]) || COLORS.SECONDARY_ICON}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },

  text: {
    color: COLORS.PRIMARY_ICON,
  },
  diabled: {
    opacity: 0.7,
  },
});

export default StyledIconButton;
