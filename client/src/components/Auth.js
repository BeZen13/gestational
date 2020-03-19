import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
import styled from 'styled-components'


const initInputs = { username: "", password: "" }

export default function Auth(){
    const [ inputs, setInputs ] = useState(initInputs)
    const [ toggle, setToggle ] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
    }

    //auth styling inputs

    const AuthWrap = styled.div`

    `;

    const WelcomeMsg = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100 0 400px 0;
    `

    return(
        <AuthWrap>
            <WelcomeMsg>
                <h2>Welcome!</h2>
            </WelcomeMsg>
           { !toggle ?
               <>
                    <AuthForm  
                        handleChange={ handleChange }
                        handleSubmit={ handleSignup }
                        inputs={ inputs }
                        btnText="Sign Up"
                        errMsg={errMsg}
                    />
                    <p  onClick={toggleForm}>Already a Member?</p> 
                </> 
            :
                <>
                    <AuthForm
                        handleChange={ handleChange }
                        handleSubmit={ handleLogin }
                        inputs={ inputs }
                        btnText="Login"
                        errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>Not a Member Yet?</p>
                </> 
            }       
        </AuthWrap>
    )

}