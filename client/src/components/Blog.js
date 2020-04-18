import React, {useState, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserProvider.js'
import styled from 'styled-components'

//blog on 

const BlogWrapper = styled.form`

`
const ImgWrapper = styled.img`

`
const initBlogPost = {
    postBody = "",
    upVote = "",
    commnents = ""
}

export default function Blog(){
    const { user: { username } } = useContext(UserContext)

    const [ blogs, setBlogs ] = useState(initBlogPost)
}