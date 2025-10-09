import { mockClothes } from "@/src/shared/mock/mockClothes";
import StyledLayoutWithouScroll from "@/src/shared/ui/StyledLayoutWithouScroll";
import StyledText from "@/src/shared/ui/StyledText";
import CardFlatList from "@/src/widgets/CardFlatList/CardFlatList";

import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

const WishlistTypePage = () => {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <StyledLayoutWithouScroll>
        <StyledText variant="heading" style={styles.title}>
          {params.wishlist_type}
        </StyledText>

        <CardFlatList data={mockClothes} />
      </StyledLayoutWithouScroll>
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
  title: {
    textAlign: "center",
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

export default WishlistTypePage;
