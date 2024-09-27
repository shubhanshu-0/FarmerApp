

import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import FarmCard from '../components/FarmCard'; 
import farmData from '../Data/FarmData'; 

const YourFarmScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newFarm, setNewFarm] = useState({
    name: '',
    location: '',
    area: '',
    crop: '',
    secratory: '',
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const addFarm = () => {
    // Add new farm to the farmData array 
    const updatedFarmData = [
      ...farmData,
      {
        id: farmData.length + 1,
        name: newFarm.name,
        location: newFarm.location,
        area: newFarm.area,
        crop: newFarm.crop,
        secratory: newFarm.secratory,
      },
    ];
    // update the farm data in AsyncStorage or any other storage mechanism here

    // Close modal and reset newFarm state
    setModalVisible(false);
    setNewFarm({
      name: '',
      location: '',
      area: '',
      crop: '',
      secratory: '',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {farmData.map((farm) => (
          <FarmCard
            key={farm.id}
            id={farm.id}
            name={farm.name}
            location={farm.location}
            area={farm.area}
            crop={farm.crop}
            secratory={farm.secratory}
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <Text style={styles.addButtonText}>Add Farm</Text>
      </TouchableOpacity>

      {/* Modal for adding new farm */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Farm</Text>
            <TextInput
              style={styles.input}
              placeholder="Farm Name"
              placeholderTextColor="#000"
              value={newFarm.name}
              onChangeText={(text) => setNewFarm({ ...newFarm, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              placeholderTextColor="#000"
              value={newFarm.location}
              onChangeText={(text) => setNewFarm({ ...newFarm, location: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Area"
              placeholderTextColor="#000"
              value={newFarm.area}
              onChangeText={(text) => setNewFarm({ ...newFarm, area: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Crop"
              placeholderTextColor="#000"
              value={newFarm.crop}
              onChangeText={(text) => setNewFarm({ ...newFarm, crop: text })}
            />
            <TouchableOpacity style={styles.addButton} onPress={addFarm}>
              <Text style={styles.addButtonText}>Add Farm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default YourFarmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 45,
    backgroundColor: '#008B38',
    paddingVertical: 10,
    marginLeft:20,
    paddingHorizontal: 20,
    borderRadius: 6,
    elevation: 3,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingTop:10,
    textAlign: 'center',
    color:'#000',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#000',
    // padding: 8,
    // marginBottom: 10,
    // lineHeight:10,
    paddingBottom:0,
    paddingTop:30,
    width: '90%',
    backgroundColor: '#fff',
    color: '#000',
    
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 50,
    marginLeft:-110,
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
