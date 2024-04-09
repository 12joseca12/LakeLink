import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { styles } from '../styles'

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Correo electrónico"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Contraseña"
      />
      <Button onPress={signIn} title="Iniciar sesión" />
    </View>
  );
}
