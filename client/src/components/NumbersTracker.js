import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import NumbersForm from './NumbersForm.js'
import NumbersList from  './NumbersList.js'
import styled from 'styled-components'

//data layout component

const NumbersTrackerWrapper = styled.div`
    display: block;
    width: 100%;
    height: auto;
    margin: 10px 10px 10px 30px;
    margin-left: auto;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75);
    overflow: hidden;
    text-align: center;
    margin-top: 25px;
    justify-content: center;
    
`
const WelcomeMessage = styled.div`
    flex-direction: column;
    align-items: center;
    padding: 100 0 400px 0;
    font-size: 20px;
    font-weight: 800;
`

export default function NumbersTracker(props){
    const {
        user: {
            username
        },
        addNumbers,
        numbers
    } = useContext(UserContext)

    return(
        <NumbersTrackerWrapper>
            <WelcomeMessage>Welcome @{username}!</WelcomeMessage>
            <h3>Lets Keep your Levels Organized!</h3>
            <NumbersForm addNumbers={addNumbers}/>
            <h3>Your Levels</h3>
            <NumbersList numbers={numbers}/>
        </NumbersTrackerWrapper>
    )
}


