// src/screens/PumpControl.jsx
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PumpCard from '../components/PumpCard';
import { pumpData } from '../Data/PumpData';

const PumpControl = () => {
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

  return (
    <ScrollView style={styles.container}>
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
  );
};

export default PumpControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
});
