import { mockClothes } from "@/src/shared/mock/mockClothes";
import StyledLayoutWithouScroll from "@/src/shared/ui/StyledLayoutWithouScroll";
import StyledText from "@/src/shared/ui/StyledText";
import CardFlatList from "@/src/widgets/CardFlatList/CardFlatList";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

export default function SectionPage() {
  const params = useLocalSearchParams();

  const { categoryName } = params;
  return (
    <StyledLayoutWithouScroll>
      <StyledText style={styles.title} variant="heading">
        {categoryName}
      </StyledText>
      <CardFlatList data={mockClothes} />
    </StyledLayoutWithouScroll>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 12,
  },
});
