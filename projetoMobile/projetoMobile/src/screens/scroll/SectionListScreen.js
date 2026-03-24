import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sectionListData } from '../../utils/data';

export default function SectionListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
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
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f9fbe7',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});