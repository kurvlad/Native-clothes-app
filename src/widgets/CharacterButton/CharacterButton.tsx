import { COLORS } from "@/src/shared/constants/ui";
import BottomSheet from "@/src/shared/ui/BottomSheet";
import StyledText from "@/src/shared/ui/StyledText";
import { Ionicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface CharacterButtonProps {
  title: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string>>;
  data: string[] | undefined;
}

const CharacterButton = ({
  title,
  value,

  onChange,

  data,
}: CharacterButtonProps) => {
  const [isOpen, setisOpen] = useState(false);
  const openBottomSheet = () => setisOpen(true);
  const closeBottomSheet = () => setisOpen(false);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={openBottomSheet}>
        <StyledText>{title}</StyledText>
        <View style={styles.arrowSection}>
          <StyledText variant="heading">{value}</StyledText>
          <Ionicons
            name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
            size={24}
          />
        </View>
      </TouchableOpacity>

      <BottomSheet
        title={"Выберите цвет"}
        isVisible={isOpen}
        closeBottomSheet={closeBottomSheet}
      >
        <View>
          {data?.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.colorOption}
              onPress={() => {
                onChange(item);
                closeBottomSheet();
              }}
            >
              <StyledText style={styles.colorText}>{item}</StyledText>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
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
  colorOption: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  colorText: {
    fontSize: 16,
  },
});

export default CharacterButton;
