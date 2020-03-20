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

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
    }

    //auth styling inputs

    const AuthWrap = styled.div`
        width: 350px;
        height: auto;
        margin: 10px 10px 10px 30px;
        box-shadow: 5px 5px 15px #000000;
        background-color: rgb(236, 236, 236, 0.75);
        overflow: hidden
        justify-content: center;
        align-content: center;
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
                <h2>Welcome to One Blood!</h2>
            </WelcomeMsg>
           { !toggle ?
               <>
                    <AuthForm  
                        handleChange={ handleChange }
                        handleSubmit={ handleSignup }
                        inputs={inputs}
                        btnText="Sign Up"
                        errMsg={errMsg}
                    />
                    <p style={{textAlign: "center"}} onClick={toggleForm}>Already a Member?</p> 
                </> 
            :
                <>
                    <AuthForm
                        handleChange={ handleChange }
                        handleSubmit={ handleLogin }
                        inputs={inputs}
                        btnText="Login"
                        errMsg={errMsg}
                    />
                    <p style={{textAlign: "center"}} onClick={toggleForm}>Not a Member Yet?</p>
                </> 
            }       
        </AuthWrap>
    )

}