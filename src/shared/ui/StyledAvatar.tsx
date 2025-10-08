import { Image, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

interface StyledAvatarProps {
  image: string;
  name?: string;
}

const StyledAvatar = ({ image, name }: StyledAvatarProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          // uri: "",
          uri: image,
        }}
        style={styles.image}
      />
      {name && <StyledText style={styles.text}>{name}</StyledText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
  },
  text: {
    textAlign: "center",
  },
});

export default StyledAvatar;
