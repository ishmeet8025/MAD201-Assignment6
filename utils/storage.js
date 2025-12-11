import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = "@favorites";

export async function saveFavorite(article) {
  try {
    const existing = await AsyncStorage.getItem(KEY);
    const favorites = existing ? JSON.parse(existing) : [];
    if (favorites.find(a => a.title === article.title)) {
      alert('Already in favorites');
      return;
    }
    favorites.push(article);
    await AsyncStorage.setItem(KEY, JSON.stringify(favorites));
    alert('Saved to Favorites!');
  } catch (e) {
    console.log(e);
  }
}

export async function getFavorites() {
  try {
    const stored = await AsyncStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function removeFavorite(title) {
  try {
    const favs = await getFavorites();
    const updated = favs.filter(f => f.title !== title);
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.log(e);
    return [];
  }
}
