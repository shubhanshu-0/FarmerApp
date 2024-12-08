import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

const ENTRY_IMAGE = require('../assets/images/otp.png');

const OTPScreen = ({ route, navigation }) => {
  const { userType } = route.params || {};
  const [otp, setOtp] = useState('');

  const handleOtpVerification = () => {
    if (otp === '1234') {
      if (userType === 'secretary') {
        navigation.navigate('Secretary');
      } else if (userType === 'farmer') {
        navigation.navigate('MainTabs');
      } else if (userType === 'admin') {
        navigation.navigate('Admin');
      }
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={ENTRY_IMAGE} style={styles.image} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>OTP Verification</Text>
            <TextInput
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={4}
              value={otp}
              onChangeText={(text) => setOtp(text.replace(/[^0-9]/g, ''))}
              placeholder=". . . ."
              placeholderTextColor="#808080"  
              textAlign="center"
            />
            <TouchableOpacity style={styles.button} onPress={handleOtpVerification}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 },
  imageContainer: { flex: 1, alignItems: 'center' },
  image: { width: 500, height: 500, resizeMode: 'contain' },
  contentContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  label: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  otpInput: { width: '40%', borderBottomWidth: 1, paddingHorizontal: 15, fontSize: 20, color:'#000' },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default OTPScreen;
