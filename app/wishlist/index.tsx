import NavigationButton from "@/src/shared/ui/NavigationButton";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const WishlistPage = () => {
  const router = useRouter();
  const handleNavigateWishlistPage = (wishlist_type?: string | undefined) => {
    router.push({
      pathname: "/wishlist/wishlist_type",
      params: {
        wishlist_type: wishlist_type,
      },
    });
  };
  return (
    <View style={styles.container}>
      <StyledLayout style={styles.styledContainer}>
        <View style={styles.navSection}>
          <NavigationButton
            title={"Избранное"}
            onPress={() => {
              handleNavigateWishlistPage("Избранное");
            }}
          />
          <NavigationButton
            title={"Футболки"}
            onPress={() => {
              handleNavigateWishlistPage("Футболки");
            }}
          />
        </View>
      </StyledLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  styledContainer: {
    gap: 25,
  },
  navSection: {
    gap: 12,
    marginBottom: 30,
  },
});

export default WishlistPage;
