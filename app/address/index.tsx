import InfoSection from "@/src/shared/ui/InfoSection";
import StyledButtonFixed from "@/src/shared/ui/StyledButtonFixed";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

const AddressPage = () => {
  const router = useRouter();
  const handleNavigateChangeAddress = (uuid_address?: string | undefined) => {
    router.push({
      pathname: "/address/add_address",
      params: {
        uuid_address: uuid_address,
      },
    });
  };
  const handleNavigateAddAddress = () => {
    router.push({
      pathname: "/address/add_address",
    });
  };
  return (
    <View style={styles.container}>
      <StyledLayout style={styles.styledContainer}>
        <InfoSection
          onPress={() => {
            handleNavigateChangeAddress("1");
          }}
        >
          <StyledText>Москва, ул. Ленина, д. 1, кв.102</StyledText>
        </InfoSection>
        <InfoSection
          onPress={() => {
            handleNavigateChangeAddress("2");
          }}
        >
          <StyledText>Москва, ул. Ленина, д. 1, кв.102</StyledText>
        </InfoSection>
        <InfoSection
          onPress={() => {
            handleNavigateChangeAddress("3");
          }}
        >
          <StyledText>Москва, ул. Ленина, д. 1, кв.102</StyledText>
        </InfoSection>
      </StyledLayout>
      <StyledButtonFixed
        label="Добавить адрес"
        icon="add"
        onPress={() => {
          handleNavigateAddAddress();
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

export default AddressPage;
