import StyledIconButton from "@/src/shared/ui/StyledIconButton";
import StyledText from "@/src/shared/ui/StyledText";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

interface CardInterface {
  uuid_product: string;
  src: string;
  price: number;
  isLiked?: boolean;
}
export const Card = ({ uuid_product, src, price, isLiked }: CardInterface) => {
  const router = useRouter();
  const cardPress = () => {
    router.push({
      pathname: "/product/[uuid_product]",
      params: { uuid_product: uuid_product },
    });
  };
  const likePress = () => {};
  return (
    <TouchableOpacity
      onPress={cardPress}
      style={styles.touchableContainer}
      activeOpacity={0.4}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: src }}
          alt="Изображение товара"
          style={styles.image}
          resizeMode="cover"
        />
        <StyledIconButton
          icon={isLiked ? "heart" : "heart-outline"}
          style={styles.likeButton}
          onPress={likePress}
        />
        <View style={styles.textContaier}>
          <StyledText variant="heading">{price && `$${price}`}</StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
    width: 200,
  },
  cardContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  image: {
    height: 300,
    width: "100%",
    aspectRatio: 1,
  },
  textContaier: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: "flex-start",
    width: "100%",
  },
  likeButton: {
    position: "absolute",
    top: 0,
    right: 10,
  },
});
