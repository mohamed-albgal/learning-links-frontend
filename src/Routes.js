import React from 'react';
import { Router, Switch } from "react-router-dom";
import Layout from './components/containers/AppContainer';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
        </Switch>
    )
}