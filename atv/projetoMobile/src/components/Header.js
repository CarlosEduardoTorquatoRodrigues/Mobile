import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title, color }) {
  return (
    <View style={[styles.header, { backgroundColor: color || '#2196F3' }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});