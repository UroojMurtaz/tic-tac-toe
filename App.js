import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Button } from 'react-native';

export default function App() {

  return (
    <View > 

  <View style ={styles.paragraph}> 
  
  <View  style={{flexDirection:"row",justifyContent:"space-between",margin:10}}> 
   <Button title=""  /> 
   <Button title="" /> 
  <Button title="" />

  </View>
  <View style={{flexDirection:"row",justifyContent:"space-between",margin:10}}> 
  <Button title=""  />
  <Button title=""  />
  <Button title=""  />

  </View>
  <View style={{flexDirection:"row",justifyContent:"space-between",margin:10}}> 
  <Button title=""  />
  <Button title="" />
  <Button title=""  />
  </View>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection :"row"
  },
  paragraph: {
    margin: 120,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  },
  
});


