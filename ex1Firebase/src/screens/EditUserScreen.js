import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

export default function EditUserScreen({ route, navigation }) {
  const { userData } = route.params;
  const [name, setName] = useState(userData.name);
  const [birthDate, setBirthDate] = useState(userData.birthDate);

  const handleUpdate = async () => {
    try {
      const userRef = doc(db, 'users', userData.id);
      await updateDoc(userRef, { name, birthDate }); // Atualização parcial
      Alert.alert("Sucesso", "Dados atualizados!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <Text style={styles.label}>Nome Completo:</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput 
        style={styles.input} 
        value={birthDate} 
        onChangeText={setBirthDate} 
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
        <Text style={styles.updateBtnText}>Salvar Alterações</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.cancelBtn} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.cancelBtnText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
  },
  // Estilos do Modal
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitleError: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dc3545',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});