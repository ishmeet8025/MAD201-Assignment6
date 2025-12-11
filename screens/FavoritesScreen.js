import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ArticleCard from '../components/ArticleCard';
import { getFavorites, removeFavorite } from '../utils/storage';

export default function FavoritesScreen({ navigation }) {
  const [saved, setSaved] = useState([]);

  const load = async () => {
    const data = await getFavorites();
    setSaved(data || []);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={saved}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ArticleCard article={item} onPress={() => navigation.navigate('Details', { article: item })} />
        )}
        ListEmptyComponent={() => <Text style={styles.empty}>No favorites saved.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  empty: { textAlign: 'center', marginTop: 20, color: 'gray' }
});
