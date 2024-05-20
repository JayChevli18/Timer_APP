import React, {useState} from "react";
import { View,Text,SafeAreaView, StyleSheet } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
// or any files within the Snack
import AssetExample from './src/components/RoundedButton';
import {color} from './src/utils/color';
import {Focus} from './src/features/Focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from "./src/features/FocusHistory";

export default function App() {
  console.log("Initial Commit");
  console.log("Initial Commit 2");
  const [currentSubject, setCurrentSubject]=useState(null);

  const [history,setHistory]=useState([]);

  return (

    <SafeAreaView style={styles.container}>
      {!currentSubject ? ( 
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history}/>
        </>
      ) : (
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject)=>{
            setHistory([...history,subject])
          }}
          clearSubject={()=>setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color.darkblue,
    padding: 8,
  },
});
