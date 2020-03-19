import React, { useContext } from 'React'
import NavBar from './NavBar'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import NumbersTracker from './components/NumbersTracker.js'
import Home from './components/Home.js'

export default function App(){
    const { token, logout } = useContext(UserContext)

    return(
        <div className="app">
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