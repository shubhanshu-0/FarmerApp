// src/App.jsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Farmer/HomeScreen';
import PumpControl from './screens/Farmer/PumpControl';
import YourFarm from './screens/Farmer/YourFarm';
import News from './screens/News';
import Kuchbhi from './screens/Kuchbhi';
import SettingsScreen from './screens/SettingsScreen';
import EntryScreen from './screens/EntryScreen';
import OTPScreen from './screens/OTPScreen';
import SignUpScreen from './screens/SignUpScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserTypeIdentification from './screens/UserTypeIdentification';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Define HomeStack
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="PumpControl" component={PumpControl} />
    <Stack.Screen name="YourFarm" component={YourFarm} />
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="Kuchbhi" component={Kuchbhi} />
  </Stack.Navigator>
);

// Define AuthStack
const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Identification" component={UserTypeIdentification} options={{ headerShown: false }} />
    <AuthStack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    <AuthStack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

// Define MainTabs
const MainTabs = () => (
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
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

// Define AppStack
const AppStack = () => {

  const [whichUser , setWhichUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Stack.Navigator>
      
      {isAuthenticated ? (
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStackScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
