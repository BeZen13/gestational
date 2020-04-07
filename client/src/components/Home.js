import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import gest from '../assets/gest.PNG'


const IMGWrap = styled.img`
    display: inline-block;
    height: auto;
    width auto;
    margin: 0 10px 10px 30px;
    margin-left: 25%;
    margin-top: 40px;  
`

export default function Home(){
    return(
        <div>
            <IMGWrap img src={gest} />

        </div>
    )
}
