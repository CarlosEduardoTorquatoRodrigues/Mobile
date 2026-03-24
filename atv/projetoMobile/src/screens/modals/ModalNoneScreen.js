import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';

export default function ModalNoneScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <ScreenContainer backgroundColor="#FFF3E0">
      <Text style={[styles.headerText, { color: '#FF9800' }]}>
        Modo: NONE
      </Text>

      <CustomButton
        title="ABRIR MODAL NONE"
        onPress={() => setVisible(true)}
        color="#FF9800"
      />

      <CustomModal
        visible={visible}
        onClose={() => setVisible(false)}
        title="Animação None"
        message="Eu apareci instantaneamente, sem transição suave."
        themeColor="#FF9800"
        animationType="none"
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
  },
});