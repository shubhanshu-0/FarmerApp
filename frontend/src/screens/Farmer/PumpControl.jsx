import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import PumpCard from '../../components/PumpCard';
import { pumpData } from '../../data/PumpData';
import PumpInputModal from '../../components/PumpInputModal';

const PumpControl = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonExpanded, setButtonExpanded] = useState(false); // Track button state
  const [data, setData] = useState(pumpData);

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((pump) =>
        pump.id === id ? { ...pump, status: newStatus } : pump
      )
    );
  };

  const handleDataUpdate = (newPumpData) => {
    const newPump = {
      id: data.length + 1,
      location: newPumpData.FarmLocation,
      status: false,
      timer: '',
    };
    setData([...data, newPump]);
  };

  const toggleButton = () => {
    setButtonExpanded((prev) => !prev); // Toggle expand/collapse
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.PumpContainer}>
        {data.map((pump) => (
          <PumpCard
            key={pump.id}
            id={pump.id}
            location={pump.location}
            currStatus={pump.status}
            currTimer={pump.timer}
          />
        ))}
      </ScrollView>

      {/* Floating Expandable Add Button */}
      <TouchableOpacity
        style={[styles.addButton, buttonExpanded && styles.expandedButton]}
        onPress={() => {
          if (buttonExpanded) {
            setModalVisible(true); // Show form if expanded and clicked
          } else {
            toggleButton(); // Expand the button
          }
        }}
        activeOpacity={0.7} // Press effect
      >
        <Text style={styles.addButtonText}>
          {buttonExpanded ? 'Add New Pump' : '+'}
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <PumpInputModal
        modalVisible={modalVisible}
        setModalVisible={(visible) => {
          setModalVisible(visible);
          setButtonExpanded(false); // Collapse button after modal closes
        }}
        handleDataUpdate={handleDataUpdate}
      />
    </View>
  );
};

export default PumpControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  PumpContainer: {
    flex: 1,
    padding: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#3399ff', // Dark green background
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 50, // Rounded button
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandedButton: {
    borderRadius: 30, // Rounded rectangle for expanded button
    paddingHorizontal: 40, // Wider padding
    paddingVertical: 15, // Taller padding
  },
  addButtonText: {
    color: '#FFF', // White text
    fontSize: 16, // Adjust size for "+" and text
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
