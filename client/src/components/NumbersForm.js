import React, { useState } from 'react'
import styled from 'styled-components'
import { useInput } from '../hooks/useInput.js'

const initNumbersInputs ={
    aonec: "",
    glucose: "",
    carbs: "",
    weight: "",
    systolic : "",
    diastolic: "",
    calories: "",
}

const FormWrapperNum = styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin: 0 10px 10px 30px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75);
    overflow: hidden;
`


export default function NumbersForm(props){
    const { value: aonec, bind: bindAOneC } = useInput("")
    const { value: glucose, bind: bindGlucose } = useInput("")
    const { value: carbs, bind: bindCarbs } = useInput("")
    const { value: weight, bind: bindWeight } = useInput("")
    const { value: systolic, bind: bindSystolic } = useInput("")
    const { value: diastolic, bind: bindDiastolic } = useInput("")
    const { value: calories, bind: bindCalories } = useInput("")

    const { addNumbers } = props

    function handleSubmit(e){
        e.preventDefault()
        addNumbers({ aonec, glucose, carbs, weight, systolic, diastolic, calories })
    }



    return(
        <FormWrapperNum onSubmit={handleSubmit}>
            <input 
                type="number"
                name="aonec"
                value={aonec}
                placeholder="A 1 C"
                {...bindAOneC}
                required
            />
            <input
                type="number"
                name="glucose"
                value={glucose}
                placeholder="Glucose lvl"
                {...bindGlucose}
                required
            />
            <input
                type="number"
                name="carbs"
                value={carbs}
                placeholder="Carbs of meals"
                {...bindCarbs}
                required
            />
            <input
                type="number"
                name="weight"
                value={weight}
                placeholder="Weight lbs"
                {...bindWeight}
                required
            />
            <input
                type="number"
                name="Calories"
                value={calories}
                placeholder="Calories ingested"
                {...bindCalories}
                required
            />    
            <input
                type="number"
                name="systolic"
                value={systolic}
                placeholder="Systolic BP"
                {...bindSystolic}
                required     
            />
            <input
                type="number"
                name="diastolic"
                value={diastolic}
                placeholder="Diastolic BP"
                {...bindDiastolic}
                required
            />
            <button>Enter Info</button>  

        </FormWrapperNum>
    )
}