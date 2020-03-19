import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import NumbersForm from './NumbersForm.js'
import NumbersList from  './NumberList.js'
import styled from 'styled-components'

//data layout component

const NumbersTrackerWrapper = styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin: 0 10px 10px 30px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75);
    overflow: hidden;
`
const WelcomeMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100 0 400px 0;
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
            <WelcomeMessage>Welcome ${username.name}!</WelcomeMessage>
            <h3>Lets Keep your Levels Organized!</h3>
            <NumbersForm addNumbers={addNumbers}/>
            <h3>Your Levels</h3>
            <NumbersList numbers={numbers}/>
        </NumbersTrackerWrapper>
    )
}


