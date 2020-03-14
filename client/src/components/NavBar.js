import React from 'react'
import styled from 'styled-components'

import bloody from '../assets/BloodLove.jpg'
import NavvyLinks from '../components/NavvyLinks.js'
import { NLink } from './styledcomponents/NLink.js'

const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 130px;
    position: relative;
    background-color: #286653;
    top: 0;
    left: 0;
    right: 0;
`

const Header = styled.div`
    margin: 24px 0 24px 5%;
`

const HeaderLogoLink = styled(NLink)`
    :hover {
        border: none;
    }
`

const HeaderLogo = styled.img`
    max-height: 75px;
    width: auto;
    height: auto;
`

export default function NavBar(props){
    return(
        <NavBarContainer>
            <Header>
                <HeaderLogoLink to="/">
                    <HeaderLogo src={bloody} alt="One Blood Mon!" />
                </HeaderLogoLink>
            </Header>
            <NavvyLinks />
        </NavBarContainer>
    )
}