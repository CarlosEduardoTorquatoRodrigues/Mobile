import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { flatListData } from '../../utils/data';

export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList</Text>
      <FlatList
        data={flatListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#4CAF50',
  },
  list: {
    padding: 20,
  },
  item: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});