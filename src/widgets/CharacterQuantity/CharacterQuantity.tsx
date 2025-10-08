import { COLORS } from "@/src/shared/constants/ui";
import StyledButton from "@/src/shared/ui/StyledButton";
import StyledText from "@/src/shared/ui/StyledText";
import { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";

interface CharacterQuantityProps {
  title: string;
  value: number | undefined;
  setValue: Dispatch<SetStateAction<number>>;
}

const CharacterQuantity = ({
  title,
  value,
  setValue,
}: CharacterQuantityProps) => {
  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setValue((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };
  return (
    <View style={styles.container}>
      <StyledText>{title}</StyledText>
      <View style={styles.arrowSection}>
        <StyledButton
          icon="remove-circle-outline"
          style={styles.buttonIcon}
          onPress={handleDecrement}
        />
        <StyledText variant="heading" style={styles.valueText}>
          {value}
        </StyledText>
        <StyledButton
          icon="add-circle-outline"
          style={styles.buttonIcon}
          onPress={handleIncrement}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: 22,
    paddingVertical: 18,
    borderRadius: 50,
  },
  arrowSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonIcon: {
    paddingHorizontal: 18,
  },
  valueText: {
    minWidth: 30,
  },
});

export default CharacterQuantity;
