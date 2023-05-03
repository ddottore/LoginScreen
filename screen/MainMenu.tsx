import { View, Text, StatusBar, ScrollView,StyleSheet,Image } from 'react-native'
import React from 'react'
import Pillerlogo from '../assets/images/Piller-02.png';


const MainMenu = () => {
  return (
    <View style = {styles.container}>
    <StatusBar barStyle='light-content' hidden/>
    <View style = {styles.header}>
      <Image style={styles.Pillerlogo} source = {Pillerlogo} />
      <View style={styles.headermenu}>
      <Text>Kurumsal</Text>
      <Text>Hizmetler</Text>
      <Text>Ürünlerimiz</Text>
      <Text>Haberler</Text>
      <Text>İletişim</Text>
      </View>
    </View>
    <ScrollView>
    <View style = {{}}>
      <Text> asd</Text>
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:
    {
      flex:1,
      backgroundColor:'#000'
    },

    header:
    {
      backgroundColor:'#328453',
      height:80,
      flexDirection:'row',
      //hdi bırk
    },

    Pillerlogo:
    {
      flex:1,
      height:70,
      width:70,
      resizeMode:'contain',
      alignSelf:'flex-start',
      marginLeft:10,
    },

    headermenu:
    {
      flexDirection:'row',
    },

  });

export default MainMenu