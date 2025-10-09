import StyledButtonFixed from "@/src/shared/ui/StyledButtonFixed";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import StyledTextInput from "@/src/shared/ui/StyledTextInput";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const AddCardPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const handleClick = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StyledLayout style={styles.styledContainer}>
        <StyledText>{params.uuid_card}</StyledText>
        <View style={styles.content}>
          <StyledTextInput placeholder="Номер карты" />
          <View style={styles.twiceRow}>
            <StyledTextInput placeholder="Дата" style={styles.rowInput} />
            <StyledTextInput placeholder="CCV" style={styles.rowInput} />
          </View>
          <StyledTextInput placeholder="Имя" />
        </View>
      </StyledLayout>
      <StyledButtonFixed label="Сохранить" onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    gap: 12,
  },
  styledContainer: {
    marginBottom: 85,
  },
  twiceRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  rowInput: {
    flex: 1,
    flexShrink: 1,
    minWidth: 0,
  },
});

export default AddCardPage;
