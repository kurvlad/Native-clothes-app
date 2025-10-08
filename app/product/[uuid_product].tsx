import { COLORS } from "@/src/shared/constants/ui";
import { getClothesById } from "@/src/shared/mock/mockClothesWithInfo";
import BottomSheet from "@/src/shared/ui/BottomSheet";

import Carousel from "@/src/shared/ui/Carousel";
import ImageWithSkeleton from "@/src/shared/ui/ImageWithSkeleton";
import StyledButton from "@/src/shared/ui/StyledButton";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import CharacterButton from "@/src/widgets/CharacterButton/CharacterButton";
import CharacterQuantity from "@/src/widgets/CharacterQuantity/CharacterQuantity";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

interface ProductImageInterface {
  alt: string;
  url: string;
}

export default function ProductPage() {
  const params = useLocalSearchParams();
  const { uuid_product } = params;

  const item = getClothesById(String(uuid_product));

  const [size, setSize] = useState<string>("");

  const [color, setColor] = useState<string>("");

  const [quantity, setQuantity] = useState<number>(1);
  const [isVisibleCart, setIsVisibleCart] = useState<boolean>(false);

  const handleOpenCart = () => {
    setIsVisibleCart(true);
  };
  const handleCloseCart = () => {
    setIsVisibleCart(false);
  };

  return (
    <View style={styles.container}>
      <StyledLayout style={styles.styledContainer}>
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
        <StyledText variant="heading" style={styles.price}>
          ${item?.price}
        </StyledText>
        <View style={styles.characterContainer}>
          <View>
            <CharacterButton
              title="Размер"
              value={size}
              onChange={setSize}
              data={item?.sizes}
            />
          </View>
          <View>
            <CharacterButton
              title="Цвет"
              value={color}
              onChange={setColor}
              data={item?.color}
            />
          </View>
          <View>
            <CharacterQuantity
              title="Количество"
              value={quantity}
              setValue={setQuantity}
            />
          </View>
          <View>
            <StyledText variant="subtitle">{item?.description}</StyledText>
          </View>
        </View>
      </StyledLayout>
      <View style={styles.fixedButtonContainer}>
        <StyledButton
          label="Добавить в корзину "
          icon={"bag-add-outline"}
          color="PRIMARY_BUTTON_TEXT"
          style={styles.fixedButton}
          onPress={handleOpenCart}
          disabled={!Boolean(size) || !Boolean(color) || !Boolean(quantity)}
        />
      </View>
      <BottomSheet
        title="Вы добавили в корзину"
        isVisible={isVisibleCart}
        closeBottomSheet={handleCloseCart}
      >
        <View>
          <StyledText>Размер:{size}</StyledText>
          <StyledText>Цвет:{color}</StyledText>
          <StyledText>Количество:{quantity}</StyledText>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  styledContainer: {
    marginBottom: 85,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    height: 200,
    width: 200,
    aspectRatio: 1,
  },
  fixedButtonContainer: {
    position: "absolute",
    left: 15,
    right: 15,
    bottom: 25,
    backgroundColor: "transparent",
  },
  fixedButton: {
    width: "100%",
  },
  price: {
    color: COLORS.PRIMARY_ACTIVE_BUTTON,
  },
  characterContainer: {
    gap: 20,
  },
});
