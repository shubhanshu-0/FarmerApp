import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

const ENTRY_IMAGE = require('../assets/images/login.png');

const UserTypeIdentification = ({ navigation }) => {
  const [userType, setUserType] = useState('');

  const handleUserType = (userType) => {
    console.log(userType);
    navigation.navigate('Entry' , {userType});
  };

  const userTypes = [
    {
      type : "Farmer"
    },
    {
      type : "Secretary"
    },
    {
      type : "Admin"
    }
  ];

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
              {/* userTypes.map(function (ut) { */}
                    <TouchableOpacity style={styles.button} onPress={() => handleUserType('farmer')}>
                        <Text style={styles.buttonText}>{userTypes[0].type}</Text>
                    </TouchableOpacity>
              {/* }) */}
               
                <TouchableOpacity style={styles.button} onPress={() => handleUserType('sectretary')}>
                    <Text style={styles.buttonText}>{userTypes[1].type}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleUserType('admin')}>
                    <Text style={styles.buttonText}>{userTypes[2].type}</Text>
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
    padding: 3,
    gap:12,
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

export default UserTypeIdentification;

