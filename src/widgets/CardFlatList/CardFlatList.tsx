import { FlatList, StyleSheet } from "react-native";
import { Card } from "../Card/Card";
import { ClothesEntitiesInterface } from "@/src/entities/clothes";

interface CardFlatListProps {
  data: ClothesEntitiesInterface[];
}
const CardFlatList = ({ data }: CardFlatListProps) => {
  return (
    <FlatList
      columnWrapperStyle={styles.flatListContainer}
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.uuid_product.toString()}
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
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CardFlatList;
