// SignUpScreen.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ENTRY_IMAGE = require('../assets/images/signup.png');

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Validate input fields
    if (name === '' || state === '' || city === '' || pincode === '' || phoneNumber === '') {
      setError('Please fill all the fields.');
    } else {
      setError(''); // Clear error if all fields are filled
      console.log('Sign up details:', { name, state, city, pincode, phoneNumber });
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      }); // Navigate to MainTabs screen within AppStack
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ENTRY_IMAGE} style={styles.image} />
      </View>
      <Text style={styles.label}>Please create an account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor='#000'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        placeholderTextColor='#000'
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        placeholderTextColor='#000'
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Pincode of your city/town/area"
        placeholderTextColor='#000'
        value={pincode}
        onChangeText={setPincode}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor='#000'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    marginTop: -50,
  },
  input: {
    width: '80%',
    padding: 7,
    borderBottomWidth: 0.7,
    borderColor: '#000',
    // borderRadius: 10,
    marginBottom: 13,
    color: '#000',
  },
  error: {
    paddingTop: 10,
    color: 'red',
  },
  btn: {
    width: '30%',
    paddingVertical: 12,
    backgroundColor: '#82C9FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
    resizeMode: 'contain', // Ensures the image scales properly
    marginTop:-60,
    marginBottom:10,
  },
});

export default SignUpScreen;
