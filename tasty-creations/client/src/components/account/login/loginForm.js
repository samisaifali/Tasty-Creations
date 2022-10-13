import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
import './loginForm.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LoginForm = ({ error }) => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [err, setErr] = useState([])

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId:
                    '408408598288-o22i4f2u60ggm1pf5aa9is1bctpi75ic.apps.googleusercontent.com',
                scope: ''
            })
        }
        gapi.load('client: auth2', start)
    })

    // const [popupStyle, showPopup] = useState("hide");
    // const popup = () => {
    //   showPopup("login-popup");
    //   setTimeout(() => showPopup("hide"), 3000);
    // };

    // handle input from user

    const submitHandler = (e) => {
        e.preventDefault()
        axios
            .post(
                '/login',
                {
                    username: userName,
                    password: userPassword
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(function (response) {
                console.log('Res: ', response.data)
            })
            .catch(function (error) {
                console.log(error.response.data.errors)
                setErr(() => error.response.data.errors)
                setTimeout(() => {
                    setErr(() => [])
                }, 3000)
            })
    }

    const onSuccess = (e) => {
        alert('Signed in successfully!')
        console.log(e)
    }

    const onFailure = (e) => {
        alert('User is NOT signed in!')
        console.log(e)
    }

    return (
        <form onSubmit={submitHandler} method='POST'>
            <div className='login'>
                <h1>Login</h1>
                <div>
                    {err.length > 0 &&
                        err.map((er) => (
                            <div key={er} style={{ color: 'red' }}>
                                {er?.msg} for {er?.param}
                            </div>
                        ))}
                </div>
                <input
                    type='email'
                    required
                    placeholder='Enter username'
                    name='username'
                    id='username'
                    onChange={(e) => setUserName(e.target.value)}
                    // value={userName.username}
                />
                <input
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    id='password'
                    maxLength='12'
                    minLength='8'
                    required
                    onChange={(e) => setUserPassword(e.target.value)}
                    // value={details.password}
                />
                {/* <div className="login-button" onClick={popup}>
          <input type="submit" value="LOGIN" />
        </div> */}
                <input className='login-button' type='submit' value='LOGIN' />
                <p className='text'>Login Using</p>
                <div className='alter-login'>
                    <div className='google'>
                        <GoogleLogin
                            classname='google-login'
                            clientId='408408598288-o22i4f2u60ggm1pf5aa9is1bctpi75ic.apps.googleusercontent.com'
                            buttonText=''
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={false} //we can change the value here to "true", which will keep the sign in status
                            icon={false}
                            theme='dark'
                        />
                    </div>
                </div>
                <div>
                    <a href='/register'>Don't have an account?</a>
                </div>
                {/* <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p className="message">Username or password is incorrect.</p>
        </div> */}
            </div>
        </form>
    )
}

export default LoginForm
