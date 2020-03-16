import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../context/UserProvider.js'


const NumbersWrapper = styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin: 0 10px 10px 30px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75);
    overflow: hidden;
`


export default function Leads(props){
    const { deleteNumbers } = useContext(UserContext)
}