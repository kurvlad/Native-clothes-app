import { StyleSheet, View } from "react-native";
import StyledButton, { StyledButtonProps } from "./StyledButton";

const StyledButtonFixed = ({ ...props }: StyledButtonProps) => {
  return (
    <View style={styles.fixedButtonContainer}>
      <StyledButton {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  fixedButtonContainer: {
    position: "absolute",
    left: 15,
    right: 15,
    bottom: 25,
    backgroundColor: "transparent",
  },
});

export default StyledButtonFixed;
