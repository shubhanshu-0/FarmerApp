// src/screens/PumpControl.jsx
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView , TouchableOpacity , Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import PumpCard from '../components/PumpCard';
import { pumpData } from '../Data/PumpData';
import PumpInputModal from '../components/PumpInputModal'

const PumpControl = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const [data, setData] = useState(pumpData);

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((pump) =>
        pump.id === id ? { ...pump, status: newStatus } : pump
      )
    );
  };

  const handleTimerChange = (id, newTimer) => {
    setData((prevData) =>
      prevData.map((pump) =>
        pump.id === id ? { ...pump, timer: newTimer } : pump
      )
    );
  };

  const handleDataUpdate = (newPumpData) => {
      const newPump = {
        // FarmId : newPumpData.FarmId , 
        // FarmName : newPumpData.FarmName,
        // FarmLocation : newPumpData.FarmLocation,
        id: data.length + 1,
        location: newPumpData.FarmLocation,
        status: false,
        timer: '',
      }
      setData([...data , newPump]);
  }
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {styles.container}>
      
      <ScrollView style={styles.PumpContainer}>
        {data.map((pump) => (
          <PumpCard
            key={pump.id}
            id={pump.id}
            location={pump.location}
            initialStatus={pump.status}
            initialTimer={pump.timer}
            onStatusChange={handleStatusChange}
            onTimerChange={handleTimerChange}
          />
        ))}
      </ScrollView>
      {/* <View style = {styles.addControl}> */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}>
            <Text>New Pump +</Text>
            
          </TouchableOpacity>
          <PumpInputModal modalVisible={modalVisible} setModalVisible = {setModalVisible} handleDataUpdate={handleDataUpdate}/>
      {/* </View> */}
    </View>
    </TouchableWithoutFeedback>
  );
};

export default PumpControl;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center'
  },
  // addControl : {
  //   width : '100%',
  //   alignItems : 'center',
  //   backgroundColor:'#F5FCFF'
    
    
  // },
  PumpContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  addButton: {
    position:'absolute',
    top:20,
    right:20,
    // marginTop : 5,
    backgroundColor: '#82C9FF',
    padding: 10,
    // elevation: 2,
    width : 'Auto',
    borderRadius : 10,
    alignItems : 'center',
    
  }
});
