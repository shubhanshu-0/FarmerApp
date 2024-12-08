import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NumPumpCard = ({ name, location, area, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.lr}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.details}>Location: {location}</Text>
          <Text style={styles.details}>Area: {area}</Text>
        </View>
        <View style={styles.r}>
          <Text style={styles.details}>{'>'}</Text>
        </View>
      </View>

     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  r:{
    flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'
  },
  lr:{
    flex:1, flexDirection:'row', justifyContent:'space-between', gap:50
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 4,
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  details: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
});

export default NumPumpCard;
