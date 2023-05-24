import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const API = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

export default function App() {

  const [Whetherdata, setwhetherdata] =useState(null);
  const [loaded, setloaded]= useState(true);

  async function fetchWhetherData(cityName){
    setloaded(false);

    const API_KEY = "a72a7638a885f015f5e0485f6ded3167";

  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
