import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AdminCard = ({ name, location }) => {
  return (
    <View style={styles.card}>
      {/* <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} /> */}
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity>
        {/* <Image 
            source={require('D:\Farmer_App_0.1\FarmerApp\frontend\src\assets\images\right-arrow.png')} 
            style={styles.arrowImage} 
          /> */}
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowImage:{
    width:'50%',
    height:'50%',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginVertical: 5,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  location: {
    fontWeight: '300',  // Fixed to valid weight
    fontSize: 14,
    color: '#000',
  },
  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 20, // Adjust the size of the arrow
    color: '#000',
  },
});

export default AdminCard;
