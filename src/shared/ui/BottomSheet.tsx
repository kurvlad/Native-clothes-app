import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import StyledText from "./StyledText";
import { ReactElement } from "react";
import { Ionicons } from "@expo/vector-icons";

interface BottomSheetProps {
  isVisible: boolean;
  closeBottomSheet: () => void;
  children: ReactElement;
  title: string;
}

const BottomSheet = ({
  isVisible,
  closeBottomSheet,
  children,
  title,
}: BottomSheetProps) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={closeBottomSheet}
      statusBarTranslucent={true}
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity
          style={styles.overlayTouchable}
          activeOpacity={1}
          onPress={closeBottomSheet}
        />
        <View style={styles.bottomSheet}>
          <View>
            <StyledText variant="heading" style={styles.title}>
              {title}
            </StyledText>
            <TouchableOpacity style={styles.icon} onPress={closeBottomSheet}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </View>
          <ScrollView>{children}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomSheet: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: "60%",
    minHeight: "30%",
  },

  icon: {
    position: "absolute",
    right: 0,
  },
  title: {
    textAlign: "center",
  },
  overlayTouchable: {
    flex: 1,
  },
});

export default BottomSheet;
