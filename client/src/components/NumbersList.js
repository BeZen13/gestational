import React, { useEffect, useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import Numbers from './Numbers.js'

const NumbersListWrapper = styled.div`
    display: flex;
    width: auto;
    height: auto;
    margin: 0 10px 10px 30px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75);
    overflow: hidden;
`

export default function NumbersList(props){
    const { numbers } = props
    const { getUserNumbers } = useContext(UserContext)
    console.log(numbers)

    useEffect( () => {
        getUserNumbers()
    }, [])

    return(
        <NumbersListWrapper>
            { numbers.map(numberSet => <Numbers {...numberSet} key={numberSet._id}/>) }
        </NumbersListWrapper>
    )
}
