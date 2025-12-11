// Detail Screen: Shows full article info and allows saving to favorites
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { saveFavorite } from '../utils/storage';

export default function DetailScreen({ route }) {
  const { article } = route.params || {};

  if (!article) return <View><Text>No article data</Text></View>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {article.imageUrl ? <Image source={{ uri: article.imageUrl }} style={styles.image} /> : null}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>{article.author || 'Unknown'}</Text>
      <Text style={styles.content}>{article.content || article.description || ''}</Text>

      <TouchableOpacity style={styles.button} onPress={() => saveFavorite(article)}>
        <Text style={styles.buttonText}>Save to Favorites</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  image: { 
  width: "100%", 
  height: 220, 
  borderRadius: 10,
  marginBottom: 15   // Added spacing between image and title
},
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  author: { color: 'gray', marginBottom: 10 },
  content: { fontSize: 16, marginTop: 10 },
  button: { backgroundColor: '#2196F3', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold' }
});
