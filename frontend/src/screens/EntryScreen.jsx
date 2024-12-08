import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert 
} from 'react-native';

const ENTRY_IMAGE = require('../assets/images/login.png');

const EntryScreen = ({ route, navigation }) => {
  const { userType } = route.params || {}; // Extract userType from route params
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  // Validate phone number length
  const isValidPhoneNumber = (number) => number.length === 10;

  const handleGetOtp = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      console.log('Sending OTP to:', phoneNumber);
      navigation.navigate('OTP', { phoneNumber, userType }); // Pass phoneNumber and userType to OTP screen
    } else {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit mobile number.');
    }
  };

  const handlePhoneNumberChange = (text) => {
    if (/^\d*$/.test(text)) {
      setPhoneNumber(text);
      setError(''); // Clear error
    } else {
      setError('Please enter numbers only');
    }
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
              onChangeText={handlePhoneNumberChange}
              keyboardType="phone-pad"
              maxLength={10}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  container: { flex: 1, alignItems: 'center', padding: 30 },
  imageContainer: { flex: 1, alignItems: 'center', paddingTop: 100 },
  image: { width: 300, height: 300, resizeMode: 'contain' },
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
  button: { padding: 14, borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: '90%', borderWidth: 1 },
  buttonText: { color: '#008B38' },
  errorText: { color: 'red', marginBottom: 10 },
});

export default EntryScreen;
