import React from 'react';
import { View, StyleSheet, ScrollView , Text, TouchableOpacity} from 'react-native';
import NumPumpCard from '../../components/NumPumpCard';

const NumPump = ({ navigation }) => {
  // Mock data for pumps
  const pumps = [
    { id: 1, name: 'Pumps in Farm - 1', location: 'North Field', area: '15 acres' },
    { id: 2, name: 'Pumps in Farm - 2', location: 'South Field', area: '20 acres' },
    { id: 3, name: 'Pumps in Farm - 3', location: 'East Field', area: '10 acres' },
    { id: 4, name: 'Pumps in Farm - 4', location: 'West Field', area: '25 acres' },
   
    
  ];

  return (
    <>
    
    <ScrollView contentContainerStyle={styles.container}>

    {/* Upper Half */}
    <View style={styles.upper}>
        <Text style={styles.nameText}>Total Pumps</Text>
    </View>


    {/* neeche ka  */}

      {pumps.map((pump) => (
        <NumPumpCard
          key={pump.id}
          name={pump.name}
          location={pump.location}
          area={pump.area}
          onPress={() => navigation.navigate('PumpControl', { pumpId: pump.id })}
        />
      ))}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  nameText:{
    color:'#000',
    fontWeight:'bold',
    fontSize: 20,
    paddingBottom:8
  },
});

export default NumPump;
