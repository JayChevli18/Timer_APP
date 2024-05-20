import React from "react";
import {View, StyleSheet} from "react-native";
import {RoundedButton} from "../components/RoundedButton";

export const Timing=({onChangeTime})=>{
  return(
    <View style={styles.container}>
      <View style={styles.timingButton}>
        <RoundedButton 
        size={75} 
        title="10" 
        onPress={() => onChangeTime(10) } 
        />
      </View>
      
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="15"
          onPress={() => onChangeTime(15)} 
      />
      </View>
      
      <View style={styles.timingButton}>
        <RoundedButton 
          size={75}
          title="20"
          onPress={() => onChangeTime(20)} 
        />
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "space-around", // Distributes the buttons evenly
    flex:1
    //padding: 50, // Adds some padding for better visual appearance
  },
  timingButton:{
    alignItems:"center"
  }
})