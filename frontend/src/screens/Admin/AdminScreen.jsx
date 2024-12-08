import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import AdminCard from './AdminCard';

const appointments = [
  { id: '1', name: 'Secretary_Name', location: 'Location'},
  { id: '2', name: 'Arlene McCoy',  location: 'Rivertown'},
  { id: '3', name: 'Ralph Edwards',  location: 'Hillside'},
  { id: '4', name: 'Eleanor Pena',  location: 'Brookside'},
  { id: '5', name: 'Esther Howard',  location: 'Lakeshore'},
];

const AdminScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Upper Half */}
      <View style={styles.upper}>
        {/* <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your profile image URL
          style={styles.profileImage}
        /> */}
        <Text style={styles.nameText}>Deepa</Text>
        <Text style={styles.emailText}>hopeLast@icloud.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      {/* Lower Half */}
      <View style={styles.lower}>
        <Text style={styles.title}>Secretary under your District</Text>
        <FlatList
          data={appointments}
          renderItem={({ item }) => <AdminCard {...item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} // Prevent nested scroll conflict
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4ff' },
  upper: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  nameText: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 5 },
  emailText: { fontSize: 14, color: '#666', marginBottom: 20 },
  editButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  editButtonText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  lower: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#000', textAlign: 'center', marginBottom: 15 },
});

export default AdminScreen;
