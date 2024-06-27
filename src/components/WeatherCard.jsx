import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';


//weather api
import axios from 'axios';

const API_KEY = '220c4c0c89bc6ffbcd0d52e1e63df148';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (lat, lon) => {
  const response = await axios.get(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  return response.data;
};
//

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await getWeatherData('21.2514', '81.6296'); // Replace with actual latitude and longitude
        setWeather(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!weather) {
    return <Text>Could not fetch weather data</Text>;
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
        <Text style={styles.time}>{new Date().toLocaleTimeString()}</Text>
      </View>
      <View style={styles.body}>
        <Entypo name="cloud" size={50} color="#FFFFFF" />
        <Text style={styles.temperature}>{weather.main.temp}°C</Text>
        <Text style={styles.city}>{weather.name}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.update}>Latest update: {new Date(weather.dt * 1000).toLocaleTimeString()}</Text>
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  date: {
    color: '#FFFFFF',
  },
  time: {
    color: '#FFFFFF',
  },
  body: {
    alignItems: 'center',
    marginVertical: 10,
  },
  temperature: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  city: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  footer: {
    marginTop: 10,
  },
  update: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
