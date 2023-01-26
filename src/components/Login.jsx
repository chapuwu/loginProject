import React from 'react'
import { useState } from 'react'
import './Login.css'

export default function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function alertData() {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user,
                password,
            }),
        })
    }

    return (
        <div className='login-container'>
            <h1>Unifix</h1>
            <form className='form1'>
                <input
                    type='text'
                    required
                    onChange={(e) => {
                        setUser(e.target.value)
                    }}
                />
                <label className='lbl-username'>
                    <span className='text-nomb'>Username</span>
                </label>
            </form>
            <form className='form2'>
                <input
                    type='password'
                    id='password'
                    required
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <label className='lbl-password'>
                    <span className='text-password'>Password</span>
                </label>
            </form>
            <button onClick={() => alertData()}>Sign in</button>
        </div>
    )
}
