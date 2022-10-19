import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import './registerForm.css'

const RegisterForm = () => {
    useEffect(() => {
        // TODO
    })

    const [popupStyle, showPopup] = useState('hide')
    const handleSubmit = (e) => {
        // showPopup('register-popup')
        // setTimeout(() => showPopup('hide'), 3000)
    }

    const onSuccess = (e) => {
        alert('Account created successfully!')
        console.log(e)
    }

    const onFailure = (e) => {
        alert('User account NOT created!')
        console.log(e)
    }

    return (
        <form onSubmit={handleSubmit} className='register'>
            <h1>Register</h1>
            <input
                type='text'
                placeholder='First name'
                pattern='^[A-Za-z]{2,20}$'
                required
            />

            <input
                type='text'
                placeholder='Last name'
                pattern='^[A-Za-z]{2,20}$'
                required
            />

            <input type='email' placeholder='Email address' required />

            <input
                type='password'
                placeholder='Password'
                maxLength='20'
                minLength='6'
                required
            />

            <input
                type='password'
                placeholder='Confirm password'
                maxLength='20'
                minLength='6'
                required
            />

            <button
                style={{ border: 'none' }}
                className='register-button'
                type='submit'
            >
                Register
            </button>

            <p classname='text'>Register Using</p>
            <div className='alter-register'>
                <div className='google'>
                    <GoogleLogin
                        classname='google-register'
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
                <a href='/login'>Already have an account?</a>
            </div>
            <div className={popupStyle}>
                <h3>Registration Failed</h3>
                <p>All fields are required.</p>
            </div>
        </form>
    )
}

export default RegisterForm
