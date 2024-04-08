import React, { useState } from 'react';
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
        <div>
            <button onClick={() => handleButtonClick('signUp')}>Registrarse</button>
            <button onClick={() => handleButtonClick('signIn')}>Iniciar sesión</button>
            {isSignIn ? <SignIn /> : <SignUp />}
        </div>
    )
  /*return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );*/
}
