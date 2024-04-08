import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

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
    <div>
      <h1>Iniciar Sesión</h1>
      <label htmlFor="email">Correo electrónico</label>
      <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
      <button onClick={signIn}>Iniciar sesión</button>
    </div>
  );
}
