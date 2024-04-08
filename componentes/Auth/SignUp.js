import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';

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
    <div>
      <h1>Registrarse</h1>
      <label htmlFor="email">Correo electrónico</label>
      <input type="email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" onChange={(ev) => setPassword(ev.target.value)} />
      <button onClick={signUp}>Crear usuario</button>
    </div>
  );
}
