import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import { sectionListData } from '../../utils/data';

export default function SectionListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SectionList</Text>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
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
    color: '#FF9800',
  },
  list: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#d0d0d0',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
  },
  item: {
    backgroundColor: '#f9fbe7',
    padding: 12,
    marginBottom: 5,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});