import React from 'react'
import styled from 'styled-components'
import real from '../assets/real.png'

const FormWrap = styled.form`
    display: flex;
    height: auto;
    flex-direction: column;
    width: 25%;
    margin: 5vh auto 0 auto;
`


export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username, 
            password
        }
    } = props

    return(
    <div>
        <FormWrap onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="text"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <button style={{
                textAlign: "center",
                marginTop: "5px"
            }}>{ btnText }</button> 
            <p style={{
                color: "red",
                textAlign: "center"
            }}>{ errMsg }</p>       
        </FormWrap>
   
    </div>    
    )
    
}