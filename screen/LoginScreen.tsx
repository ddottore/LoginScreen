import { StyleSheet, Text, TextInput, View,ScrollView,Image, ViewBase, Button, Alert, Pressable,StatusBar} from 'react-native';
import Loginimage from '../assets/images/Piller-02.png';
import React from 'react';
import CButton from '../components/CButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();

const LoginScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
    <StatusBar barStyle='light-content' hidden />
      <ScrollView>
        <View style={{marginTop:40}}>
        <Image style = {styles.pillerlogo} source = {Loginimage}/>

        <View style = {styles.TextInputContainer}> 
            <View>
                <TextInput style = {styles.TextInput} placeholder = 'E-Mail giriniz.'></TextInput>
            </View>

            <View>
                <TextInput secureTextEntry={true} style = {styles.TextInput} placeholder = 'Şifre giriniz.'></TextInput>
            </View> 
          
        </View>
        
        <View style={styles.LoginButton}>
          <CButton title='Giriş' className='bg-[#328453]' textClassName='text-xl text-[#fff]' onPress={() => {navigation.navigate('Ana Menü');}} />
          <CButton title ='Kayıt ol' className='bg-[#328453]' textClassName='text-xl text-[#fff]' onPress={() => Alert.alert('Kayıt yapıldı.')} />
        </View>
        </View>
      </ScrollView>
      
      <View style = {styles.footer}>
        <Text style = {[{color:'#FFF', flex:1}]}>Thinking</Text>
        <Text style = {{color:'#FFF',}}>© 2023 | Tüm hakları saklıdır.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:
  {
    flex:1,
    backgroundColor:'#000'
  },

  pillerlogo:
  { 
    flex:1,
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginTop: 50,
    alignSelf: 'center',
  },
  
  TextInputContainer: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:145,
  },

  TextInput: 
  {
    height:40,
    width:270,
    marginBottom:30,
    backgroundColor:'#D0D0D0',
    paddingLeft:15,
    borderRadius:25,
  },

  LoginButton: 
  { 
    flexDirection:'row', 
    justifyContent:'center', 
    flex:1,
    marginTop:15,
  },

  footer:
  {
    flexDirection:'row',
    
  },
});

export default LoginScreen