import StyledButton from "@/src/shared/ui/StyledButton";
import StyledLayout from "@/src/shared/ui/StyledLayout";
import StyledText from "@/src/shared/ui/StyledText";
import { useRouter } from "expo-router";

const Orders = () => {
  const router = useRouter();
  return (
    <StyledLayout>
      <StyledText>orders</StyledText>
      <StyledButton
        label="Открыть категории"
        onPress={() => router.push("/category")}
      />
    </StyledLayout>
  );
};

export default Orders;
