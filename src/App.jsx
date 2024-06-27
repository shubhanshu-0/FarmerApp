// src/App.jsx
import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
// import SettingScreen from './screens/SettingScreen';
import PumpControl from './screens/PumpControl';
import YourFarm from './screens/YourFarm';
import News from './screens/News';
import Kuchbhi from './screens/Kuchbhi';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="PumpControl" component={PumpControl} />
    <Stack.Screen name="YourFarm" component={YourFarm} />
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="Kuchbhi" component={Kuchbhi} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: "#4FAD55" },
          tabBarActiveTintColor: '#FFD700',
          tabBarInactiveTintColor: '#FFFFFF',
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Screen"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  // Add your styles here if needed
});
