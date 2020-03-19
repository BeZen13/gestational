import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserContext } from './context/UserProvider.js'
import Auth from './components/Auth.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import NumbersTracker from './components/NumbersTracker.js'
import Home from './components/Home.js'
import GlobalStyle from './themes/GlobalStyle.js'

export default function App(){
    const { token, logout } = useContext(UserContext)

    return(
        <div className="app">
            <GlobalStyle />
            { token && <NavBar logout={logout}/> }
            <Switch>
                <Route
                    exact path="/"
                    render={() => token ? <Redirect to="/Home" /> : <Auth/>}
                />
                <ProtectedRoute
                    path="/NumbersTracker"
                    component={NumbersTracker}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute
                    path="Home"
                    component={Home}
                    redirectTo="/"
                    token={token}
                />     
            </Switch>
        </div>
    )
}