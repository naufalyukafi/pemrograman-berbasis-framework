import React, {useContext, useState} from 'react'
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  getAuth } from 'firebase/auth';
import { appInit, AuthContext } from './App';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Auth = useContext(AuthContext);
  
  const authInit = getAuth(appInit)

  const handleForm = e => {
      e.preventDefault();
      signInWithEmailAndPassword(authInit, email, password)
      .then(res => {
        if(res.user) Auth.setIsLoggedIn(true)
      })
      .catch(err => {
        setError(err.message)
      })
  }
  const googleProvider = new GoogleAuthProvider()
  const handleLoginByGoogle = () => {
    signInWithPopup(authInit, googleProvider)
    .then(res => {
      if(res.user) Auth.setIsLoggedIn(true)
    })
    .catch(err => {
      setError(err.message)
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => handleForm(e)}>
        <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder='email'
        />
        <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder='password'
        />
        <hr />
        <button 
          className='googleBtn'
          type='button'
          onClick={handleLoginByGoogle}
        >
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
              alt="logo"
            />
            Join With Google
        </button>
        <button type='submit'>Login</button>
        <span>{error}</span>
      </form>
    </div>
  )
}

export default Login