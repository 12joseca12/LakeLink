import React from "react";
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {styles} from './styles'

import Buscar from '../screens/Buscar';
import Inicio from '../screens/inicio';
import Perfil from '../screens/Perfil';
import Recomendaciones from '../screens/Recomendaciones';
import Subir from '../screens/Subir';
import Lupa from '../assets/lupa.png';
import Home from '../assets/hogar.png';
import Usuario from '../assets/usuario.png';
import Descubrir from '../assets/recomendar.png';
import Añadir from '../assets/anadir-imagen.png';




/* Barra de Navegación */
const Tab =createBottomTabNavigator();

function Barra(){
    return(
        <Tab.Navigator 
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: {
                backgroundColor: 'black', 
              },
        }}
        >
            <Tab.Screen name="Inicio" component={Inicio}
               options={{
                tabBarIcon:({focused})=>(
                    <Image source={Home} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                ),
               }}
            />
            <Tab.Screen name="Buscar" component={Buscar}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Lupa} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
            <Tab.Screen name="SubirFoto" component={Subir}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Añadir} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
            <Tab.Screen name="Recomendaciones" component={Recomendaciones}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Descubrir} style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarIcon:({focused})=>(
                        <Image source={Usuario}  style={[styles.iconoNavegacion, { tintColor: focused ? 'orange' : 'white'}]}/>
                    ),
                   }}
            />
        </Tab.Navigator>
    )
}

export default function Nav(){
    return(
      <NavigationContainer>
        <Barra/>
    </NavigationContainer>  
    )
}

/* Final de la barra de navegación */