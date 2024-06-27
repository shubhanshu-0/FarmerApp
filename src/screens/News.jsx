// src/screens/NewsScreen.jsx
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const API_KEY = 'pub_47457e2db3e86ee89f19f28501780663d70b2';
const API_URL = 'https://newsdata.io/api/1/news';

const NewsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          q: 'Agriculture News India',
          country: 'in',
          language: 'en,hi',
          category: 'environment,food,health',
        },
      });
      setArticles(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest News</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.article}>
            <Text style={styles.articleTitle}>{item.title}</Text>
            <Text style={styles.articleDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#4FAD55',
  },
  article: {
    marginBottom: 20,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#000',
  },
  articleDescription: {
    fontSize: 14,
    color:'#000',
  },
});
