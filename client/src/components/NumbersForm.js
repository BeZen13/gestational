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

const FormWrapperNum = styled.form`
    display: inline-block;
    width: auto;
    height: auto;
    margin: 0 10px 10px 30px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75);
    overflow: hidden;
    align-content: center;
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
        console.log("this is happening")
    }

        const { aonec, glucose, carbs, weight, calories, systolic, diastolic } = inputs


    return(
        <FormWrapperNum onSubmit={handleSubmit}>
            <input 
                type="number"
                name="aonec"
                value={aonec}
                placeholder="A 1 C"
                onChange={handleChange}
               
            />
            <input
                type="number"
                name="glucose"
                value={glucose}
                placeholder="Glucose lvl"
                onChange={handleChange}
               
            />
            <input
                type="number"
                name="carbs"
                value={carbs}
                placeholder="Carbs of meals"
                onChange={handleChange}
               
            />
            <input
                type="number"
                name="weight"
                value={weight}
                placeholder="Weight lbs"
                onChange={handleChange}
            
            />
            <input
                type="number"
                name="calories"
                value={calories}
                placeholder="Calories ingested"
                onChange={handleChange}
                
            />    
            <input
                type="number"
                name="systolic"
                value={systolic}
                placeholder="Systolic BP"
                onChange={handleChange}
                   
            />
            <input
                type="number"
                name="diastolic"
                value={diastolic}
                placeholder="Diastolic BP"
                onChange={handleChange}
            
            />
            <button>Enter Info</button>  

        </FormWrapperNum>
    )
}