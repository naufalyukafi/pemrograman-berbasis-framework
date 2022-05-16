import React, {createContext, useState} from 'react';
import './Style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app'
import Header from './Header';
import routes from './routes';
import firebaseConfig from './firebase.config'
export const AuthContext = createContext(null);

export const appInit = initializeApp(firebaseConfig);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      Is Logged in ? {JSON.stringify(isLoggedIn)}    
      <div className='App'>
        <Router>
          <Header />
          <Switch>
            {
              routes.map(route => (
                <Route 
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
