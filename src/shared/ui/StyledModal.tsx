import { COLORS } from "@/src/shared/constants/ui";
import { FC, ReactNode } from "react";
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type StyledModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const StyledModal: FC<StyledModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType="fade"
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <SafeAreaView style={styles.modal}>
          <TouchableWithoutFeedback
            onPress={(e) => {
              e.stopPropagation();
            }}
          >
            <View style={styles.modalContainer}>{children}</View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: COLORS.MODAL_SECONDARY_BACKGROUND,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    padding: 20,
    borderRadius: 10,
    width: "90%",
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
});

export default StyledModal;
