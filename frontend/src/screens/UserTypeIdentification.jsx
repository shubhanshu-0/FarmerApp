import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';

const ENTRY_IMAGE = require('../assets/images/login.png');

const UserTypeIdentification = ({ navigation }) => {
  const userTypes = [
    { type: 'farmer', label: 'Farmer' },
    { type: 'secretary', label: 'Secretary' },
    { type: 'admin', label: 'Admin' },
  ];

  const handleUserType = (type) => {
    console.log(`User Type Selected: ${type}`);
    navigation.navigate('Entry', { userType: type }); // Pass userType to EntryScreen
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
            {userTypes.map((ut) => (
              <TouchableOpacity
                key={ut.type}
                style={styles.button}
                onPress={() => handleUserType(ut.type)}
              >
                <Text style={styles.buttonText}>{ut.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 3, gap: 12 },
  imageContainer: { flex: 1, alignItems: 'center', paddingTop: 100 },
  image: { width: 300, height: 300, resizeMode: 'contain' },
  button: { padding: 14, borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: '90%', borderWidth: 1, borderColor: '#000' },
  buttonText: { color: '#008B38' },
});

export default UserTypeIdentification;
