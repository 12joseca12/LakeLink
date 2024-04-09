import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { styles } from '../styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleButtonClick = (type) => {
        if (type === 'signUp') {
            setIsSignIn(false);
        } else {
            setIsSignIn(true);
        }
    };

    return (
      <View style={styles.container}>
          <Button title="Registrarse" onPress={() => handleButtonClick('signUp')} />
          <Button title="Iniciar sesión" onPress={() => handleButtonClick('signIn')} />
          {isSignIn ? <SignIn /> : <SignUp />}
      </View>
  );
  
}
