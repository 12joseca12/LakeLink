import React, { useState } from 'react';
import { View, Text, TextInput,Button } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { styles } from '../styles'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registrarse</Text>
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
        secureTextEntry={true}
        placeholder="Contraseña"
      />
      <View style={styles.buttonContainer}>
        <Button title="Crear usuario" onPress={signUp} />
      </View>
    </View>
  );
}
