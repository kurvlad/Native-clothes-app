import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledTextInput from "@/src/shared/ui/StyledTextInput";
import { useRouter } from "expo-router";
import CarouselCard from "@/src/widgets/CarouselCard/CarouselCard";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { mockClothes } from "@/src/shared/mock/mockClothes";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const router = useRouter();

  return (
    <StyledLayout>
      <StyledTextInput
        style={styles.input}
        placeholder="Search"
        value={text}
        onChangeText={setText}
      />
      <CarouselCard
        title={"Top selling"}
        data={mockClothes}
        showMore={() =>
          router.push({
            pathname: "/section",
            params: { categoryName: "Top selling" },
          })
        }
      />
      <CarouselCard
        title={"Top selling"}
        data={mockClothes}
        showMore={() =>
          router.push({
            pathname: "/section",
            params: { categoryName: "Top selling" },
          })
        }
      />
      <CarouselCard
        title={"Top selling"}
        data={mockClothes}
        showMore={() =>
          router.push({
            pathname: "/section",
            params: { categoryName: "Top selling" },
          })
        }
      />
      <CarouselCard
        title={"Top selling"}
        data={mockClothes}
        showMore={() =>
          router.push({
            pathname: "/section",
            params: { categoryName: "Top selling" },
          })
        }
      />
    </StyledLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
  input: {
    borderRadius: 50,
  },
});
