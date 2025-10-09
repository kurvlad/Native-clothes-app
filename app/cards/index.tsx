import InfoSection from "@/src/shared/ui/InfoSection";
import StyledButtonFixed from "@/src/shared/ui/StyledButtonFixed";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const CardsPage = () => {
  const router = useRouter();
  const handleNavigateChangeCard = (uuid_card?: string | undefined) => {
    router.push({
      pathname: "/cards/add_card",
      params: {
        uuid_card: uuid_card,
      },
    });
  };
  const handleNavigateAddCard = () => {
    router.push({
      pathname: "/cards/add_card",
    });
  };
  return (
    <View style={styles.container}>
      <StyledLayout style={styles.styledContainer}>
        <InfoSection
          onPress={() => {
            handleNavigateChangeCard("1");
          }}
        >
          <StyledText>****4187</StyledText>
        </InfoSection>
        <InfoSection
          onPress={() => {
            handleNavigateChangeCard("2");
          }}
        >
          <StyledText>****4187</StyledText>
        </InfoSection>
        <InfoSection
          onPress={() => {
            handleNavigateChangeCard("3");
          }}
        >
          <StyledText>****4187</StyledText>
        </InfoSection>
      </StyledLayout>
      <StyledButtonFixed
        label="Добавить Карту"
        icon="add"
        onPress={() => {
          handleNavigateAddCard();
        }}
      ></StyledButtonFixed>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  styledContainer: {
    marginBottom: 85,
  },
});

export default CardsPage;
