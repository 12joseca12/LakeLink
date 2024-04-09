import Inicio from './screens/inicio';
import Nav from './componentes/Navegacion';


import { FirebaseAppProvider} from 'reactfire'
import {firebaseConfig} from './firebase-config';
import { Suspense } from 'react';
import Auth from './componentes/Auth/Auth';

export default function App() {
   return (
        <Nav/> 
  );
}


