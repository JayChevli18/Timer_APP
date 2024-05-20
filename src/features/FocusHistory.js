
import React from "react";
import {View,Text, StyleSheet, FlatList} from "react-native";
import {fontSizes, spacing} from "../utils/sizes";
import {colors} from "../utils/color";

export const FocusHistory=({history})=>{

  if(!history || !history.length)
    return <Text style={styles.title}>We have not focus on anything yet!</Text>;

  const renderItem=({item})=><Text style={styles.item}>- {item}</Text>
 
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Things we have focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />

    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    padding: spacing.sm,
    flex:1,
  },
  item:{
    fontSize:fontSizes.md,
    color:"white",
    paddingTop:spacing.sm,
    marginLeft:20
  },
  title:{
    color:"white",
    fontSize:fontSizes.lg,
    fontWeight:"bold",
    padding: spacing.md,
    marginTop:20
  }
})
