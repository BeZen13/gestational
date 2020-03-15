import React from 'react'
import styled from 'styled-components'

const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%;
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
            <button>{ btnText }</button> 
            <p style={{color: "red"}}>{ errMsg }</p>       
        </FormWrap>
    )
    
}