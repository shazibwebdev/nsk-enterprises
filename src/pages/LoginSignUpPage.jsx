// src/pages/LoginSignUpPage.jsx
import React, { useEffect, useState } from 'react'
import '../styles/LogIn&SignUpPage.css'

import { FaEye, FaEyeSlash, FaEnvelope, FaUser } from 'react-icons/fa'
import { useAuthContext } from '../contexts/AuthContext'
import AnimatedPage from '../components/common/AnimatedPage'

export default function LoginSignUpPage() {
    const [showSignUpPassword, setShowSignUpPassword] = useState(false)
    const [showLogInPassword, setShowLogInPassword] = useState(false)

    const {
        isLoginActive,
        setIsLoginActive,
        handleLoginClick,
        handleSignUpClick,
        signUpRegister,
        handleSignUpSubmit,
        signUpErrors,
        signUpSubmitting,
        onSignUpSubmit,

        logInRegister,
        handlelogInSubmit,
        logInErrors,
        logInSubmitting,
        onLogInSubmit
    } = useAuthContext()


    return (
        <AnimatedPage>
            <div className='login-signup-form'>
                <main>
                    <div className="container">
                        <div className={`slider ${isLoginActive ? 'logIn-active' : 'signUp-active'}`} />

                        <div className={`headd ${!isLoginActive ? 'head-' : ''}`}>
                            <h2 className="text-white text-2xl font-bold">Welcome</h2>
                            <p className="p">Already have an account?</p>
                            <button className="btn logIn-btn" onClick={handleLoginClick}>Log In</button>
                        </div>

                        <div className={`head1 ${isLoginActive ? 'head-1' : ''}`}>
                            <h2 className="text-white text-2xl font-bold">Welcome Back!</h2>
                            <p className="p">Don't have an account?</p>
                            <button className="btn signUp-btn" onClick={handleSignUpClick}>Sign Up</button>
                        </div>

                        {/* SIGN UP FORM */}
                        <div className={`signUp-main gap-[10px] md:gap-[20px] ${!isLoginActive ? 'signUp-form-active' : ''}`}>
                            <h2 className='font-bold text-2xl'>SIGN UP</h2>
                            <form onSubmit={handleSignUpSubmit(onSignUpSubmit)} className="sign gap-[5px] md:gap-[10px]">
                                <div className="div">
                                    <input {...signUpRegister('username')} className="border-2 rounded border-gray-400 sign-name" placeholder="Username" type="text" />
                                    <FaUser className='absolute top-3 right-2' />
                                    {signUpErrors.username && <p className='text-[red] text-sm'>{signUpErrors.username.message}</p>}
                                </div>
                                <div className="div">
                                    <input {...signUpRegister('email')} className="border-2 rounded border-gray-400 sign-mail" placeholder="E-mail" />
                                    <FaEnvelope className='absolute top-3 right-2' />
                                    {signUpErrors.email && <p className='text-[red] text-sm'>{signUpErrors.email.message}</p>}
                                </div>
                                <div className="div relative">
                                    <input {...signUpRegister('password')} className="border-2 rounded border-gray-400 sign-pass pr-10" placeholder="Password" type={showSignUpPassword ? 'text' : 'password'} />
                                    <span className="absolute top-3 right-2 cursor-pointer" onClick={() => setShowSignUpPassword(!showSignUpPassword)}>
                                        {showSignUpPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    {signUpErrors.password && <p className='text-[red] text-sm'>{signUpErrors.password.message}</p>}
                                </div>
                                <ul className='list-disc md:gap-[10px]'>
                                    <li>Must be at least 8 characters long.</li>
                                    <li>Must contain a lowercase letter.</li>
                                    <li>Must contain an uppercase letter.</li>
                                    <li>Must contain a number & a special character.</li>
                                </ul>
                                <button className="same signUp" type="submit">Sign Up</button>
                            </form>
                        </div>

                        {/* LOGIN FORM */}
                        <div className={`logIn-main ${isLoginActive ? 'logIn-form-active' : ''}`}>
                            <h2 className='font-bold text-2xl'>LOG IN</h2>
                            <form onSubmit={handlelogInSubmit(onLogInSubmit)} className="log gap-[10px] md:gap-[20px]">
                                <div className="div">
                                    <input {...logInRegister('email')} className="border-2 rounded border-gray-400 log-mail" placeholder="E-mail" />
                                    <FaEnvelope className='absolute top-3 right-2' />
                                    {logInErrors.email && <p className='text-[red] text-sm'>{logInErrors.email.message}</p>}
                                </div>
                                <div className="div relative">
                                    <input {...logInRegister('password')} className="border-2 rounded border-gray-400 log-pass pr-10" placeholder="Password" type={showLogInPassword ? 'text' : 'password'} />
                                    <span className="absolute top-3 right-2 cursor-pointer" onClick={() => setShowLogInPassword(!showLogInPassword)}>
                                        {showLogInPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    {logInErrors.password && <p className='text-[red] text-sm'>{logInErrors.password.message}</p>}
                                </div>
                                <button disabled={logInSubmitting} className="same logIn" type="submit">{logInSubmitting ? 'Logging In...' : 'Log In'}</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </AnimatedPage>

    )
}
