import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './screens/Inicio';

import {
  FirebaseAppProvider
} from 'reactfire'
import {firebaseConfig} from './firebase-config';
import { Suspense } from 'react';
import Auth from './componentes/Auth/Auth';

export default function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Conectando a la app...'}>
        <Auth />
        <Inicio />
      </Suspense>
    </FirebaseAppProvider>
    
  );
}


