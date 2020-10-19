import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanageMaps from './pages/OrphanageMaps'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'



function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/app' component={OrphanageMaps} />
                <Route path='/orphanages/create' component={CreateOrphanage} />
                <Route path='/orphanages/:id' component={Orphanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;