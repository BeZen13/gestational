import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../context/UserProvider.js'
import { VictoryLine, VictoryTheme, VictoryChart, VictorAxis } from 'victory'


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

const PageHolder = styled.div`

`


export default function Numbers(props){
    console.log(UserContext)
   
    //const { deleteNumbers } = useContext(UserContext)
    
    const { aonec, glucose, carbs, weight, calories, systolic, diastolic, _id} = props

    return(
        <PageHolder>
            <NumbersWrapper> 
                <h1>A1C: {aonec}</h1>
                <h1>Glucose: {glucose}</h1>
                <h1>Carbs: {carbs}</h1>
                <h1>Weight: {weight}</h1>
                <h1>Calories of last meal: {calories}</h1>
                <h1>BloodPressuer: {systolic}/{diastolic}</h1>
                
            </NumbersWrapper>
            <GraphWrapper> 
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryLine
                        style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                            {x: 1, y: {aonec}}
                        ]}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                          }}
                    />
                </VictoryChart>
            </GraphWrapper>
        </PageHolder>
    )
}