import React, {useState, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserProvider.js'
import styled from 'styled-components'

//blog on 

const BlogWrapper = styled.div`

`
const PostWrapper = styled.div`

` 
const ImgWrapper = styled.img`

`

export default function Blog(){
    const { user: { username } } = useContext(UserContext)

}