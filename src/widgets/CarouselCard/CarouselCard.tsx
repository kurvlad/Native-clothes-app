import { StyleSheet, View } from "react-native";
import { Card } from "../Card/Card";
import StyledText from "@/src/shared/ui/StyledText";
import { ClothesEntitiesInterface } from "@/src/entities/clothes";
import StyledButton from "@/src/shared/ui/StyledButton";
import Carousel from "@/src/shared/ui/Carousel";

interface CarouselCardInterface {
  data: ClothesEntitiesInterface[];
  title: string;
  showMore: () => void;
}

const CarouselCard = ({ data, title, showMore }: CarouselCardInterface) => {
  return (
    <View>
      <View style={styles.headSection}>
        <StyledText variant="heading">{title}</StyledText>
        <StyledButton
          style={styles.buttonShow}
          variant="borderless"
          label="See All"
          textVariant="subtitle"
          onPress={showMore}
        ></StyledButton>
      </View>
      <Carousel
        data={data}
        renderItem={(item: { item: ClothesEntitiesInterface }) => {
          return (
            <Card
              uuid_product={item.item.uuid_product}
              price={item.item.price}
              src={item.item.src}
              isLiked={item.item.isLiked}
            />
          );
        }}
      />
    </View>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  headSection: {
    paddingTop: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  buttonShow: {
    paddingVertical: 0,
    paddingHorizontal: 14,
  },
});
