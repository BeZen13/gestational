import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NLink = styled(Link)`
    color: #286653;
    text-decoration: none;
    margin: 5px;
    box-sizing: content-box;

    :hover{
        border-bottom: 1px solid #000000;
        border-top: 1px solid rgba(0, 0, 0, 0);
    }
`;