import React, { useState } from 'react';
import { StyleSheet, View, ScrollView , TouchableOpacity , Text} from 'react-native';
import PumpCard from '../../components/PumpCard';
import { pumpData } from '../../data/PumpData';
import PumpInputModal from '../../components/PumpInputModal';

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
    <View style = {styles.container}>
      <View style = {styles.addControl}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}>
            <Text>Add New Pump + </Text>
          </TouchableOpacity>
          <PumpInputModal modalVisible={modalVisible} setModalVisible = {setModalVisible} handleDataUpdate={handleDataUpdate}/>
      </View>
      <ScrollView style={styles.PumpContainer}>
        {data.map((pump) => (
          <PumpCard
            key={pump.id}
            id={pump.id}
            location={pump.location}
            currStatus={pump.status} // IOT CONTROLLER
            currTimer={pump.timer}
            // onTimerChange={handleTimerChange}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PumpControl;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center'
  },
  addControl : {
    width : '100%',
    alignItems : 'center'
  },
  PumpContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  addButton: {
    marginTop : 5,
    backgroundColor: 'green',
    padding: 10,
    elevation: 2,
    width : '90%',
    borderRadius : 50,
    alignItems : 'center'
  }
});