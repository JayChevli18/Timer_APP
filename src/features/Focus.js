import React,{useState} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
//import Constanst from 'expo-constants';
import {color} from '../utils/color';
import {TextInput} from 'react-native-paper'
import {RoundedButton} from '../components/RoundedButton';
import {spacing} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject,setSubject]=useState(null);
  console.log(subject);
  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={setSubject} label="What you would like to focus on?"></TextInput>       
      <View style={styles.button}> 
        <RoundedButton title='+' size={50} onPress={()=>addSubject(subject)} />
      </View>
      </View>
    </View> 
  )
}


const styles=StyleSheet.create({
  container:{
    flex:0.2,
  },
  text:{
    color:color.white,
  },
  button:{
    justifyContent:"center",
  },
  textInput:{
    flex:1,
    marginRight:spacing.sm,
    //color:color.white,
  },
    inputContainer:{
    flexDirection:'row',
    padding:spacing.lg,
    marginTop:spacing.xl,
    justifyContent: 'top',
  }

})

