import React, { useState } from 'react'
import { Button, Card } from 'reactstrap'
import { useAuth } from '../../context/useAuth';


const LoginPage = () => {
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin } = useAuth()

    return (
        <div className="containerLogin">
            <div style={{
                marginTop: '8%',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Card style={{
                    textAlign: 'center',
                    padding: '20px',
                    minWidth: '250px'
                }}>
                    <h4>Login Simple Ecomerce</h4>
                    <div className="input-group mt-4 mb-4">
                        <input value={nim} onChange={(event) => setNim(event.target.value)} type="text" className="form-control" placeholder="Email Anda" name="email" id="email" aria-label="email" aria-describedby="email" />
                    </div>
                    <div className="input-group mb-4">
                        <input type="password" className="form-control" placeholder="Password Anda" id="password" autoComplete="on" vaue={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <center>
                        <Button onClick={onLogin} className="text-white center border-0" style={{ backgroundColor:'#FF6565', borderRadius: '50px', width: '180px', height: '50px' }}>Masuk Akun</Button>
                    </center>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage