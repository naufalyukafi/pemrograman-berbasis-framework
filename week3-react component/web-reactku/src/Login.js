import React from 'react'
import Button from './components/Button'
import Card from './components/Card'
import InputField from './components/InputField'


const Login = () => {
  return (
    <div style={{width: '100%'}}>
        <h2 style={{textAlign: 'center'}}>Form Login</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card>
                <form style={{marginTop: '50px'}}>
                    <InputField 
                        label="Username"
                        type="text"
                        name="Username"
                        placeholder="masukan username"
                    />
                    <InputField 
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="masukan password"
                    />
                    <div style={{marginTop: '20px', marginBottom: '20px'}}>
                        <Button title="Login" type="primary" />
                        <div style={{marginTop: '10px', marginBottom: '10px'}}>
                            <input type="checkbox" name="remember" />
                            <label for="remember">Remember Me</label>
                        </div>
                        <Button title="Cancel" type="secondary" />
                    </div>
                </form>
            </Card>
        </div>
    </div>
  )
}

export default Login