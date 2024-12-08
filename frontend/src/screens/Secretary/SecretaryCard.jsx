import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SecretaryCard = ({ name, farm,  location, area, crop}) => {
  return (
    <View style={styles.card}>
      {/* <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} /> */}
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.farm}>{farm}</Text>
        <Text style={styles.crop}>{crop}</Text>
        {/* <Text style={styles.service}>{service}</Text> */}
     
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.area}>{area}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    
  },
  farm:{
    color: 'gray',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginVertical:5,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    gap:2,
    
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'#000',
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    
  },
  location: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'#000',
  },
  area: {
    color: 'gray',
  },
  crop: {
    color: 'gray',
  },
});

export default SecretaryCard;
