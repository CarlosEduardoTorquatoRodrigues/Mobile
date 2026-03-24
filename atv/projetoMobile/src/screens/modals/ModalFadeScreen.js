import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import CustomButton from '../../components/CustomButton';
import CustomModal from '../../components/CustomModal';

export default function ModalFadeScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <ScreenContainer backgroundColor="#E8F5E9">
      <Text style={[styles.headerText, { color: '#4CAF50' }]}>
        Modo: FADE
      </Text>

      <CustomButton
        title="ABRIR MODAL FADE"
        onPress={() => setVisible(true)}
        color="#4CAF50"
      />

      <CustomModal
        visible={visible}
        onClose={() => setVisible(false)}
        title="Animação Fade"
        message="Perceba como eu surgi alterando a opacidade (transparência)."
        themeColor="#4CAF50"
        animationType="fade"
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