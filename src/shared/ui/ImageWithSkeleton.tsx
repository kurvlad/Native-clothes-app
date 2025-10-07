import { useState } from "react";
import { Image, ImageProps, StyleSheet, View } from "react-native";

const ImageWithSkeleton = ({ source, style, ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={[style, styles.imageContainer]}>
      {isLoading && <View style={[style, styles.skeleton]} />}
      <Image
        source={source}
        style={[style, isLoading && styles.hidden]}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        resizeMode="cover"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  skeleton: {
    backgroundColor: "#E1E9EE",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  hidden: {
    opacity: 0,
  },
});

export default ImageWithSkeleton;
