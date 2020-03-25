import React, {useState, useContext} from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
import styled from 'styled-components'
import real from '../assets/real.png'


const initInputs = { username: "", password: "" }

const PNGWrap = styled.img`
    height: 300px;
    width 450px;
    margin: 0 10px 10px 30px;
    margin-left: 400px
`

const AuthFormWrap = styled.div`
    background-color: rgb(59, 88, 84);
    align-content: center;
    text-align: center;
    margin-left: 30px;
    width: 25%;
    height: auto;
    box-shadow: 5px 5px 15px #000000;
    overflow: hidden;
`

const WelcomeMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100 0 400px 0;
    margin-top: 50px;
    color: crimson;
    font-size: 20px;
    font-weight: 800;
`

export default function Auth(props){
    const [ inputs, setInputs ] = useState(initInputs)
    const [ toggle, setToggle ] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
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

    return(
        <div>
            <AuthFormWrap>
                <WelcomeMessage>
                    Welcome to One Drop! Please Login!
                </WelcomeMessage>    
                { !toggle ?
                    <>
                        <AuthForm
                            handleChange={handleChange}
                            handleSubmit={handleSignup}
                            inputs={inputs}
                            btnText="Sign Up"
                            errMsg={errMsg}
                        />
                        <p onClick={toggleForm} style={{
                            color: "crimson",
                            fontWeight: "800"
                        }}>Already a Member?</p>
                    </>
                :
                    <>
                        <AuthForm 
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            inputs={inputs}
                            btnText="Login"
                            errMsg={errMsg}
                        />
                        <p onClick={toggleForm} style={{
                            color: "crimson",
                            fontWeight: "800"
                        }}>Not a Member Yet?</p> 
                    </>           
                }
            </AuthFormWrap>
            <PNGWrap img src={real}/>
        </div>
    )
}