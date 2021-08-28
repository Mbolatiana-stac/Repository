import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';

import { AppRegistry } from 'react-native';
import Accueil from "./components/Accueil";

import User1 from "./components/Backoffice/User1";

import User from "./components/Backoffice/User";

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>

      <User1></User1>
    </View>
    
  );
}




