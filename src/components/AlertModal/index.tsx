// AlertModal.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { clearError } from '../../store/actions';


const AlertModal: React.FC = () => {
  const errorData = useSelector((state: any) => state.stateContent.errorData);
  const dispatch = useDispatch();

  const closeModal = async() => {
   clearError(dispatch);
  };

  return (
    <Modal visible={errorData.isError} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{errorData?.error}</Text>
            <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#3f51b5',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlertModal;
