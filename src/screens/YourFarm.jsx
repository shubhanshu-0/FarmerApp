

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
              value={newFarm.name}
              onChangeText={(text) => setNewFarm({ ...newFarm, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={newFarm.location}
              onChangeText={(text) => setNewFarm({ ...newFarm, location: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Area"
              value={newFarm.area}
              onChangeText={(text) => setNewFarm({ ...newFarm, area: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Crop"
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
    right: 20,
    backgroundColor: '#008B38',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
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
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
    backgroundColor:'#d3d3d3',
    color:'#000',
    
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    marginLeft:-150,
  },
  cancelButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
