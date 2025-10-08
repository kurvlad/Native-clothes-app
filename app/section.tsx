import { mockClothes } from "@/src/shared/mock/mockClothes";
import StyledLayoutWithouScroll from "@/src/shared/ui/StyledLayoutWithouScroll";
import StyledText from "@/src/shared/ui/StyledText";
import { Card } from "@/src/widgets/Card/Card";
import { useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

export default function SectionPage() {
  const params = useLocalSearchParams();

  const { categoryName } = params;
  return (
    <StyledLayoutWithouScroll>
      <StyledText style={styles.title} variant="heading">
        {categoryName}
      </StyledText>
      <FlatList
        columnWrapperStyle={styles.flatListContainer}
        data={mockClothes}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            uuid_product={item.uuid_product}
            src={item.src}
            price={item.price}
            isLiked={item.isLiked}
            title={item.title}
          />
        )}
      />
    </StyledLayoutWithouScroll>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 12,
  },
  flatListContainer: {
    gap: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
