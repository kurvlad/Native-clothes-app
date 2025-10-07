import { StatusBar, StyleSheet, View } from "react-native";
import { FC, ReactNode } from "react";

type StyledLayoutWithouScrollProps = {
  children: ReactNode;
};

const StyledLayoutWithouScroll: FC<StyledLayoutWithouScrollProps> = ({
  children,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.scrollContainer}>{children}</View>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContainer: {
    flex: 1,
  },
});
export default StyledLayoutWithouScroll;

