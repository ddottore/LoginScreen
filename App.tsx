import { StyleSheet,StatusBar, Text, TextInput, View,ScrollView,Image, ViewBase, Button, Alert, Pressable} from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import MainMenu from './screen/MainMenu';

function HomeScreen() {
  return (
    {}
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Giriş Ekranır'>
        <Stack.Screen name="Giriş Ekranı" component={LoginScreen} />
        <Stack.Screen name="Ana Menü" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;