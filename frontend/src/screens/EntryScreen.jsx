// src/screens/EntryScreen.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

const ENTRY_IMAGE = require('../assets/images/login.png');

const EntryScreen = ({ navigation , userType}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // receive the usertype and send to otp page - todo
  const handleGetOtp = () => {
    console.log('Sending OTP to :', phoneNumber);
    navigation.navigate('OTP', { phoneNumber , userType });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={styles.imageContainer}>
            <Image source={ENTRY_IMAGE} style={styles.image} />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              placeholderTextColor="#000"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
              <Text style={styles.buttonText}>Get OTP to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#cccccc',
    color: '#000',
    textAlign: 'center',
  },
  button: {
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: '#008B38',
    borderColor: '#000',
  },
});

export default EntryScreen;
