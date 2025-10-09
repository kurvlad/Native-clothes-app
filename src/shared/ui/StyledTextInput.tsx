import { COLORS } from "@/src/shared/constants/ui";
import { forwardRef } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInputProps = TextInputProps & {
  isError?: boolean;
};

const StyledTextInput = forwardRef<TextInput, StyledTextInputProps>(
  ({ isError, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        {...props}
        style={[styles.input, isError && styles.error, props.style]}
        placeholderTextColor={COLORS.PLACEHOLDER}
      />
    );
  }
);
StyledTextInput.displayName = "StyledTextInput";

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: COLORS.PRIMARY_TEXT,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BORDER,
    backgroundColor: COLORS.BACKGROUND,
  },
  error: {
    borderColor: COLORS.PRIMARY_DANGER,
  },
});

export default StyledTextInput;
