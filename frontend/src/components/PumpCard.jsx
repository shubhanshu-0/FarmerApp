// src/components/PumpCard.jsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-paper';
import axios from 'axios';

const PumpCard = ({ id, location, currStatus, currTimer}) => {
  const [status, setStatus] = useState(currStatus);
  const [timer, setTimer] = useState(currTimer);
  const backendUrl = 'http://localhost:4000';
  const toggleSwitch = async () => {
    // api call - send status
    // onStatusChange(id, newStatus);
    const newStatus = !status;
    setStatus(newStatus); // Locally update the status immediately to reflect the UI change

    // try {
    //   // Send pumpId and command (ON/OFF) to the backend
    //   await axios.post(`${backendUrl}/control-pump`, { pumpId: id, command: newStatus ? 'ON' : 'OFF' });
    //   console.log(`Pump ${newStatus ? 'turned ON' : 'turned OFF'}`);
    // } catch (error) {
    //     console.error('Error updating pump status:', error);
    //     setStatus(!newStatus); // Revert status on error
    // }
  };

  const handleSetTimer = () => {
    onTimerChange(id, timer);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Land {id}</Text>
      <Text style={styles.location}>Location: {location}</Text>
      <View style={styles.statusContainer}>


        <Text style={styles.pumpStatus}>Pump Status: </Text>
        
        <Switch
          value={status}
          onValueChange={toggleSwitch}
          color={status == true  ? 'blue' : '#FE7062'}
        />
 

        <Text style={{ color: status ? 'blue' : '#FE7062', marginLeft: 5 }}>
          {status == true ? 'ON' : 'OFF'}
        </Text>
      </View>


      <View style={styles.timerContainer}>
        <Text style={styles.setTimer}>Set Timer:</Text>
        <TextInput
          style={styles.input}
          placeholder="Minutes"
          value={timer}
          onChangeText={setTimer}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSetTimer}>
          <Text style={styles.buttonText}>Set Duration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PumpCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    margin:10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 4,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:5,

  },
  timerContainer: {
    height:35,
    width:280,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    gap:15,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 8,
    flex: 1,
    marginRight: 10,
    color: '#000',
    backgroundColor:'#d3d3d3',
    
    
  },
  button: {
    backgroundColor: '#008B38',
    padding: 8,
    marginLeft:-15,
    
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    
    
  },
  buttonText: {
    color: '#FFF',
    
    
  },
  pumpStatus:{
    color: '#000',
  },
  setTimer:{
    color: '#000',
  },
  location:{
    color: '#000',
  }
});
