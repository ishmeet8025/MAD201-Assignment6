# **MAD201 – Assignment 6**

## **News Reader App (React Native + Expo)**

### **Student: Ishmeet Singh**

### **Student ID: A00202436**

---

## 📌 **Project Overview**

This mobile application is a **News Reader App** built using **React Native** and **Expo**.
The app fetches **real-time technology news** from the *Inshorts API*, displays them in a clean list format, and allows the user to:

* View latest news articles
* Open articles to read full details
* Save articles to **Favorites** using AsyncStorage
* View saved favorites even after restarting the app
* Navigate between screens using a Bottom Tab Navigator

This project demonstrates skills in:

* API integration
* State management
* Navigation
* AsyncStorage for local persistence
* Folder structure, components, and modular code design

---

## ⭐ **Features**

### **Home Screen**

* Fetches technology news using Axios
* Displays articles in a FlatList
* Clicking an article opens the Detail screen

### **Detail Screen**

* Shows full article: title, author, image, content
* Includes **"Save to Favorites"** button (AsyncStorage)

### **Favorites Screen**

* Loads saved articles from AsyncStorage
* Shows them in a list
* Items persist even after app restarts

### **Profile Screen**

* Displays developer information

### **Navigation**

* Uses **React Navigation**
* Includes:

  * Bottom Tabs (Home, Favorites, Profile)
  * Stack Navigation for Home → Details

---

## 🏗 **Project Structure**

```
NewsApp/
│ App.js
│ app.json
│ babel.config.js
│ package.json
│ README.md
│ .gitignore
│
├── navigation/
│     └── TabNavigator.js
│
├── screens/
│     ├── HomeScreen.js
│     ├── DetailScreen.js
│     ├── FavoritesScreen.js
│     ├── ProfileScreen.js
│
├── components/
│     └── ArticleCard.js
│
├── utils/
│     └── storage.js
│
└── assets/
      icon.png
      splash.png
      adaptive-icon.png
      favicon.png
```

---
