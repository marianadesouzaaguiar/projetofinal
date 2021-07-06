import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Iniciativas from "../pages/Iniciativas"
import Autora from "../pages/Autora"

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route  path='/iniciativas' component={Iniciativas} />
                <Route path='/autora' component={Autora}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes