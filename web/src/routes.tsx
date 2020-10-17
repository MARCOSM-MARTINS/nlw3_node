import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanageMaps from './pages/OrphanageMaps'


function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/app' component={OrphanageMaps} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;