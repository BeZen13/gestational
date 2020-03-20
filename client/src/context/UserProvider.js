import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user"))  ||  {},
        token: localStorage.getItem("token") || "",
        numbers: [],
        errMsg: ""
    }

    const [ userState, setUserState ] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(  res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getUserNumbers()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }


    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            numbers: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    //numbers context info:

    function getUserNumbers(){
        userAxios.get("/api/numbers/user")
            .then(res => {  HTMLFormControlsCollection.logt(res.data)
                setUserState(prevState => ({
                    ...prevState,
                    numbers: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    function addNumbers(newNumbers){
        userAxios.post("api/numbers", newNumbers)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    numbers: [...prevState.numbers, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteNumbers(_id){
        console.log(_id)
        userAxios.delete(`/api/numbers/${_id}`)
            .then(res => {
                getUserNumbers()
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addNumbers,
                deleteNumbers,
                getUserNumbers,
                resetAuthErr
            }}>
                { props.children }
            </UserContext.Provider>
    )
}