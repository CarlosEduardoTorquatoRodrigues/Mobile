import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App(){
  return(
    <View style = {styles.container}>
      <Text style={styles.text}>
        Olá  foolen !!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    blackgroundColor: '#e20000',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});