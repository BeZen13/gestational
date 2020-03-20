import React, { useState } from 'react'
import styled from 'styled-components'


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
    const [ inputs, setInputs ] = useState(initNumbersInputs)
    const { addNumbers } = props

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        addNumbers(inputs)
        setInputs(initNumbersInputs)
    }

        const { aonec, glucose, carbs, weight, calories, systolic, diastolic } = inputs


    return(
        <FormWrapperNum onSubmit={handleSubmit}>
            <input 
                type="number"
                name="aonec"
                value={aonec}
                placeholder="A 1 C"
                
                required
            />
            <input
                type="number"
                name="glucose"
                value={glucose}
                placeholder="Glucose lvl"
                
                required
            />
            <input
                type="number"
                name="carbs"
                value={carbs}
                placeholder="Carbs of meals"
                
                required
            />
            <input
                type="number"
                name="weight"
                value={weight}
                placeholder="Weight lbs"
               
                required
            />
            <input
                type="number"
                name="Calories"
                value={calories}
                placeholder="Calories ingested"
                
                required
            />    
            <input
                type="number"
                name="systolic"
                value={systolic}
                placeholder="Systolic BP"
                
                required     
            />
            <input
                type="number"
                name="diastolic"
                value={diastolic}
                placeholder="Diastolic BP"
                
                required
            />
            <button>Enter Info</button>  

        </FormWrapperNum>
    )
}