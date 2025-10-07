import { getClothesById } from "@/src/shared/mock/mockClothesWithInfo";
import Carousel from "@/src/shared/ui/Carousel";
import ImageWithSkeleton from "@/src/shared/ui/ImageWithSkeleton";
import StyledButton from "@/src/shared/ui/StyledButton";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

interface ProductImageInterface {
  alt: string;
  url: string;
}

export default function ProductPage() {
  const params = useLocalSearchParams();
  const { uuid_product } = params;

  const item = getClothesById(String(uuid_product));

  return (
    <StyledLayout>
      <Carousel
        data={item?.images}
        renderItem={({ item }) => (
          <ImageWithSkeleton
            source={{ uri: (item as ProductImageInterface).url }}
            alt="Изображение товара"
            style={styles.image}
            resizeMode="cover"
          />
        )}
      />
      <StyledText variant="title">{item?.title}</StyledText>
      <StyledText variant="title">Цена: ${item?.price}</StyledText>
      <StyledText variant="title">
        Доступные размеры:{" "}
        {item?.sizes.map((item) => {
          return <StyledText key={item}>{item},</StyledText>;
        })}
      </StyledText>
      <StyledText variant="title">Оценка: {item?.rate}</StyledText>
      <StyledButton
        label="Добавить в корзину "
        icon={"bag-add-outline"}
        color="PRIMARY_BUTTON_TEXT"
      />
    </StyledLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    aspectRatio: 1,
  },
});
