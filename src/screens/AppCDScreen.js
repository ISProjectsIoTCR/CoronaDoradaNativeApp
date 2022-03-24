
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Modal, Text, View } from 'react-native';
import { LoadingModal } from "components";

import React, { useState, Component, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { last } from 'lodash';


const GOOGLE = 'https://coronadorada.com/app/'





export function AppCDScreen() {
  const width_proportion = '100%';
  const height_proportion = '100%';
  const [showModal, setShowModal] = useState(null);

  return (
    <View style={styles.container}>
      <View style={{ width: width_proportion, height: height_proportion }}>
        {!showModal && (
          <LoadingModal isShow={true} text="Cargando" />
        ) 
        }
        <WebView source={{ uri: GOOGLE }}
          onLoad={() => setShowModal(true)}></WebView>
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
