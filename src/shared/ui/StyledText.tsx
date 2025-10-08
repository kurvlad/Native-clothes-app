import { COLORS } from "@/src/shared/constants/ui";
import { StyleSheet, Text, TextProps } from "react-native";

export type variantText =
  | "primary"
  | "title"
  | "subtitle"
  | "heading"
  | "small";

type StyledTextProps = TextProps & {
  variant?: variantText;
};

const StyledText: React.FC<StyledTextProps> = ({
  style,
  variant = "primary",
  ...props
}) => {
  return (
    <Text
      style={[
        styles.base,
        variant === "title" && styles.title,
        variant === "subtitle" && styles.subtitle,
        variant === "small" && styles.small,
        variant === "heading" && styles.heading,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "300",
  },
  heading: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "600",
  },
  small: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default StyledText;
