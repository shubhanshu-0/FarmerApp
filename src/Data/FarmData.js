
// Dummy data for farms
const farmData = [
  {
    id: 1,
    name: 'Farm A',
    location: 'City X',
    area: '10 acres',
    crop: 'Rice',
    secratory: 'Tanjiro',
  },
  {
    id: 2,
    name: 'Farm B',
    location: 'City Y',
    area: '5 acres',
    crop: 'Wheat',
    secratory: 'Yuji' ,
  },
  {
    id: 3,
    name: 'Farm C',
    location: 'City Z',
    area: '8 acres',
    crop: 'Corn',
    secratory: 'Uta',
  },
];

export default farmData;





// ------------------------------------------------------------------
// // src/data/farmData.js
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const FARM_DATA_KEY = 'FARM_DATA_KEY';

// export const getFarmData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem(FARM_DATA_KEY);
//     return jsonValue != null ? JSON.parse(jsonValue) : [];
//   } catch (e) {
//     console.error("Failed to fetch farm data", e);
//   }
// };

// export const saveFarmData = async (farms) => {
//   try {
//     const jsonValue = JSON.stringify(farms);
//     await AsyncStorage.setItem(FARM_DATA_KEY, jsonValue);
//   } catch (e) {
//     console.error("Failed to save farm data", e);
//   }
// };
