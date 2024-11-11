import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const ENTRY_IMAGE = require('../assets/images/otp.png');

const OTPScreen = ({ route, navigation, userType }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOtpVerification = () => {
    if (otp === '1234') {
      // Search in database for the user based on userType
      navigation.navigate('MainTabs');
    } else {
      setError('Invalid OTP. Please try again or Sign Up.');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleOtpChange = (text) => {
    const newOtp = text.replace(/[^0-9]/g, '').slice(0, 4); // Limit to 4 digits
    setOtp(newOtp);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <Image source={ENTRY_IMAGE} style={styles.image} />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.label}>OTP Verification</Text>
            <Text style={styles.info}>
              Please enter the one-time password sent to your mobile number: {phoneNumber}
            </Text>
            <View style={styles.otpContainer}>
              <TextInput
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={4}
                value={otp}
                onChangeText={handleOtpChange}
                placeholder="••••"
                placeholderTextColor="#ccc"
                textAlign="center"
                autoFocus
              />
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleOtpVerification}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <Text style={styles.or}>or</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.buttonText2}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
    top: 50,
    left: 40,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: '40%',
    height: 50,
    fontSize: 20,
    letterSpacing: 5,
    borderBottomWidth: 1, // Set only bottom border width
    borderBottomColor: '#008B38', // Set the underline color
    paddingHorizontal: 15,
    color: '#000',
    textAlign: 'center', // Center text for OTP input
  },
  
  error: {
    color: 'red',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#82C9FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#FFA722',
    fontWeight: 'bold',
  },
  or: {
    color: '#000',
    marginBottom: 15,
  },
});

export default OTPScreen;
