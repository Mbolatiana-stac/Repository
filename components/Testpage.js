import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Testpage = () => {
   const goAccueil = () => {
      Actions.Accueil()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goAccueil}>
         <Text>This is HOME!</Text>
      </TouchableOpacity>
   )
}
export default Testpage