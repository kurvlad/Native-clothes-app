import {
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { FC, ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type StyledLayoutProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

const StyledLayout: FC<StyledLayoutProps> = ({ children, style }) => {
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
        style,
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
