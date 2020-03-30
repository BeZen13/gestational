import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../context/UserProvider.js'
import { VictoryLine, VictoryTheme } from 'victory'


const NumbersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    margin: 0 10px 10px 30px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75);
    overflow: hidden;
`
const GraphWrapper = styled.div`
    display: flex;
    flex-direction column;
    width: auto;
    height: auto;
    margin 0 10px 10px 30px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(59, 88, 84);
    overflow: hidden; 
`


export default function Numbers(props){
    const { deleteNumbers } = useContext(UserContext)
    
    const { aonec, glucose, carbs, weight, calories, systolic, diastolic, _id} = props

    return(
        <div>
            <NumbersWrapper>
                <h1>A1C: {aonec}</h1>
                <h1>Glucose: {glucose}</h1>
                <h1>Carbs: {carbs}</h1>
                <h1>Weight: {weight}</h1>
                <h1>Calories of last meal: {calories}</h1>
                <h1>BloodPressuer: {systolic}/{diastolic}</h1>
                <button onClick={() => deleteNumbers(_id)}>Delete</button>
            </NumbersWrapper>
            <GraphWrapper>

            </GraphWrapper>
        </div>
    )
}