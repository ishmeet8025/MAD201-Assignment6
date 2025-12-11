import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ArticleCard({ article, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {article.imageUrl ? (
        <Image source={{ uri: article.imageUrl }} style={styles.thumbnail} />
      ) : null}
      <View style={styles.info}>
        <Text style={styles.title}>{article.title}</Text>
        <Text numberOfLines={2} style={styles.desc}>{article.content || article.description || ''}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3
  },
  thumbnail: { width: 90, height: 90, borderRadius: 8 },
  info: { flex: 1, marginLeft: 10 },
  title: { fontWeight: 'bold', marginBottom: 4 },
  desc: { color: 'gray' }
});
