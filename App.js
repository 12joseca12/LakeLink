import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './screens/inicio';

import { FirebaseAppProvider} from 'reactfire'
import {firebaseConfig} from './firebase-config';
import { Suspense } from 'react';
import Auth from './componentes/Auth/Auth';

export default function App() {
   return (
        <Inicio /> 
  );
}


