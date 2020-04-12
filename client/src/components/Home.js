import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import gest from '../assets/gest.PNG'


const IMGWrap = styled.img`
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0 10px 10px 30px;
    margin-left: -5%;
    margin-top: 40px;
      
`
//axios call to Diabetes fact of the Day?
//Also some links to credible Diabetes Data?

export default function Home(){
    return(
        <div>
            <IMGWrap img src={gest} />

        </div>
    )
}
