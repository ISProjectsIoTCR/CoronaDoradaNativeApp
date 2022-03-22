import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


import React, { Component } from 'react';
import { WebView } from 'react-native-webview';


const GOOGLE = 'https://coronadorada.com/app/'


export function AppCDScreen() {
  const width_proportion = '100%';
  const height_proportion = '100%';
  return (
    <View style={styles.container}>
      <View style={{  width: width_proportion, height: height_proportion }}>

        <WebView source={{ uri: GOOGLE }}
          onLoad={console.log('Cargado')} />

      </View>
      <StatusBar hidden style="dark" />



    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
