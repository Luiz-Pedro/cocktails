import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Cocktails from './Pages/Cocktails';
import Recipe from './Pages/Recipe';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/cocktails" component={Cocktails}/> 
                <Route path="/recipe/:cocktail" component={Recipe}/> 
            </Switch>
        </BrowserRouter>
    );
}