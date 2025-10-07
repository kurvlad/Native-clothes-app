import { FlatList, StyleSheet, ListRenderItem } from "react-native";

interface CarouselProps {
  data?: readonly unknown[] | null | undefined;
  renderItem: ListRenderItem<any>;
}

const Carousel = ({ data, renderItem }: CarouselProps) => {
  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={data}
      renderItem={renderItem}
      horizontal={true}
      decelerationRate="fast"
      snapToAlignment="start"
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({
  flatListContainer: {
    gap: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
