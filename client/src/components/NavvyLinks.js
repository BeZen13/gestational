import React, { useContext } from 'react'
import styled from "styled-components"
import { withRouter } from 'react-router-dom'
import { UserContext } from '../context/UserProvider.js'

import { NLink } from './styledComponents/NLink.js'

const LinkWrap  = styled.div`
    display: flex;
    justify-content: space-around;
    width: 430px;
    height: 50px;
    padding: 10px;
    margin: 0 5% 0 0;
    align-items: center;
`

 function NavvyLinks(props){
    const { token, logout } = useContext(UserContext)

    return(
        <LinkWrap>
            <NLink to="/Home">Home</NLink>
            <NLink to="/Numbers">Levels DB</NLink>
            { token ? (
                <NLink to="/" onClick={ logout }>
                    Logout
                </NLink>
            ) : null }
        </LinkWrap>
    )
}
export default withRouter(NavvyLinks)