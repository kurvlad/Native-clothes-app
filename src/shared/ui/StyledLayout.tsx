import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { FC, ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type StyledLayoutProps = {
  children: ReactNode;
};

const StyledLayout: FC<StyledLayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          paddingBottom: 0,
        },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  scrollContainer: {},
});
export default StyledLayout;
