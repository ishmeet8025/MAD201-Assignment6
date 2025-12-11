import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Info</Text>
      <Text style={styles.text}>Ishmeet Singh</Text>
      <Text style={styles.text}>A00202436</Text>
      <Text style={styles.text}>MAD201 Assignment 6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginTop: 5 }
});
