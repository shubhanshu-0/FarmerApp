
// FarmCard.jsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FarmCard = ({ id, name, location, area, crop, secratory }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.details}>Location: {location}</Text>
      <Text style={styles.details}>Area: {area}</Text>
      <Text style={styles.details}>Crop: {crop}</Text>
      <Text style={styles.details}>Secratory: {secratory}</Text>
    </View>
  );
};

export default FarmCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    margin:10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 4,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  details: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
});



// --------------------------------------------------------
// // src/components/FarmCard.jsx
// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// const FarmCard = ({ farm }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.title}>{farm.name}</Text>
//       <Text style={styles.txt}>Location: {farm.location}</Text>
//       <Text style={styles.txt}>Secretary: {farm.secretary}</Text>
//       <Text style={styles.txt}>Size: {farm.size}</Text>
//       <Text style={styles.txt}>Crop: {farm.crop}</Text>
//     </View>
//   );
// };

// export default FarmCard;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color:'#000',
//   },
//   txt:{
//     color:'#000',

//   }
// });
