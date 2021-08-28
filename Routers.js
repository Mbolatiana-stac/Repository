import React from 'react'

import { Router, Scene } from 'react-native-router-flux'

import Accueil from './components/Accueil'



const Routers = () =>(
    <Route>
        <Scene key="root">
            <Scene key="Accueil" component={Accueil} title="Accueil" ></Scene>
             </Scene>
    </Route>
)

export default Routers