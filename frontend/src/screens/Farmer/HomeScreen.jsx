
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WeatherCard from '../../components/WeatherCard';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.weatherSection}>
        <WeatherCard />
      </View>
      {/* Our Services Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.row2}>
          <View style={styles.services}>
            <TouchableOpacity onPress={() => navigation.navigate("PumpControl")} style={styles.serviceBox}>
              <MaterialCommunityIcons name="water-pump" size={28} color="#000" />
              <Text style={styles.serviceText}>Pump Control</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("YourFarm")} style={styles.serviceBox}>
              <MaterialCommunityIcons name="island" size={32} color="#000" />
              <Text style={styles.serviceText}>Your Farms</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.services}>
            <TouchableOpacity onPress={() => navigation.navigate("News")} style={styles.serviceBox}>
              <FontAwesome name="newspaper-o" size={30} color="#000" />
              <Text style={styles.serviceText}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("More")} style={styles.serviceBox}>
              <FontAwesome name="question" size={30} color="#000" />
              <Text style={styles.serviceText}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  weatherSection: {
    padding: 20,
    width: '100%',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginTop: -10,
    marginBottom: 40,
    color: '#000000',
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceBox: {
    width: '48%',
    height: 100,
    backgroundColor: '#82C9FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 4, // for shadow effect on Android
    shadowColor: '#000', // for shadow effect on iOS
    shadowOffset: { width: 0, height: 2 }, // for shadow effect on iOS
    shadowOpacity: 0.2, // for shadow effect on iOS
    shadowRadius: 2, // for shadow effect on iOS
  },
  serviceText: {
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
  },
  row2: {
    flexDirection: 'column',
    gap: 15,
  },
});
